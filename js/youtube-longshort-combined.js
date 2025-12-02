// =====================================================
// YouTube Long-Form & Short-Form Combined Visualization
// =====================================================

(function() {
  if (window.youtubeLongShortCombinedLoaded) return;
  window.youtubeLongShortCombinedLoaded = true;

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

  function initYouTubeLongShortCombined() {
    console.log("🎾 YouTube Long-Short Combined Visualization initialized");

    const container = d3.select("#youtubeLongShortCombined");
    if (container.empty()) {
      console.warn("Container #youtubeLongShortCombined not found");
      return;
    }

    // Clear container
    container.selectAll("*").remove();

    // Tooltip setup
    const tip = d3.select("body")
      .append("div")
      .attr("class", "longshort-tooltip")
      .style("position", "fixed")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("background", "rgba(21, 23, 27, 0.95)")
      .style("border", "1px solid rgba(124, 156, 255, 0.3)")
      .style("border-radius", "12px")
      .style("padding", "12px 16px")
      .style("color", "#EDEFF3")
      .style("font-family", "Inter, sans-serif")
      .style("font-size", "14px")
      .style("line-height", "1.6")
      .style("box-shadow", "0 8px 24px rgba(0, 0, 0, 0.4)")
      .style("z-index", "10000")
      .style("max-width", "280px");

    function showTip(html, evt) {
      tip.html(html)
        .style("opacity", 1)
        .style("left", (evt.clientX + 16) + "px")
        .style("top", (evt.clientY - 16) + "px");
    }

    function hideTip() {
      tip.style("opacity", 0);
    }

    // Load CSV
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

      // Get top 5 channels by total views
      const channelTotals = d3.rollup(data, 
        v => d3.sum(v, d => d.total_views),
        d => d.channel
      );
      const top5Channels = Array.from(channelTotals.entries())
        .sort((a, b) => d3.descending(a[1], b[1]))
        .slice(0, 5)
        .map(d => d[0]);

      const filteredData = data.filter(d => top5Channels.includes(d.channel));

      // Group by channel
      const grouped = d3.group(filteredData, d => d.channel);
      const series = Array.from(grouped, ([key, values]) => ({
        key,
        values: values.slice().sort((a, b) => a.date - b.date)
      }));

      // Determine month types for each channel
      series.forEach(s => {
        s.values.forEach((d, i) => {
          const prev = i > 0 ? s.values[i - 1] : null;
          const next = i < s.values.length - 1 ? s.values[i + 1] : null;
          
          // Long-form dominant: low shorts share (< 0.3) or low shorts views percentage (< 0.3)
          const isLongFormDominant = d.shorts_share < 0.3 || d.views_shorts_pct < 0.3;
          
          // Short-form dominant: high shorts share (> 0.6) and high shorts views percentage (> 0.6)
          const isShortFormDominant = d.shorts_share > 0.6 && d.views_shorts_pct > 0.6;
          
          // Promo-short: shorts exist but long-form views spike (shorts share > 0.3 but long-form views increased significantly)
          const longFormSpike = prev && d.longform_views > prev.longform_views * 1.3;
          const hasShorts = d.shorts_share > 0.3 && d.shorts_views > 0;
          const isPromoShort = hasShorts && longFormSpike && !isShortFormDominant;
          
          d.monthType = isPromoShort ? 'promo' : 
                       isShortFormDominant ? 'shorts' : 
                       isLongFormDominant ? 'longform' : 'mixed';
          
          // Mark significant spikes for avatar placement
          const viewSpike = prev && d.total_views > prev.total_views * 1.2;
          const isSignificant = viewSpike || d.total_views > d3.quantile(s.values.map(v => v.total_views), 0.75);
          d.showAvatar = isSignificant;
        });
      });

      // Create SVG
      const containerWidth = container.node().getBoundingClientRect().width || 1200;
      const margin = { top: 80, right: 120, bottom: 100, left: 100 };
      const width = containerWidth - margin.left - margin.right;
      const height = 700;

      const svg = container.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("opacity", 0);

      // Add defs for clip paths
      const defs = svg.append("defs");
      defs.append("clipPath")
        .attr("id", "avatarClip")
        .append("circle")
        .attr("r", 20);

      const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Scales
      const x = d3.scaleUtc()
        .domain(d3.extent(filteredData, d => d.date))
        .range([0, width]);

      const y = d3.scaleLinear()
        .domain([0, d3.max(filteredData, d => d.total_views)])
        .nice()
        .range([height, 0]);

      // Color scale
      const color = d3.scaleOrdinal()
        .domain(series.map(d => d.key))
        .range(["#7C9CFF", "#FF6B9D", "#34D399", "#FFD93D", "#9B59B6"]);

      // Axes
      const xAxis = d3.axisBottom(x)
        .ticks(d3.timeMonth.every(2))
        .tickFormat(d3.utcFormat("%b"));

      const yAxis = d3.axisLeft(y)
        .ticks(6)
        .tickFormat(d3.format(".2s"));

      g.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis)
        .selectAll("text")
        .attr("transform", "rotate(-35)")
        .attr("text-anchor", "end")
        .style("fill", "#A4ADBD")
        .style("font-size", "12px");

      g.append("g")
        .attr("class", "axis y-axis")
        .call(yAxis)
        .selectAll("text")
        .style("fill", "#A4ADBD")
        .style("font-size", "12px");

      // Axis labels
      g.append("text")
        .attr("x", width / 2)
        .attr("y", height + 80)
        .attr("text-anchor", "middle")
        .style("fill", "#EDEFF3")
        .style("font-size", "14px")
        .style("font-weight", "500")
        .text("Month (2024)");

      g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -70)
        .attr("text-anchor", "middle")
        .style("fill", "#EDEFF3")
        .style("font-size", "14px")
        .style("font-weight", "500")
        .text("Monthly Views");

      // Line generator
      const line = d3.line()
        .x(d => x(d.date))
        .y(d => y(d.total_views))
        .curve(d3.curveMonotoneX);

      // Draw lines with animation
      const lines = g.selectAll(".line")
        .data(series)
        .join("path")
        .attr("class", "longshort-line")
        .attr("fill", "none")
        .attr("stroke", d => color(d.key))
        .attr("stroke-width", 3)
        .attr("d", d => line(d.values))
        .attr("stroke-dasharray", function() {
          const L = this.getTotalLength();
          return `${L} ${L}`;
        })
        .attr("stroke-dashoffset", function() {
          return this.getTotalLength();
        })
        .style("opacity", 0.8);

      // Animate lines
      lines.transition()
        .duration(2000)
        .ease(d3.easeCubicInOut)
        .attr("stroke-dashoffset", 0);

      // Add markers for month types
      series.forEach(s => {
        s.values.forEach(d => {
          if (d.monthType === 'promo') {
            // Promo-short marker (racket icon)
            const marker = g.append("g")
              .attr("class", "promo-marker")
              .attr("transform", `translate(${x(d.date)},${y(d.total_views)})`);

            marker.append("image")
              .attr("href", "assets/icons/racket_promo.png")
              .attr("x", -12)
              .attr("y", -12)
              .attr("width", 24)
              .attr("height", 24)
              .style("opacity", 0.9)
              .style("filter", "drop-shadow(0 2px 8px rgba(124, 156, 255, 0.6))")
              .on("mouseover", function(evt) {
                d3.select(this).transition().duration(200)
                  .attr("width", 28).attr("height", 28)
                  .attr("x", -14).attr("y", -14);
                showTip(
                  `🎾 <strong>Promo Short</strong><br/>` +
                  `${formatMonth(d.date)} — ${channelNames[d.channel] || d.channel}<br/>` +
                  `A short-form clip designed to drive traffic to a long-form video.`,
                  evt
                );
              })
              .on("mouseout", function() {
                d3.select(this).transition().duration(200)
                  .attr("width", 24).attr("height", 24)
                  .attr("x", -12).attr("y", -12);
                hideTip();
              });

            // Add pulsing animation
            marker.append("circle")
              .attr("r", 16)
              .attr("fill", "none")
              .attr("stroke", "#7C9CFF")
              .attr("stroke-width", 2)
              .style("opacity", 0.3)
              .style("animation", "promoPulse 2s ease-in-out infinite");
          } else if (d.monthType === 'shorts') {
            // Short-form dominant marker
            g.append("circle")
              .attr("cx", x(d.date))
              .attr("cy", y(d.total_views))
              .attr("r", 5)
              .attr("fill", "#FF6B9D")
              .attr("stroke", "#FF6B9D")
              .attr("stroke-width", 2)
              .style("opacity", 0.8)
              .on("mouseover", function(evt) {
                d3.select(this).transition().duration(200).attr("r", 7);
                showTip(
                  `📱 <strong>Short-Form Dominant</strong><br/>` +
                  `${formatMonth(d.date)} — ${channelNames[d.channel] || d.channel}<br/>` +
                  `Shorts-heavy month with high short-form engagement.`,
                  evt
                );
              })
              .on("mouseout", function() {
                d3.select(this).transition().duration(200).attr("r", 5);
                hideTip();
              });
          } else if (d.monthType === 'longform') {
            // Long-form dominant marker
            g.append("circle")
              .attr("cx", x(d.date))
              .attr("cy", y(d.total_views))
              .attr("r", 5)
              .attr("fill", "#34D399")
              .attr("stroke", "#34D399")
              .attr("stroke-width", 2)
              .style("opacity", 0.8)
              .on("mouseover", function(evt) {
                d3.select(this).transition().duration(200).attr("r", 7);
                showTip(
                  `🎬 <strong>Long-Form Dominant</strong><br/>` +
                  `${formatMonth(d.date)} — ${channelNames[d.channel] || d.channel}<br/>` +
                  `Regular uploads dominated this month.`,
                  evt
                );
              })
              .on("mouseout", function() {
                d3.select(this).transition().duration(200).attr("r", 5);
                hideTip();
              });
          }

          // Add avatars at significant points
          if (d.showAvatar && profilePics[d.channel]) {
            const avatarGroup = g.append("g")
              .attr("class", "avatar-marker")
              .attr("data-channel", d.channel)
              .attr("transform", `translate(${x(d.date)},${y(d.total_views)})`)
              .style("opacity", 0)
              .style("cursor", "pointer");

            // Avatar image
            avatarGroup.append("image")
              .attr("href", profilePics[d.channel])
              .attr("x", -20)
              .attr("y", -20)
              .attr("width", 40)
              .attr("height", 40)
              .attr("clip-path", "url(#avatarClip)")
              .style("opacity", 0.95);

            // Border circle
            avatarGroup.append("circle")
              .attr("r", 20)
              .attr("fill", "none")
              .attr("stroke", color(d.channel))
              .attr("stroke-width", 2.5)
              .style("filter", "drop-shadow(0 2px 8px rgba(124, 156, 255, 0.4))");

            // Determine tooltip content based on month type
            let tooltipContent = "";
            if (d.monthType === 'promo') {
              tooltipContent = `📅 ${formatMonth(d.date)} — ${channelNames[d.channel] || d.channel}<br/>` +
                `<strong>Big spike in long-form views.</strong><br/>` +
                `Shorts posted this month acted like promos, pushing traffic toward the long video.`;
            } else if (d.monthType === 'shorts') {
              tooltipContent = `📅 ${formatMonth(d.date)} — ${channelNames[d.channel] || d.channel}<br/>` +
                `<strong>Shorts-driven momentum.</strong><br/>` +
                `Short-form content drove the spike in views this month.`;
            } else {
              tooltipContent = `📅 ${formatMonth(d.date)} — ${channelNames[d.channel] || d.channel}<br/>` +
                `<strong>Long-form driven growth.</strong><br/>` +
                `Regular uploads contributed to the view increase.`;
            }

            avatarGroup.on("mouseover", function(evt) {
              d3.select(this).raise()
                .transition().duration(200)
                .attr("transform", `translate(${x(d.date)},${y(d.total_views)}) scale(1.2)`);
              showTip(tooltipContent, evt);
            })
            .on("mouseout", function() {
              d3.select(this)
                .transition().duration(200)
                .attr("transform", `translate(${x(d.date)},${y(d.total_views)}) scale(1)`);
              hideTip();
            });

            // Animate avatar appearance
            avatarGroup.transition()
              .delay(2000 + (series.indexOf(s) * 300) + (s.values.indexOf(d) * 100))
              .duration(500)
              .style("opacity", 1);
          }
        });
      });

      // Legend
      const legend = g.append("g")
        .attr("class", "legend")
        .attr("transform", `translate(${width - 100}, 20)`);

      const legendItems = [
        { label: "Long-Form", color: "#34D399", marker: "circle" },
        { label: "Short-Form", color: "#FF6B9D", marker: "circle" },
        { label: "Promo Short", color: "#7C9CFF", marker: "racket" }
      ];

      legendItems.forEach((item, i) => {
        const itemGroup = legend.append("g")
          .attr("transform", `translate(0, ${i * 25})`);

        if (item.marker === "racket") {
          itemGroup.append("image")
            .attr("href", "assets/icons/racket_promo.png")
            .attr("x", -10)
            .attr("y", -10)
            .attr("width", 20)
            .attr("height", 20);
        } else {
          itemGroup.append("circle")
            .attr("r", 5)
            .attr("fill", item.color)
            .attr("stroke", item.color)
            .attr("stroke-width", 2);
        }

        itemGroup.append("text")
          .attr("x", 15)
          .attr("y", 5)
          .style("fill", "#EDEFF3")
          .style("font-size", "12px")
          .text(item.label);
      });

      // Channel labels on right
      g.selectAll(".channel-label")
        .data(series)
        .join("text")
        .attr("class", "channel-label")
        .attr("x", width + 10)
        .attr("y", d => y(d.values[d.values.length - 1].total_views))
        .attr("dy", "0.32em")
        .style("fill", d => color(d.key))
        .style("font-size", "13px")
        .style("font-weight", "600")
        .text(d => channelNames[d.key] || d.key);

      // Fade in SVG
      svg.transition()
        .duration(800)
        .style("opacity", 1);

      // Trigger scroll-in animation class
      container.classed("is-visible", true);
    });
  }

  // Expose function globally
  window.initYouTubeLongShortCombined = initYouTubeLongShortCombined;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initYouTubeLongShortCombined);
  } else {
    initYouTubeLongShortCombined();
  }

  // Re-initialize on scroll (for intersection observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
        const container = d3.select("#youtubeLongShortCombined");
        if (container && !container.classed("is-visible")) {
          setTimeout(() => {
            initYouTubeLongShortCombined();
            container.classed("is-visible", true);
          }, 300);
        }
      }
    });
  }, { threshold: 0.3 });

  // Observe the container when it exists
  setTimeout(() => {
    const container = document.querySelector("#youtubeLongShortCombined");
    if (container) {
      observer.observe(container);
      // Also observe the parent section for scroll-in
      const section = container.closest(".slide-section");
      if (section) {
        const sectionObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const vizContainer = d3.select("#youtubeLongShortCombined");
              if (vizContainer && !vizContainer.classed("is-visible")) {
                vizContainer.classed("is-visible", true);
              }
            }
          });
        }, { threshold: 0.2 });
        sectionObserver.observe(section);
      }
    }
  }, 1000);
})();

