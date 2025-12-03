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

    // Get container dimensions - use full slide area
    const container = d3.select('#chart-area');
    const containerNode = container.node();
    const containerRect = containerNode.getBoundingClientRect();
    const width = containerRect.width || 1400;
    const height = containerRect.height || 700;
    
    const svg = container
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('position', 'absolute')
        .style('top', 0)
        .style('left', 0)
        .style('overflow', 'visible');

    // Add defs for clipPaths
    const defs = svg.append('defs');

    const maxUploads = d3.max(filteredChannels, d => d.total_uploads);
    const minUploads = d3.min(filteredChannels, d => d.total_uploads);
    const radiusScale = d3.scalePow()
        .exponent(0.35)
        .domain([minUploads, maxUploads])
        .range([80, 125]);

    // Create boundary function to keep circles within slide but avoid text areas
    const boundaryPadding = 50;
    const minX = boundaryPadding;
    const maxX = width - boundaryPadding;
    const minY = boundaryPadding;
    const maxY = height - boundaryPadding;
    
    // Text obstacle areas (precise positions to avoid text)
    const textObstacles = [
        { x: width / 2, y: 150, width: 1000, height: 320 }, // Title, body text, and subtitle area (top)
        { x: width / 2, y: height - 40, width: 800, height: 80 } // Caption area at bottom
    ];
    
    // Function to check if a position overlaps with any text obstacle
    function wouldOverlapText(x, y, radius) {
        for (const obstacle of textObstacles) {
            const distX = Math.abs(x - obstacle.x);
            const distY = Math.abs(y - obstacle.y);
            const minDistX = obstacle.width / 2 + radius + 40; // Extra padding
            const minDistY = obstacle.height / 2 + radius + 40;
            
            if (distX < minDistX && distY < minDistY) {
                return true; // Would overlap
            }
        }
        return false;
    }
    
    // Function to find a safe position away from text
    function findSafePosition(radius, index) {
        // Start in the safe zone (below title text, above caption)
        const safeZoneTop = 350; // Well below the text
        const safeZoneBottom = height - 150; // Well above caption
        const safeZoneHeight = safeZoneBottom - safeZoneTop;
        
        // Spread circles across the safe zone
        const angle = (index / filteredChannels.length) * Math.PI * 2;
        const radiusOffset = 200 + Math.random() * 150;
        
        let x = width / 2 + Math.cos(angle) * radiusOffset;
        let y = safeZoneTop + safeZoneHeight / 2 + Math.sin(angle) * (safeZoneHeight / 3);
        
        // Ensure within bounds
        x = Math.max(boundaryPadding + radius, Math.min(width - boundaryPadding - radius, x));
        y = Math.max(safeZoneTop + radius, Math.min(safeZoneBottom - radius, y));
        
        return { x, y };
    }
    
    // Initialize circles in safe positions
    filteredChannels.forEach((d, i) => {
        const radius = radiusScale(d.total_uploads);
        const safePos = findSafePosition(radius, i);
        d.x = safePos.x;
        d.y = safePos.y;
    });
    
    const simulation = d3.forceSimulation(filteredChannels)
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter(width / 2, height / 2 + 100).strength(0.03)) // Center in safe zone
        .force('collision', d3.forceCollide().radius(d => radiusScale(d.total_uploads) + 35))
        .force('x', d3.forceX(width / 2).strength(0.01))
        .force('y', d3.forceY(height / 2 + 100).strength(0.03)) // Keep in middle area
        .alphaDecay(0.015)
        .velocityDecay(0.4);

    const channelGroups = svg.selectAll('.channel-group')
        .data(filteredChannels)
        .enter()
        .append('g')
        .attr('class', 'channel-group')
        .attr('transform', d => `translate(${d.x}, ${d.y})`);

    // Add glow filter for circles
    const glowFilter = defs.append('filter')
        .attr('id', 'glow')
        .attr('x', '-50%')
        .attr('y', '-50%')
        .attr('width', '200%')
        .attr('height', '200%');
    
    glowFilter.append('feGaussianBlur')
        .attr('stdDeviation', '8')
        .attr('result', 'coloredBlur');
    
    const feMerge = glowFilter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Add circle with optional profile picture
    channelGroups.each(function(d) {
        const group = d3.select(this);
        const radius = radiusScale(d.total_uploads);
        const clipId = `clip-${d.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}`;
        
        // Add circle - start all red with glow
        group.append('circle')
            .attr('class', 'channel-circle')
            .attr('r', radius)
            .attr('data-state', 'circle')
            .attr('fill', '#ff6b6b')
            .attr('stroke', '#ff6b6b')
            .attr('stroke-width', 3)
            .style('cursor', 'pointer')
            .style('filter', 'url(#glow)')
            .style('opacity', 0.9);
        
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
        // Enforce boundaries and text avoidance on each tick
        filteredChannels.forEach(d => {
            const radius = radiusScale(d.total_uploads);
            
            // Keep within slide boundaries
            d.x = Math.max(minX + radius, Math.min(maxX - radius, d.x));
            d.y = Math.max(minY + radius, Math.min(maxY - radius, d.y));
            
            // Avoid text obstacles - push circles away from text
            textObstacles.forEach(obstacle => {
                const distX = Math.abs(d.x - obstacle.x);
                const distY = Math.abs(d.y - obstacle.y);
                const minDistX = obstacle.width / 2 + radius + 30;
                const minDistY = obstacle.height / 2 + radius + 30;
                
                if (distX < minDistX && distY < minDistY) {
                    // Circle is overlapping with text - push it away
                    const overlapX = minDistX - distX;
                    const overlapY = minDistY - distY;
                    
                    // Push in the direction of least overlap
                    if (overlapX < overlapY) {
                        // Push horizontally
                        d.x += (d.x < obstacle.x ? -overlapX : overlapX);
                    } else {
                        // Push vertically
                        d.y += (d.y < obstacle.y ? -overlapY : overlapY);
                    }
                    
                    // Ensure still within bounds after pushing
                    d.x = Math.max(minX + radius, Math.min(maxX - radius, d.x));
                    d.y = Math.max(minY + radius, Math.min(maxY - radius, d.y));
                }
            });
        });
        
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
        const radius = radiusScale(d.total_uploads);
        
        // Constrain to boundaries
        let newX = Math.max(minX + radius, Math.min(maxX - radius, event.x));
        let newY = Math.max(minY + radius, Math.min(maxY - radius, event.y));
        
        // Check for text obstacle collisions
        textObstacles.forEach(obstacle => {
            const distX = Math.abs(newX - obstacle.x);
            const distY = Math.abs(newY - obstacle.y);
            const minDistX = obstacle.width / 2 + radius + 10;
            const minDistY = obstacle.height / 2 + radius + 10;
            
            // If circle would overlap with text obstacle, prevent it
            if (distX < minDistX && distY < minDistY) {
                // Push circle away from obstacle
                if (distX < distY) {
                    newX = newX < obstacle.x 
                        ? obstacle.x - minDistX 
                        : obstacle.x + minDistX;
                } else {
                    newY = newY < obstacle.y 
                        ? obstacle.y - minDistY 
                        : obstacle.y + minDistY;
                }
            }
        });
        
        d.fx = newX;
        d.fy = newY;
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
                .style('opacity', 0)
                .style('filter', 'none');

            group.select('.label-group').transition()
                .duration(300)
                .style('opacity', 0);
            
            // Hide profile image when transitioning to pie
            group.select('.channel-image').transition()
                .duration(300)
                .style('opacity', 0);

            const pieData = [
                { label: 'Shorts', value: d.shorts_uploads, color: '#ff6b6b' }, // Red for Shorts
                { label: 'Regular', value: d.regular_uploads, color: '#4ecdc4' } // Green for Regular
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
                .style('opacity', 0.9)
                .style('filter', 'url(#glow)');
            
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