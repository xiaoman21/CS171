// ===========================
// YouTube Top 5 Visualization
// ===========================

// ✅ Prevent double initialization
if (!window.youtubeTop5Loaded) {
  window.youtubeTop5Loaded = true;

  const CSV_PATH = "top_channels_2024_monthly_summary.csv";
  const parseMonth = d3.utcParse("%Y-%m");

  function initYouTubeTop5() {
    console.log("🎬 YouTube Top 5 Visualization initialized");

    const container = d3.select("#youtubeTop5");

    // --- Tooltip setup ---
    const tip = d3.select("body")
      .append("div")
      .attr("class", "tip")
      .style("position", "fixed")
      .style("pointer-events", "none")
      .style("opacity", 0);

    function showTip(html, evt) {
      tip.html(html)
        .style("opacity", 1)
        .style("left", (evt.clientX + 12) + "px")
        .style("top", (evt.clientY + 12) + "px");
    }

    function hideTip() {
      tip.style("opacity", 0);
    }

    // --- Profile pictures ---
    const profilePics = {
      "@MrBeast": "assets/profile_pics/MrBeast.png",
      "@TSeries": "assets/profile_pics/TSeries.png",
      "@SETIndia": "assets/profile_pics/SETIndia.png",
      "@VladandNiki": "assets/profile_pics/VladandNiki.png",
      "@CoComelon": "assets/profile_pics/CoComelon.png"
    };

    // --- Load CSV ---
    d3.csv(CSV_PATH).then(raw => {
      const cols = new Map();
      raw.columns.forEach(c => cols.set(c.toLowerCase(), c));

      const pick = (...names) => {
        for (const n of names) if (cols.has(n)) return cols.get(n);
        return null;
      };

      const channelCol = pick("channelkey", "channel", "channel_key", "name");
      const monthCol = pick("month", "date", "year_month");
      const viewsCol = pick("total_views", "views", "views_total");

      const data = raw.map(d => ({
        channel: d[channelCol],
        date: parseMonth((d[monthCol] || "").slice(0, 7)),
        total_views: +d[viewsCol] || 0
      })).filter(d => d.channel && d.date);

      const clean = data.filter(d => !isNaN(d.total_views));
      const grouped = d3.group(clean, d => d.channel);
      const series = Array.from(grouped, ([key, values]) => ({
        key,
        values: values.slice().sort((a, b) => a.date - b.date)
      }));

      // --- Bubble list totals ---
      const totals = Array.from(grouped, ([key, vals]) => ({
        key,
        total: d3.sum(vals, v => v.total_views)
      })).sort((a, b) => d3.descending(a.total, b.total));

      // --- Clear old bubble list ---
      d3.select("#youtubeBubbles").selectAll("*").remove();

      // --- Create one clean bubble list (HTML, not SVG) ---
      const bubbles = d3.select("#youtubeBubbles")
        .selectAll(".bubble-item")
        .data(totals)
        .join("div")
        .attr("class", "bubble-item");

      bubbles.append("img")
        .attr("src", d => profilePics[d.key])
        .attr("alt", d => d.key);

      bubbles.append("span")
        .text(d => d.key.replace("@", ""));

      // --- Draw main D3 chart ---
      const svg = container.append("svg")
        .attr("width", 1100)
        .attr("height", 600);

      const width = +svg.attr("width");
      const height = +svg.attr("height");
      const m = { top: 60, right: 140, bottom: 70, left: 90 };
      const w = width - m.left - m.right;
      const h = height - m.top - m.bottom;

      const g = svg.append("g")
        .attr("transform", `translate(${m.left},${m.top})`);

      // --- Scales ---
      const x = d3.scaleUtc()
        .domain(d3.extent(clean, d => d.date))
        .range([0, w]);

      const y = d3.scaleLinear()
        .domain([0, d3.max(clean, d => d.total_views)])
        .nice()
        .range([h, 0]);

      const color = d3.scaleOrdinal(d3.schemeTableau10)
        .domain(series.map(d => d.key));

      // --- Axes ---
      g.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(0,${h})`)
        .call(
          d3.axisBottom(x)
            .ticks(d3.timeMonth.every(3))
            .tickFormat(d3.utcFormat("%b %Y"))
        )
        .selectAll("text")
        .attr("transform", "rotate(-35)")
        .attr("text-anchor", "end");

      g.append("g")
        .attr("class", "axis y-axis")
        .call(d3.axisLeft(y).ticks(6).tickFormat(d3.format(".2s")));

      // --- Axis Labels ---
      g.append("text")
        .attr("x", w / 2)
        .attr("y", h + 55)
        .attr("text-anchor", "middle")
        .attr("fill", "#fff4d6")
        .attr("font-size", "14px")
        .text("Month (2024)");

      g.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -h / 2)
        .attr("y", -65)
        .attr("text-anchor", "middle")
        .attr("fill", "#fff4d6")
        .attr("font-size", "14px")
        .text("Total Views (in billions)");

      // --- Line Generator ---
      const line = d3.line()
        .x(d => x(d.date))
        .y(d => y(d.total_views))
        .curve(d3.curveMonotoneX);

      // --- Lines ---
      g.selectAll(".line")
        .data(series)
        .join("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d => color(d.key))
        .attr("stroke-width", 3)
        .attr("d", d => line(d.values))
        .attr("stroke-dasharray", function () {
          const L = this.getTotalLength();
          return `${L} ${L}`;
        })
        .attr("stroke-dashoffset", function () {
          return this.getTotalLength();
        })
        .transition()
        .duration(3500)
        .ease(d3.easeCubicInOut)
        .attr("stroke-dashoffset", 0);

      // --- Moving Avatars ---
      const avatarGroups = g.selectAll(".avatar-group")
        .data(series)
        .join("g")
        .attr("class", "avatar-group");

      const avatars = avatarGroups.append("image")
        .attr("class", "avatar")
        .attr("href", d => profilePics[d.key] || null)
        .attr("width", 36)
        .attr("height", 36)
        .attr("x", -18)
        .attr("y", -18)
        .style("opacity", d => profilePics[d.key] ? 1 : 0);

      avatarGroups.each(function (d) {
        const path = g.selectAll(".line").filter(dd => dd.key === d.key).node();
        if (!path) return;
        const totalLength = path.getTotalLength();
        const group = d3.select(this);

        group.transition()
          .duration(4000)
          .ease(d3.easeCubicInOut)
          .attrTween("transform", function () {
            return function (t) {
              const p = path.getPointAtLength(t * totalLength);
              return `translate(${p.x},${p.y})`;
            };
          })
          .on("end", function repeat() {
            d3.active(this)
              .transition()
              .duration(6000)
              .ease(d3.easeLinear)
              .attrTween("transform", function () {
                return function (t) {
                  const p = path.getPointAtLength(t * totalLength);
                  return `translate(${p.x},${p.y})`;
                };
              })
              .on("end", repeat);
          });
      });

      // --- Tooltip Interactivity ---
      avatars
        .on("mouseover", function (evt, d) {
          d3.select(this).raise()
            .transition().duration(200)
            .attr("width", 50).attr("height", 50)
            .attr("x", -25).attr("y", -25);
          showTip(`<b>${d.key}</b>`, evt);
        })
        .on("mouseout", function () {
          d3.select(this)
            .transition().duration(200)
            .attr("width", 36).attr("height", 36)
            .attr("x", -18).attr("y", -18);
          hideTip();
        });

      // --- Right-side Labels ---
      g.selectAll(".lbl")
        .data(series)
        .join("text")
        .attr("class", "lbl")
        .attr("x", w + 6)
        .attr("y", d => y(d.values.at(-1).total_views))
        .attr("dy", "0.32em")
        .attr("fill", d => color(d.key))
        .attr("font-size", 12)
        .text(d => d.key);
    });
  }

  // --- Expose function globally and run once ---
  window.initYouTubeTop5 = initYouTubeTop5;
  
  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initYouTubeTop5);
  } else {
    // DOM already loaded
    initYouTubeTop5();
  }
}
