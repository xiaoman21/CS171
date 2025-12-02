// =====================================================
// YouTube Interactive Storytelling
// =====================================================

(function() {
  if (window.youtubeStorytellingLoaded) return;
  window.youtubeStorytellingLoaded = true;

  const CSV_PATH = "top_channels_2024_monthly_summary.csv";
  const parseMonth = d3.utcParse("%Y-%m");
  const formatMonth = d3.utcFormat("%B");

  // Profile pictures
  const profilePics = {
    "@MrBeast": "assets/profile_pics/MrBeast.png",
    "@TSeries": "assets/profile_pics/TSeries.png",
    "@SETIndia": "assets/profile_pics/SETIndia.png",
    "@VladandNiki": "assets/profile_pics/VladandNiki.png",
    "@CoComelon": "assets/profile_pics/CoComelon.png"
  };

  // Channel display names
  const channelNames = {
    "@MrBeast": "@MrBeast",
    "@TSeries": "@TSeries",
    "@SETIndia": "@SETIndia",
    "@VladandNiki": "@VladandNiki",
    "@CoComelon": "@CoComelon"
  };

  let currentChannelIndex = -1;
  let allSeries = [];
  let chartElements = {};

  function initYouTubeStorytelling() {
    console.log("📖 YouTube Storytelling initialized");

    // Only initialize if Slide 5.6 exists
    const slide5_6 = document.querySelector(".slide5-6");
    if (!slide5_6) {
      console.warn("Slide 5.6 not found, storytelling features disabled");
      return;
    }

    // Wait for the long-short combined chart to be ready
    setTimeout(() => {
      setupInteractiveFeatures();
    }, 2000);
  }

  function setupInteractiveFeatures() {
    // Only initialize if we're in Slide 5.6
    const slide5_6 = document.querySelector(".slide5-6");
    if (!slide5_6) {
      console.warn("Slide 5.6 not found");
      return;
    }

    // Wait for the long-short combined chart to be ready
    setTimeout(() => {
      const container = d3.select("#youtubeLongShortCombined");
      if (container.empty()) {
        console.warn("Container #youtubeLongShortCombined not found, retrying...");
        setTimeout(setupInteractiveFeatures, 1000);
        return;
      }

      const svg = container.select("svg");
      if (svg.empty()) {
        console.warn("SVG not found, retrying...");
        setTimeout(setupInteractiveFeatures, 1000);
        return;
      }

      // Load CSV to get data
      loadDataAndSetup();
    }, 3000);
  }

  function loadDataAndSetup() {
    d3.csv(CSV_PATH).then(raw => {
      const cols = new Map();
      raw.columns.forEach(c => cols.set(c.toLowerCase(), c));

      const pick = (...names) => {
        for (const n of names) if (cols.has(n)) return cols.get(n);
        return null;
      };

      const channelCol = pick("channelkey", "channel", "channel_key", "name");
      const monthCol = pick("month", "date", "year_month");
      const viewsCol = pick("viewstotal", "views_total", "total_views", "views");
      const shortsViewsCol = pick("viewsshorts", "views_shorts", "shorts_views");
      const shortsShareCol = pick("uploadsshortsshare", "uploads_shorts_share");
      const viewsShortsPctCol = pick("percentviewsfromshortsfromtotal", "percent_views_from_shorts_from_total");

      const data = raw.map(d => ({
        channel: d[channelCol],
        date: parseMonth((d[monthCol] || "").slice(0, 7)),
        total_views: +d[viewsCol] || 0,
        shorts_views: +d[shortsViewsCol] || 0,
        shorts_share: +d[shortsShareCol] || 0,
        views_shorts_pct: +d[viewsShortsPctCol] || 0,
        longform_views: (+d[viewsCol] || 0) - (+d[shortsViewsCol] || 0)
      })).filter(d => d.channel && d.date && !isNaN(d.total_views));

      // Get top 5 channels
      const channelTotals = d3.rollup(data, 
        v => d3.sum(v, d => d.total_views),
        d => d.channel
      );
      const top5Channels = Array.from(channelTotals.entries())
        .sort((a, b) => d3.descending(a[1], b[1]))
        .slice(0, 5)
        .map(d => d[0]);

      const filteredData = data.filter(d => top5Channels.includes(d.channel));
      const grouped = d3.group(filteredData, d => d.channel);
      allSeries = Array.from(grouped, ([key, values]) => ({
        key,
        values: values.slice().sort((a, b) => a.date - b.date)
      }));

      // Determine promo months
      allSeries.forEach(s => {
        s.values.forEach((d, i) => {
          const prev = i > 0 ? s.values[i - 1] : null;
          const longFormSpike = prev && d.longform_views > prev.longform_views * 1.3;
          const hasShorts = d.shorts_share > 0.3 && d.shorts_views > 0;
          const isShortFormDominant = d.shorts_share > 0.6 && d.views_shorts_pct > 0.6;
          d.isPromoMonth = hasShorts && longFormSpike && !isShortFormDominant;
        });
      });

      // Make avatars clickable
      setupAvatarClickHandlers();
      
      // Add narrative text container
      addNarrativeContainer();
      
      // Add navigation arrows
      addNavigationArrows();
      
      // Add click instruction
      addClickInstruction();
    });
  }

  function addClickInstruction() {
    // Instruction is already in HTML, no need to add dynamically
    // This function can be removed or used to update the instruction text
  }

  function setupAvatarClickHandlers() {
    // Only set up handlers for avatars in Slide 5.6's chart
    const container = d3.select("#youtubeLongShortCombined");
    if (container.empty()) return;

    // Find avatar markers in the long-short combined chart
    const avatarMarkers = container.selectAll(".avatar-marker");
    
    avatarMarkers.each(function() {
      const group = d3.select(this);
      group.style("cursor", "pointer");
      
      group.on("click", function(evt) {
        evt.stopPropagation();
        // Get channel from the avatar's data
        const channelKey = group.attr("data-channel");
        if (channelKey) {
          const index = allSeries.findIndex(s => s.key === channelKey);
          if (index >= 0) {
            selectChannel(index);
          }
        }
      });
    });
  }

  function selectChannel(index) {
    if (index < 0 || index >= allSeries.length) return;
    
    currentChannelIndex = index;
    const selectedSeries = allSeries[index];
    
    // Animate line
    animateChannelLine(selectedSeries);
    
    // Update narrative text
    updateNarrative(selectedSeries);
    
    // Show promo markers
    showPromoMarkers(selectedSeries);
    
    // Add spike effects
    addSpikeEffects(selectedSeries);
    
    // Update navigation
    updateNavigation();
  }

  function animateChannelLine(series) {
    const svg = d3.select("#youtubeLongShortCombined svg");
    if (svg.empty()) return;
    
    const g = svg.select("g");
    if (g.empty()) return;
    
    // Fade other lines
    g.selectAll(".longshort-line")
      .transition()
      .duration(500)
      .style("opacity", function(d) {
        return d && d.key === series.key ? 1 : 0.15;
      });
    
    // Highlight selected line
    const selectedLine = g.selectAll(".longshort-line")
      .filter(function(d) {
        return d && d.key === series.key;
      });
    
    if (!selectedLine.empty()) {
      selectedLine
        .raise()
        .transition()
        .duration(500)
        .attr("stroke-width", 5)
        .style("filter", "drop-shadow(0 0 8px rgba(124, 156, 255, 0.6))");
      
      // Animate line drawing
      const path = selectedLine.node();
      if (path) {
        const totalLength = path.getTotalLength();
        selectedLine
          .attr("stroke-dasharray", totalLength + " " + totalLength)
          .attr("stroke-dashoffset", totalLength)
          .transition()
          .duration(2000)
          .ease(d3.easeCubicInOut)
          .attr("stroke-dashoffset", 0);
      }
    }
  }

  function updateNarrative(series) {
    const narrativeContainer = d3.select("#narrative-text");
    if (narrativeContainer.empty()) return;

    // Find promo months and spikes
    const promoMonths = series.values.filter(d => d.isPromoMonth);
    const spikes = series.values.filter((d, i) => {
      if (i === 0) return false;
      const prev = series.values[i - 1];
      return d.total_views > prev.total_views * 1.2;
    });

    let narrative = "";
    if (promoMonths.length > 0 && spikes.length > 0) {
      const promoMonth = promoMonths[0];
      narrative = `${channelNames[series.key]}'s major spike in ${formatMonth(spikes[0].date)} followed a promo burst of Shorts in ${formatMonth(promoMonth.date)}.`;
    } else if (spikes.length > 0) {
      narrative = `${channelNames[series.key]} saw significant growth in ${formatMonth(spikes[0].date)}, reaching new viewership heights.`;
    } else {
      narrative = `${channelNames[series.key]} maintained steady performance throughout 2024.`;
    }

    narrativeContainer
      .text(narrative)
      .style("opacity", 0)
      .transition()
      .duration(500)
      .style("opacity", 1);
  }

  function showPromoMarkers(series) {
    const svg = d3.select("#youtubeLongShortCombined svg");
    if (svg.empty()) return;
    
    const g = svg.select("g");
    if (g.empty()) return;
    
    // Remove existing promo markers
    g.selectAll(".promo-marker-story").remove();
    
    // Get scales from the chart's actual dimensions
    const containerWidth = d3.select("#youtubeLongShortCombined").node()?.getBoundingClientRect().width || 1200;
    const margin = { top: 80, right: 120, bottom: 100, left: 100 };
    const width = containerWidth - margin.left - margin.right;
    const height = 700;
    
    // Get all data to set proper domain
    const allData = allSeries.flatMap(s => s.values);
    const x = d3.scaleUtc()
      .domain(d3.extent(allData, d => d.date))
      .range([0, width]);
    const y = d3.scaleLinear()
      .domain([0, d3.max(allData, d => d.total_views)])
      .nice()
      .range([height, 0]);

    // Add promo markers
    series.values.forEach(d => {
      if (d.isPromoMonth) {
        const marker = g.append("g")
          .attr("class", "promo-marker-story")
          .attr("transform", `translate(${x(d.date)},${y(d.total_views)})`);

        marker.append("image")
          .attr("href", "assets/icons/racket_promo.png")
          .attr("x", -12)
          .attr("y", -12)
          .attr("width", 24)
          .attr("height", 24)
          .style("opacity", 0.9)
          .style("filter", "drop-shadow(0 2px 8px rgba(124, 156, 255, 0.8))")
          .style("animation", "promoPulse 2s ease-in-out infinite");
      }
    });
  }

  function addSpikeEffects(series) {
    const svg = d3.select("#youtubeLongShortCombined svg");
    if (svg.empty()) return;
    
    const g = svg.select("g");
    if (g.empty()) return;
    
    // Remove existing spike effects
    g.selectAll(".spike-effect").remove();
    
    // Get scales from the chart's actual dimensions
    const containerWidth = d3.select("#youtubeLongShortCombined").node()?.getBoundingClientRect().width || 1200;
    const margin = { top: 80, right: 120, bottom: 100, left: 100 };
    const width = containerWidth - margin.left - margin.right;
    const height = 700;
    
    const allData = allSeries.flatMap(s => s.values);
    const x = d3.scaleUtc()
      .domain(d3.extent(allData, d => d.date))
      .range([0, width]);
    const y = d3.scaleLinear()
      .domain([0, d3.max(allData, d => d.total_views)])
      .nice()
      .range([height, 0]);

    // Add spike effects after promo months
    series.values.forEach((d, i) => {
      if (i > 0 && series.values[i - 1].isPromoMonth) {
        const prevPoint = series.values[i - 1];
        const currPoint = d;
        
        const spikeLine = g.append("line")
          .attr("class", "spike-effect")
          .attr("x1", x(prevPoint.date))
          .attr("y1", y(prevPoint.total_views))
          .attr("x2", x(currPoint.date))
          .attr("y2", y(currPoint.total_views))
          .attr("stroke", "#7C9CFF")
          .attr("stroke-width", 4)
          .attr("opacity", 0)
          .style("filter", "drop-shadow(0 0 8px rgba(124, 156, 255, 0.8))");

        spikeLine
          .transition()
          .duration(800)
          .attr("opacity", 0.6)
          .transition()
          .duration(1200)
          .attr("opacity", 0)
          .remove();
      }
    });
  }

  function addNarrativeContainer() {
    // Add narrative container to Slide 5.6's storytelling container
    const storytellingContainer = d3.select("#youtubeStoryCombined");
    if (storytellingContainer.empty()) return;

    const narrativeDiv = storytellingContainer
      .selectAll("#narrative-text")
      .data([1])
      .join("div")
      .attr("id", "narrative-text")
      .style("margin-top", "16px")
      .style("padding", "12px 24px")
      .style("background", "rgba(21, 23, 27, 0.95)")
      .style("color", "#EDEFF3")
      .style("border-radius", "8px")
      .style("font-family", "Inter, sans-serif")
      .style("font-size", "16px")
      .style("font-weight", "500")
      .style("text-align", "center")
      .style("opacity", 0)
      .style("pointer-events", "none")
      .style("box-shadow", "0 4px 12px rgba(0, 0, 0, 0.4)")
      .style("border", "1px solid rgba(124, 156, 255, 0.3)")
      .text("Click any creator to explore their story");
  }

  function addNavigationArrows() {
    const container = d3.select("#youtubeLongShortCombined");
    if (container.empty()) return;

    // Left arrow
    const leftArrow = container.append("button")
      .attr("class", "story-nav-arrow story-nav-left")
      .html("←")
      .style("position", "absolute")
      .style("left", "10px")
      .style("top", "50%")
      .style("transform", "translateY(-50%)")
      .style("background", "rgba(21, 23, 27, 0.9)")
      .style("color", "#EDEFF3")
      .style("border", "2px solid rgba(124, 156, 255, 0.5)")
      .style("border-radius", "50%")
      .style("width", "40px")
      .style("height", "40px")
      .style("font-size", "20px")
      .style("cursor", "pointer")
      .style("opacity", 0)
      .style("pointer-events", "none")
      .style("z-index", "1001")
      .on("click", function(evt) {
        evt.stopPropagation();
        if (currentChannelIndex > 0) {
          selectChannel(currentChannelIndex - 1);
        }
      });

    // Right arrow
    const rightArrow = container.append("button")
      .attr("class", "story-nav-arrow story-nav-right")
      .html("→")
      .style("position", "absolute")
      .style("right", "10px")
      .style("top", "50%")
      .style("transform", "translateY(-50%)")
      .style("background", "rgba(21, 23, 27, 0.9)")
      .style("color", "#EDEFF3")
      .style("border", "2px solid rgba(124, 156, 255, 0.5)")
      .style("border-radius", "50%")
      .style("width", "40px")
      .style("height", "40px")
      .style("font-size", "20px")
      .style("cursor", "pointer")
      .style("opacity", 0)
      .style("pointer-events", "none")
      .style("z-index", "1001")
      .on("click", function(evt) {
        evt.stopPropagation();
        if (currentChannelIndex >= 0 && currentChannelIndex < allSeries.length - 1) {
          selectChannel(currentChannelIndex + 1);
        }
      });
  }

  function updateNavigation() {
    const leftArrow = d3.select(".story-nav-left");
    const rightArrow = d3.select(".story-nav-right");

    if (currentChannelIndex < 0) {
      leftArrow.style("opacity", 0).style("pointer-events", "none");
      rightArrow.style("opacity", 0).style("pointer-events", "none");
      return;
    }

    leftArrow
      .style("opacity", currentChannelIndex > 0 ? 1 : 0.3)
      .style("pointer-events", currentChannelIndex > 0 ? "all" : "none");

    rightArrow
      .style("opacity", currentChannelIndex < allSeries.length - 1 ? 1 : 0.3)
      .style("pointer-events", currentChannelIndex < allSeries.length - 1 ? "all" : "none");
  }

  // Reset function
  function resetView() {
    currentChannelIndex = -1;
    const svg = d3.select("#youtubeLongShortCombined svg");
    if (svg.empty()) return;
    
    const g = svg.select("g");
    if (g.empty()) return;
    
    // Restore all lines
    g.selectAll(".longshort-line")
      .transition()
      .duration(500)
      .style("opacity", 0.8)
      .attr("stroke-width", 3)
      .style("filter", "none");
    
    // Remove promo markers and effects
    g.selectAll(".promo-marker-story").remove();
    g.selectAll(".spike-effect").remove();
    
    // Hide narrative
    d3.select("#narrative-text").style("opacity", 0);
    
    // Hide arrows
    updateNavigation();
  }

  // Expose globally
  window.initYouTubeStorytelling = initYouTubeStorytelling;
  window.resetStorytellingView = resetView;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initYouTubeStorytelling);
  } else {
    initYouTubeStorytelling();
  }
})();

