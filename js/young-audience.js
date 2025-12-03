/* Young Audience Pie Chart Visualization */

document.addEventListener("DOMContentLoaded", () => {
    const container = d3.select("#young-audience-viz");
    if (container.empty()) {
        console.warn("young-audience-viz container not found");
        return;
    }

    // Create wrapper div for positioning
    const wrapper = container.append("div")
        .attr("class", "youth-viz-wrapper");

    const width = 900;
    const height = 350; // Reduced height
    const svg = wrapper.append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("overflow", "visible");

    // Load CSV
    d3.csv("assets/data/shortform_youth_audience.csv").then(data => {
        console.log("Loaded CSV:", data);

        // Process data and compute totals
        const processedData = data.map(d => {
            const female = +d.female_pct;
            const male = +d.male_pct;
            const total = female + male;
            return {
                group: d.age_group,
                female: female,
                male: male,
                total: total
            };
        });

        console.log("Processed data:", processedData);

        // Pie chart setup - reduced radius
        const radius = 130;
        const pie = d3.pie()
            .value(d => d.total)
            .sort(null);
        
        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        // Color mapping
        const colorMap = {
            "18-24": "#F4A300",
            "25-34": "#E14A40",
            "35-44": "#7C9CFF",
            "45-54": "#34D399",
            "55+": "#9B59B6"
        };

        const color = d3.scaleOrdinal()
            .domain(processedData.map(d => d.group))
            .range(processedData.map(d => colorMap[d.group]));

        // Center pie chart - natural positioning
        const pieCenterX = width / 2 - 60; // Slightly left of center for better balance
        const pieCenterY = height / 2 - 50; // Moved upward
        const chartGroup = svg.append("g")
            .attr("class", "pie-chart-group")
            .attr("transform", `translate(${pieCenterX}, ${pieCenterY})`);

        // Create pie slices
        const arcs = pie(processedData);
        const slices = chartGroup.selectAll(".slice")
            .data(arcs)
            .enter()
            .append("g")
            .attr("class", "slice-group");

        // Add path to each slice group
        const slicePaths = slices.append("path")
            .attr("class", "slice")
            .attr("d", arc)
            .attr("fill", d => color(d.data.group))
            .attr("stroke", "#0E0F12")
            .attr("stroke-width", 2)
            .style("cursor", "pointer");

        // Hover effect - subtle opacity change only, no movement
        slicePaths.on("mouseover", function(event, d) {
            d3.select(this)
                .transition()
                .duration(150)
                .attr("fill-opacity", 0.85)
                .attr("stroke-width", 3);
        });

        slicePaths.on("mouseout", function() {
            d3.select(this)
                .transition()
                .duration(150)
                .attr("fill-opacity", 1)
                .attr("stroke-width", 2);
        });

        // Prevent any click movement
        slicePaths.on("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
        });

        // Add labels on slices - ONLY age groups (no percentages)
        const labels = slices.append("text")
            .attr("class", "slice-label")
            .attr("transform", d => {
                const centroid = arc.centroid(d);
                return `translate(${centroid[0]}, ${centroid[1]})`;
            })
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .style("fill", "#EDEFF3")
            .style("font-family", "Inter, sans-serif")
            .style("font-size", "13px")
            .style("font-weight", "600")
            .style("pointer-events", "none")
            .text(d => {
                // Show only age group, no percentages
                return d.data.group === "55+" ? "55+" : d.data.group;
            });

        // Tooltip container (append to container, not wrapper, so it's positioned correctly)
        const tooltip = container.append("div")
            .attr("class", "youth-tooltip")
            .style("opacity", 0)
            .style("position", "absolute")
            .style("pointer-events", "none");

        // Tooltip on hover - position near slice centroid
        slicePaths.on("mousemove", function(event, d) {
            const centroid = arc.centroid(d);
            const [cx, cy] = centroid;
            const tooltipX = pieCenterX + cx + 20;
            const tooltipY = pieCenterY + cy - 20;

            tooltip.style("opacity", 1)
                .html(`
                    <strong>${d.data.group === "55+" ? "55+" : d.data.group}</strong><br/>
                    Female: ${d.data.female}%<br/>
                    Male: ${d.data.male}%<br/>
                    <strong>Total: ${d.data.total.toFixed(1)}%</strong>
                `)
                .style("left", tooltipX + "px")
                .style("top", tooltipY + "px");
        });

        slicePaths.on("mouseout", () => {
            tooltip.style("opacity", 0);
        });

        // Add characters - natural positioning, aligned with pie center
        const characterHeight = 180;
        const characterWidth = 120;
        const characterY = pieCenterY + 30; // Aligned with pie center vertically

        // Girl character - RIGHT (natural spacing)
        const girlX = pieCenterX + 200;
        svg.append("image")
            .attr("href", "assets/characters/girl-teen.svg")
            .attr("x", girlX)
            .attr("y", characterY - characterHeight)
            .attr("width", characterWidth)
            .attr("height", characterHeight)
            .attr("class", "kid-character girl-kid")
            .style("z-index", 5);

        // Boy character - LEFT (moved to left)
        const boyX = pieCenterX - 280;
        svg.append("image")
            .attr("href", "assets/characters/boy-teen.svg")
            .attr("x", boyX)
            .attr("y", characterY - characterHeight)
            .attr("width", characterWidth)
            .attr("height", characterHeight)
            .attr("class", "kid-character boy-kid")
            .style("z-index", 5);

    }).catch(err => {
        console.error("Error loading CSV:", err);
    });
});
