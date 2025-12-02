// =====================================================
// YouTube Avatar Slider with Fixed Chart - Slide 5.6
// =====================================================

(function() {
  if (window.youtubeSlidingPanelsLoaded) return;
  window.youtubeSlidingPanelsLoaded = true;

  const CSV_PATH = "top_channels_2024_monthly_summary.csv";
  const parseMonth = d3.utcParse("%Y-%m");

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

  let allCreatorsData = [];
  let currentCreatorIndex = 0;
  let avatarSlider = null;
  let chartContainer = null;
  let chartSVG = null;
  let chartG = null;
  let xScale = null;
  let yScale = null;
  let lineGenerator = null;
  let activeTooltip = null;
  let legendPromoVisible = true;
  let legendSlopeVisible = true;

  function initSlidingPanels() {
    console.log("📱 YouTube Avatar Slider initialized");

    const slide5_6 = document.querySelector(".slide5-6");
    if (!slide5_6) {
      console.warn("Slide 5.6 not found");
      return;
    }

    avatarSlider = d3.select("#avatarSlider");
    chartContainer = d3.select("#creatorChart");
    
    if (avatarSlider.empty()) {
      console.warn("Avatar slider not found");
      return;
    }
    
    if (chartContainer.empty()) {
      console.error("Chart container (#creatorChart) not found!");
      return;
    }

    // Setup legend toggles
    setupLegendToggles();

    // Load CSV data
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
      const uploadsCol = pick("uploadscount", "uploads_count");
      const shortsUploadsCol = pick("uploadsshortcount", "uploads_short_count");
      const viewsMomPctCol = pick("viewsmompct", "views_mom_pct");

      const data = raw.map(d => ({
        channel: d[channelCol],
        date: parseMonth((d[monthCol] || "").slice(0, 7)),
        total_views: +d[viewsCol] || 0,
        uploads_count: +d[uploadsCol] || 0,
        uploads_short_count: +d[shortsUploadsCol] || 0,
        views_mom_pct: +d[viewsMomPctCol] || 0
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

      // Process each channel's data
      allCreatorsData = Array.from(grouped, ([key, values]) => {
        const sortedValues = values.slice().sort((a, b) => a.date - b.date);
        
        // Determine promo months
        sortedValues.forEach((d, i) => {
          const nextMonth = i < sortedValues.length - 1 ? sortedValues[i + 1] : null;
          
          // Promo month definition:
          // 1) Has shorts uploads
          // 2) Has at least one long-form upload
          // 3) Next month shows positive view increase (> 0)
          const hasShorts = d.uploads_short_count > 0;
          const hasLongForm = (d.uploads_count - d.uploads_short_count) > 0;
          const nextMonthSpike = nextMonth && nextMonth.views_mom_pct > 0;
          
          d.isPromoMonth = hasShorts && hasLongForm && nextMonthSpike;
          d.nextMonthSpike = nextMonthSpike;
          d.nextMonthHigher = nextMonth && nextMonth.total_views > d.total_views;
        });

        return {
          key,
          values: sortedValues
        };
      });

      // Create avatar slider
      createAvatarSlider();
      
      // Initialize chart
      initializeChart();
      
      // Setup navigation arrows
      setupNavigationArrows();
      
      // Initialize with first creator
      setTimeout(() => {
        selectCreator(0);
        scrollAvatarToCenter(0);
      }, 100);
    });
  }

  function setupLegendToggles() {
    d3.selectAll(".legend-toggle").on("click", function(evt, d) {
      const legendType = d3.select(this).attr("data-legend");
      
      if (legendType === "promo") {
        legendPromoVisible = !legendPromoVisible;
        d3.select(this).classed("active", legendPromoVisible);
        updateChartVisibility();
      } else if (legendType === "slope") {
        legendSlopeVisible = !legendSlopeVisible;
        d3.select(this).classed("active", legendSlopeVisible);
        updateChartVisibility();
      }
    });
  }

  function updateChartVisibility() {
    if (chartG) {
      chartG.selectAll(".promo-marker-rocket")
        .style("display", legendPromoVisible ? "block" : "none");
      
      chartG.selectAll(".spike-segment")
        .style("display", legendSlopeVisible ? "block" : "none");
    }
  }

  function createAvatarSlider() {
    avatarSlider.selectAll("*").remove();

    const avatars = avatarSlider
      .selectAll(".avatar-item")
      .data(allCreatorsData)
      .join("div")
      .attr("class", "avatar-item")
      .attr("data-channel", d => d.key)
      .style("cursor", "pointer")
      .on("click", function(evt, d) {
        const index = allCreatorsData.findIndex(c => c.key === d.key);
        if (index >= 0) {
          selectCreator(index);
          scrollAvatarToCenter(index);
        }
      });

    avatars.each(function(creatorData) {
      const item = d3.select(this);
      
      const avatarImg = item.append("img")
        .attr("class", "avatar-slider-img")
        .attr("src", profilePics[creatorData.key])
        .attr("alt", channelNames[creatorData.key]);
    });
  }

  function initializeChart() {
    chartContainer.selectAll("*").remove();

    const width = 1000;
    const height = 450;
    const margin = { top: 40, right: 40, bottom: 70, left: 80 };

    chartSVG = chartContainer.append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("display", "block")
      .style("overflow", "visible");

    chartG = chartSVG.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .style("overflow", "visible");

    // Create scales (will be updated when data is set)
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Create axes groups
    chartG.append("g")
      .attr("class", "axis x-axis");

    chartG.append("g")
      .attr("class", "axis y-axis");

    // Create line path (will be updated)
    chartG.append("path")
      .attr("class", "main-line")
      .attr("fill", "none")
      .attr("stroke-width", 3)
      .attr("opacity", 0.8);

    // Create spike segments group
    chartG.append("g")
      .attr("class", "spike-segments");

    // Create promo markers group
    chartG.append("g")
      .attr("class", "promo-markers");

    // Create line generator
    lineGenerator = d3.line()
      .x(d => xScale ? xScale(d.date) : 0)
      .y(d => yScale ? yScale(d.total_views) : 0)
      .curve(d3.curveMonotoneX);
  }

  function updateChart(creatorData) {
    if (!chartG || !creatorData || !creatorData.values || creatorData.values.length === 0) {
      console.error("Cannot update chart - missing data or chart elements");
      return;
    }

    const width = 1000;
    const height = 450;
    const margin = { top: 40, right: 40, bottom: 70, left: 80 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Update scales
    const dateExtent = d3.extent(creatorData.values, d => d.date);
    const maxViews = d3.max(creatorData.values, d => d.total_views);

    xScale = d3.scaleUtc()
      .domain(dateExtent)
      .range([0, chartWidth]);

    yScale = d3.scaleLinear()
      .domain([0, maxViews])
      .nice()
      .range([chartHeight, 0]);

    // Update line generator
    lineGenerator.x(d => xScale(d.date)).y(d => yScale(d.total_views));

    // Color for this channel
    const color = d3.scaleOrdinal()
      .domain(allCreatorsData.map(d => d.key))
      .range(["#7C9CFF", "#FF6B9D", "#34D399", "#FFD93D", "#9B59B6"]);

    const channelColor = color(creatorData.key);

    // Update axes
    const xAxis = d3.axisBottom(xScale)
      .ticks(d3.timeMonth.every(2))
      .tickFormat(d3.utcFormat("%b"));

    const yAxis = d3.axisLeft(yScale)
      .ticks(5)
      .tickFormat(d3.format(".2s"));

    chartG.select(".x-axis")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(xAxis)
      .selectAll("text")
      .style("fill", "#A4ADBD")
      .style("font-size", "12px");

    chartG.select(".y-axis")
      .call(yAxis)
      .selectAll("text")
      .style("fill", "#A4ADBD")
      .style("font-size", "12px");

    // Update axis labels
    chartG.selectAll(".axis-label").remove();
    
    chartG.append("text")
      .attr("class", "axis-label")
      .attr("x", chartWidth / 2)
      .attr("y", chartHeight + 55)
      .attr("text-anchor", "middle")
      .style("fill", "#EDEFF3")
      .style("font-size", "14px")
      .style("font-weight", "500")
      .text("Month (2024)");

    chartG.append("text")
      .attr("class", "axis-label")
      .attr("transform", "rotate(-90)")
      .attr("x", -chartHeight / 2)
      .attr("y", -65)
      .attr("text-anchor", "middle")
      .style("fill", "#EDEFF3")
      .style("font-size", "14px")
      .style("font-weight", "500")
      .text("Monthly Views");

    // Update main line
    const lineData = lineGenerator(creatorData.values);
    chartG.select(".main-line")
      .attr("d", lineData)
      .attr("stroke", channelColor)
      .transition()
      .duration(500)
      .attr("opacity", 0.8);

    // Update spike segments (glowing segments after promo months)
    chartG.select(".spike-segments").selectAll("*").remove();
    creatorData.values.forEach((d, i) => {
      if (i === 0) return;
      
      const prev = creatorData.values[i - 1];
      const isSpikeSegment = prev.isPromoMonth && d.nextMonthHigher;
      
      if (isSpikeSegment) {
        const segment = chartG.select(".spike-segments").append("path")
          .attr("class", "spike-segment")
          .attr("d", lineGenerator([prev, d]))
          .attr("fill", "none")
          .attr("stroke", channelColor)
          .attr("stroke-width", 5)
          .attr("opacity", 1)
          .style("filter", "drop-shadow(0 0 8px rgba(124, 156, 255, 0.7))")
          .style("cursor", "pointer")
          .style("display", legendSlopeVisible ? "block" : "none")
          .on("click", function(evt) {
            evt.stopPropagation();
            const midX = (xScale(prev.date) + xScale(d.date)) / 2;
            const midY = (yScale(prev.total_views) + yScale(d.total_views)) / 2;
            showSlopeTooltip(midX, midY);
          });
      }
    });

    // Update promo markers (rocket emojis)
    chartG.select(".promo-markers").selectAll("*").remove();
    creatorData.values.forEach(d => {
      if (d.isPromoMonth) {
        const marker = chartG.select(".promo-markers").append("g")
          .attr("class", "promo-marker-rocket")
          .attr("transform", `translate(${xScale(d.date)},${yScale(d.total_views)})`)
          .style("cursor", "pointer")
          .style("display", legendPromoVisible ? "block" : "none")
          .on("click", function(evt) {
            evt.stopPropagation();
            showPromoTooltip(xScale(d.date), yScale(d.total_views));
          });

        // Rocket emoji as text
        marker.append("text")
          .attr("x", 0)
          .attr("y", -20)
          .attr("text-anchor", "middle")
          .attr("font-size", "24px")
          .text("🚀")
          .style("filter", "drop-shadow(0 2px 8px rgba(124, 156, 255, 0.8))");
      }
    });
  }

  function showPromoTooltip(x, y) {
    hideTooltip();
    
    const tooltipText = "Promo Month: Shorts and a long video appeared together, and the next month's views rose — a sign that short-form helped push the longer story to more people.";
    const maxWidth = 280;
    
    const tooltip = chartG.append("g")
      .attr("class", "floating-tooltip")
      .attr("transform", `translate(${Math.min(x + 10, 1000 - 300)},${Math.max(y - 80, 20)})`);

    const rect = tooltip.append("rect")
      .attr("rx", 8)
      .attr("ry", 8)
      .attr("fill", "rgba(0, 0, 0, 0.85)")
      .attr("stroke", "rgba(124, 156, 255, 0.3)")
      .attr("stroke-width", 1);

    const foreignObject = tooltip.append("foreignObject")
      .attr("width", maxWidth)
      .attr("height", 200);

    const textDiv = foreignObject.append("xhtml:div")
      .style("color", "#EDEFF3")
      .style("font-family", "Inter, sans-serif")
      .style("font-size", "13px")
      .style("line-height", "1.5")
      .style("padding", "12px")
      .text(tooltipText);

    const textHeight = textDiv.node().scrollHeight;
    foreignObject.attr("height", textHeight + 24);
    rect.attr("width", maxWidth)
        .attr("height", textHeight + 24)
        .attr("x", 0)
        .attr("y", 0);

    activeTooltip = tooltip;

    // Close on outside click
    setTimeout(() => {
      d3.select("body").on("click.tooltip", function(evt) {
        if (!evt.target.closest(".floating-tooltip") && !evt.target.closest(".promo-marker-rocket")) {
          hideTooltip();
        }
      });
    }, 10);
  }

  function showSlopeTooltip(x, y) {
    hideTooltip();
    
    const tooltipText = "This spike happens because Shorts act like trailers — warming up the audience and driving attention to the next long upload. Long-form views often rise immediately after a promo month.";
    const maxWidth = 280;
    
    const tooltip = chartG.append("g")
      .attr("class", "floating-tooltip")
      .attr("transform", `translate(${Math.min(x + 10, 1000 - 300)},${Math.max(y - 80, 20)})`);

    const rect = tooltip.append("rect")
      .attr("rx", 8)
      .attr("ry", 8)
      .attr("fill", "rgba(0, 0, 0, 0.85)")
      .attr("stroke", "rgba(124, 156, 255, 0.3)")
      .attr("stroke-width", 1);

    const foreignObject = tooltip.append("foreignObject")
      .attr("width", maxWidth)
      .attr("height", 200);

    const textDiv = foreignObject.append("xhtml:div")
      .style("color", "#EDEFF3")
      .style("font-family", "Inter, sans-serif")
      .style("font-size", "13px")
      .style("line-height", "1.5")
      .style("padding", "12px")
      .text(tooltipText);

    const textHeight = textDiv.node().scrollHeight;
    foreignObject.attr("height", textHeight + 24);
    rect.attr("width", maxWidth)
        .attr("height", textHeight + 24)
        .attr("x", 0)
        .attr("y", 0);

    activeTooltip = tooltip;

    // Close on outside click
    setTimeout(() => {
      d3.select("body").on("click.tooltip", function(evt) {
        if (!evt.target.closest(".floating-tooltip") && !evt.target.closest(".spike-segment")) {
          hideTooltip();
        }
      });
    }, 10);
  }

  function hideTooltip() {
    if (activeTooltip) {
      activeTooltip.remove();
      activeTooltip = null;
    }
    d3.select("body").on("click.tooltip", null);
  }

  function selectCreator(index) {
    if (index < 0 || index >= allCreatorsData.length) return;
    
    currentCreatorIndex = index;
    const creatorData = allCreatorsData[index];

    // Hide any active tooltip
    hideTooltip();

    // Update avatar slider active state
    avatarSlider.selectAll(".avatar-item")
      .each(function(d, i) {
        const item = d3.select(this);
        const isActive = i === index;
        
        item.classed("active", isActive);
        item.select(".avatar-slider-img")
          .transition()
          .duration(300)
          .style("transform", isActive ? "scale(1.3)" : "scale(1.0)")
          .style("opacity", isActive ? 1 : 0.6)
          .style("filter", isActive ? "drop-shadow(0 0 20px rgba(124, 156, 255, 0.8))" : "none");
      });

    // Update chart
    updateChart(creatorData);

    // Update navigation arrows
    updateNavigationArrows();
  }

  function scrollAvatarToCenter(index) {
    const avatarItems = avatarSlider.selectAll(".avatar-item").nodes();
    if (avatarItems[index]) {
      const sliderNode = avatarSlider.node();
      const itemNode = avatarItems[index];
      
      // Calculate center position
      const sliderWidth = sliderNode.offsetWidth;
      const itemWidth = itemNode.offsetWidth;
      const itemLeft = itemNode.offsetLeft;
      const itemCenter = itemLeft + itemWidth / 2;
      const sliderCenter = sliderWidth / 2;
      const scrollPosition = sliderNode.scrollLeft + itemCenter - sliderCenter;
      
      sliderNode.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: "smooth"
      });
    }
  }

  function setupNavigationArrows() {
    const leftArrow = d3.select(".avatar-nav-left");
    const rightArrow = d3.select(".avatar-nav-right");

    leftArrow.on("click", function(evt) {
      evt.stopPropagation();
      if (currentCreatorIndex > 0) {
        currentCreatorIndex--;
        selectCreator(currentCreatorIndex);
        scrollAvatarToCenter(currentCreatorIndex);
      }
    });

    rightArrow.on("click", function(evt) {
      evt.stopPropagation();
      if (currentCreatorIndex < allCreatorsData.length - 1) {
        currentCreatorIndex++;
        selectCreator(currentCreatorIndex);
        scrollAvatarToCenter(currentCreatorIndex);
      }
    });

    updateNavigationArrows();
  }

  function updateNavigationArrows() {
    const leftArrow = d3.select(".avatar-nav-left");
    const rightArrow = d3.select(".avatar-nav-right");

    leftArrow
      .style("opacity", currentCreatorIndex > 0 ? 1 : 0.3)
      .style("pointer-events", currentCreatorIndex > 0 ? "all" : "none");

    rightArrow
      .style("opacity", currentCreatorIndex < allCreatorsData.length - 1 ? 1 : 0.3)
      .style("pointer-events", currentCreatorIndex < allCreatorsData.length - 1 ? "all" : "none");
  }

  // Expose globally
  window.initSlidingPanels = initSlidingPanels;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlidingPanels);
  } else {
    initSlidingPanels();
  }
})();
