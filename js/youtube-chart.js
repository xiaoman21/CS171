// =====================================================
// YouTube Channels Visualization
// =====================================================

function initYouTubeVis(data) {
    // Map channel names to profile picture paths
    const profilePics = {
        'MrBeast': 'assets/profile_pics/MrBeast.png',
        'TSeries': 'assets/profile_pics/TSeries.png',
        'CoComelon': 'assets/profile_pics/CoComelon.png',
        'SETIndia': 'assets/profile_pics/SETIndia.png',
        'VladandNiki': 'assets/profile_pics/VladandNiki.png'
    };

    const channels = data.map(d => ({
        name: d.channelKey.replace('@', ''),
        channelKey: d.channelKey,
        total_uploads: +d.total_uploads,
        shorts_uploads: +d.shorts_uploads,
        regular_uploads: +d.total_uploads - +d.shorts_uploads,
        total_views: +d.total_views,
        shorts_share: +d.uploads_shorts_share,
        profilePic: profilePics[d.channelKey] || null
    }));

    const filteredChannels = channels.filter(d => d.total_uploads > 0).slice(0, 12);

    const width = 1400;
    const height = 700;
    const svg = d3.select('#chart-area')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

    // Add defs for clipPaths
    const defs = svg.append('defs');

    const maxUploads = d3.max(filteredChannels, d => d.total_uploads);
    const minUploads = d3.min(filteredChannels, d => d.total_uploads);
    const radiusScale = d3.scalePow()
        .exponent(0.35)
        .domain([minUploads, maxUploads])
        .range([80, 125]);

    const simulation = d3.forceSimulation(filteredChannels)
        .force('charge', d3.forceManyBody().strength(-100))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(d => radiusScale(d.total_uploads) + 25))
        .force('x', d3.forceX(width / 2).strength(0.05))
        .force('y', d3.forceY(height / 2).strength(0.05))
        .alphaDecay(0.02)
        .velocityDecay(0.3);

    const channelGroups = svg.selectAll('.channel-group')
        .data(filteredChannels)
        .enter()
        .append('g')
        .attr('class', 'channel-group')
        .attr('transform', d => `translate(${d.x}, ${d.y})`);

    // Add circle with optional profile picture
    channelGroups.each(function(d) {
        const group = d3.select(this);
        const radius = radiusScale(d.total_uploads);
        const clipId = `clip-${d.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`;
        
        // Add circle
        group.append('circle')
            .attr('class', 'channel-circle')
            .attr('r', radius)
            .attr('data-state', 'circle');
        
        // Add clipPath to defs if profile pic exists (only once per channel)
        if (d.profilePic && defs.select(`#${clipId}`).empty()) {
            defs.append('clipPath')
                .attr('id', clipId)
                .append('circle')
                .attr('r', radius - 3);
        }
        
        if (d.profilePic) {
            group.append('image')
                .attr('xlink:href', d.profilePic)
                .attr('x', -radius + 3)
                .attr('y', -radius + 3)
                .attr('width', (radius - 3) * 2)
                .attr('height', (radius - 3) * 2)
                .attr('clip-path', `url(#${clipId})`)
                .attr('class', 'channel-image')
                .style('opacity', 0.9);
        }
    });

    channelGroups.each(function(d) {
        const group = d3.select(this);
        const radius = radiusScale(d.total_uploads);
        const name = d.name;

        const words = name.split(/(?=[A-Z])|(?<=\d)(?=[A-Z])/);
        const lineHeight = 16;
        const maxWidth = radius * 1.6;

        let lines = [];
        let currentLine = '';

        words.forEach(word => {
            const testLine = currentLine + word;
            if (testLine.length * 7 < maxWidth || currentLine === '') {
                currentLine = testLine;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        });
        if (currentLine) lines.push(currentLine);

        const textGroup = group.append('g').attr('class', 'label-group');
        const startY = -(lines.length - 1) * lineHeight / 2;

        lines.forEach((line, i) => {
            textGroup.append('text')
                .attr('class', 'channel-label')
                .attr('y', startY + i * lineHeight)
                .attr('dy', '0.35em')
                .text(line);
        });
    });

    simulation.on('tick', () => {
        channelGroups.attr('transform', d => `translate(${d.x}, ${d.y})`);
    });

    const drag = d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);

    channelGroups.call(drag);

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    const pie = d3.pie()
        .value(d => d.value)
        .sort(null);

    channelGroups.on('click', function(event, d) {
        const group = d3.select(this);
        const circle = group.select('.channel-circle');
        const state = circle.attr('data-state');
        const radius = radiusScale(d.total_uploads);

        if (state === 'circle') {
            circle.attr('data-state', 'pie');

            circle.transition()
                .duration(300)
                .attr('r', 0)
                .style('opacity', 0);

            group.select('.label-group').transition()
                .duration(300)
                .style('opacity', 0);
            
            // Hide profile image when transitioning to pie
            group.select('.channel-image').transition()
                .duration(300)
                .style('opacity', 0);

            const pieData = [
                { label: 'Shorts', value: d.shorts_uploads, color: '#ff6b6b' },
                { label: 'Regular', value: d.regular_uploads, color: '#4ecdc4' }
            ];

            const arcs = pie(pieData);

            const slices = group.selectAll('.pie-slice')
                .data(arcs)
                .enter()
                .append('path')
                .attr('class', d => `pie-slice ${d.data.label.toLowerCase()}-slice`)
                .attr('fill', d => d.data.color)
                .each(function(d) {
                    this._current = { startAngle: 0, endAngle: 0 };
                });

            slices.transition()
                .duration(500)
                .attrTween('d', function(d) {
                    const interpolate = d3.interpolate(this._current, d);
                    this._current = interpolate(1);
                    return t => {
                        const arcGen = d3.arc()
                            .innerRadius(0)
                            .outerRadius(radius);
                        return arcGen(interpolate(t));
                    };
                });

            setTimeout(() => {
                const totalUploads = d.total_uploads;
                group.selectAll('.pie-label')
                    .data(arcs)
                    .enter()
                    .append('text')
                    .attr('class', 'pie-label')
                    .attr('transform', function(arcData) {
                        const arcGen = d3.arc()
                            .innerRadius(0)
                            .outerRadius(radius * 0.7);
                        return `translate(${arcGen.centroid(arcData)})`;
                    })
                    .style('opacity', 0)
                    .each(function(arcData) {
                        const text = d3.select(this);
                        const percent = ((arcData.data.value / totalUploads) * 100).toFixed(1);
                        const count = arcData.data.value;

                        text.append('tspan')
                            .attr('x', 0)
                            .attr('dy', '-0.3em')
                            .text(arcData.data.label);

                        text.append('tspan')
                            .attr('x', 0)
                            .attr('dy', '1.3em')
                            .text(count);

                        text.append('tspan')
                            .attr('x', 0)
                            .attr('dy', '1.3em')
                            .text(`(${percent}%)`);
                    })
                    .transition()
                    .duration(300)
                    .style('opacity', 1);
            }, 500);

        } else {
            circle.attr('data-state', 'circle');

            group.selectAll('.pie-slice').transition()
                .duration(300)
                .attrTween('d', function(d) {
                    const interpolate = d3.interpolate(this._current, { startAngle: 0, endAngle: 0 });
                    return t => {
                        const arcGen = d3.arc()
                            .innerRadius(0)
                            .outerRadius(radius);
                        return arcGen(interpolate(t));
                    };
                })
                .remove();

            group.selectAll('.pie-label').transition()
                .duration(200)
                .style('opacity', 0)
                .remove();

            setTimeout(() => {
            circle.transition()
                .duration(300)
                .attr('r', radius)
                .style('opacity', 1);
            
            // Show profile image when transitioning back to circle
            group.select('.channel-image').transition()
                .duration(300)
                .style('opacity', 0.9);

                group.select('.label-group').transition()
                    .duration(300)
                    .style('opacity', 1);
            }, 300);
        }
    });
}