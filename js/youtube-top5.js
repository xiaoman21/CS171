function initYouTubeTop5() {
  const CSV_PATH = "top_channels_2024_monthly_summary.csv";
  const parseMonth = d3.utcParse("%Y-%m");

  // === Tooltip setup (local) ===
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
  function hideTip() { tip.style("opacity", 0); }

  // === Profile pictures ===
  const profilePics = {
    "@MrBeast": "assets/profile_pics/MrBeast.png",
    "@TSeries": "assets/profile_pics/TSeries.png",
    "@SETIndia": "assets/profile_pics/SETIndia.png",
    "@VladandNiki": "assets/profile_pics/VladandNiki.png",
    "@CoComelon": "assets/profile_pics/CoComelon.png"
  };

  // === Load CSV ===
  d3.csv(CSV_PATH).then(raw => {
    const cols = new Map(); raw.columns.forEach(c => cols.set(c.toLowerCase(), c));
    const pick = (...names) => { for (const n of names) if (cols.has(n)) return cols.get(n); return null; };
    const channelCol = pick("channelkey", "channel", "channel_key", "name");
    const monthCol   = pick("month", "date", "year_month");
    const viewsCol   = pick("total_views", "views", "views_total");
    const uploadsCol = pick("total_uploads", "uploads", "uploads_total");

    const data = raw.map(d => ({
      channel: d[channelCol],
      month: (d[monthCol] || "").slice(0,7),
      date: parseMonth((d[monthCol] || "").slice(0,7)),
      total_views: +d[viewsCol] || 0,
      total_uploads: +d[uploadsCol] || 0
    })).filter(d => d.channel && d.date);

    // === Main draw function ===
    function draw(metricKey = "total_views") {
      // Clear any previous chart
      d3.select("#youtubeTop5").selectAll("*").remove();

      // Create SVG inside your section container
      const svg = d3.select("#youtubeTop5")
        .append("svg")
        .attr("width", 1200)
        .attr("height", 560);

      const width = +svg.attr("width");
      const height = +svg.attr("height");
      const m = {top: 20, right: 120, bottom: 40, left: 60};
      const w = width - m.left - m.right;
      const h = height - m.top - m.bottom;

      const g = svg.append("g").attr("transform", `translate(${m.left},${m.top})`);

      const clean = data.filter(d => !isNaN(d[metricKey]));
      const grouped = d3.group(clean, d => d.channel);
      const series = Array.from(grouped, ([key, values]) => ({
        key, values: values.slice().sort((a,b) => a.date - b.date)
      }));

      const x = d3.scaleUtc()
        .domain(d3.extent(clean, d => d.date))
        .range([0, w]);

      const y = d3.scaleLinear()
        .domain([0, d3.max(clean, d => d[metricKey])])
        .nice()
        .range([h, 0]);

      const color = d3.scaleOrdinal(d3.schemeTableau10)
        .domain(series.map(d => d.key));

      // Axes
      g.append("g")
        .attr("transform", `translate(0,${h})`)
        .call(d3.axisBottom(x).ticks(d3.timeMonth.every(3)).tickFormat(d3.utcFormat("%Y-%m")))
        .selectAll("text")
        .attr("transform", "rotate(-35)")
        .attr("text-anchor", "end");

      g.append("g")
        .call(d3.axisLeft(y).ticks(6).tickFormat(d3.format(".2s")));

      // Lines
      const line = d3.line()
        .x(d => x(d.date))
        .y(d => y(d[metricKey]))
        .curve(d3.curveMonotoneX);

      const paths = g.selectAll(".line")
        .data(series)
        .join("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", d => color(d.key))
        .attr("stroke-width", 2)
        .attr("d", d => line(d.values))
        .attr("stroke-dasharray", function() {
          const L = this.getTotalLength(); return `${L} ${L}`;
        })
        .attr("stroke-dashoffset", function() { return this.getTotalLength(); })
        .transition()
        .duration(4000)
        .ease(d3.easeCubicInOut)
        .attr("stroke-dashoffset", 0);

      // === Moving Avatars ===
      const avatarGroups = g.selectAll(".avatar-group")
        .data(series)
        .join("g")
        .attr("class", "avatar-group");

      const avatars = avatarGroups.append("image")
        .attr("class", "avatar")
        .attr("href", d => profilePics[d.key] || null)
        .attr("width", 36)
        .attr("height", 36)
        .attr("clip-path", "circle(18px)")
        .style("filter", "drop-shadow(0 0 6px rgba(0,0,0,0.6))")
        .attr("x", -18)
        .attr("y", -18)
        .style("opacity", d => profilePics[d.key] ? 1 : 0);

      avatarGroups.each(function(d) {
        const path = g.selectAll(".line").filter(dd => dd.key === d.key).node();
        if (!path) return;
        const totalLength = path.getTotalLength();
        const group = d3.select(this);

        group.transition()
          .duration(4000)
          .ease(d3.easeCubicInOut)
          .attrTween("transform", function() {
            return function(t) {
              const p = path.getPointAtLength(t * totalLength);
              return `translate(${p.x},${p.y})`;
            };
          })
          .on("end", function repeat() {
            d3.active(this)
              .transition()
              .duration(6000)
              .ease(d3.easeLinear)
              .attrTween("transform", function() {
                return function(t) {
                  const p = path.getPointAtLength(t * totalLength);
                  return `translate(${p.x},${p.y})`;
                };
              })
              .on("end", repeat);
          });
      });

      avatars.on("mouseover", function(evt, d) {
          d3.select(this).raise()
            .transition().duration(200)
            .attr("width", 50).attr("height", 50)
            .attr("x", -25).attr("y", -25);
          showTip(`<b>${d.key}</b>`, evt);
        })
        .on("mouseout", function() {
          d3.select(this)
            .transition().duration(200)
            .attr("width", 36).attr("height", 36)
            .attr("x", -18).attr("y", -18);
          hideTip();
        });

      // Right-side labels
      g.selectAll(".lbl")
        .data(series)
        .join("text")
        .attr("class", "lbl")
        .attr("x", w + 6)
        .attr("y", d => y(d.values.at(-1)[metricKey]))
        .attr("dy", "0.32em")
        .attr("fill", d => color(d.key))
        .attr("font-size", 12)
        .text(d => d.key);
    }

    draw(); // default metric
  });
}
