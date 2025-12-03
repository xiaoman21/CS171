// Slide 6 Animated News Consumption Visualization
(function() {
    'use strict';
    
    // Data for the chart
    const data = {
        years: [2020, 2021, 2022, 2023, 2024, 2025],
        platforms: {
            YouTube: {
                name: 'YouTube',
                values: [23, 22, 25, 26, 32, 35],
                color: '#FF0000',
                textId: 'youtube-text',
                change: 12
            },
            Instagram: {
                name: 'Instagram',
                values: [11, 11, 13, 16, 20, 20],
                color: '#E4405F',
                textId: 'instagram-text',
                change: 9
            },
            TikTok: {
                name: 'TikTok',
                values: [3, 6, 10, 14, 17, 20],
                color: '#00F2EA',
                textId: 'tiktok-text',
                change: 17
            },
            Twitter: {
                name: 'X/Twitter',
                values: [15, 13, 14, 12, 12, 12],
                color: '#1DA1F2',
                textId: 'twitter-text',
                change: -3
            }
        }
    };
    
    let animationTriggered = false;
    let svg, chartGroup, xScale, yScale, line;
    let currentView = 'lines'; // 'lines' or 'bars'
    let containerWidth, containerHeight, margin, chartWidth, chartHeight;
    
    function initChart() {
        const container = document.getElementById('slide6ChartContainer');
        if (!container) return;
        
        margin = { top: 20, right: 120, bottom: 50, left: 60 };
        containerWidth = container.clientWidth;
        containerHeight = container.clientHeight;
        chartWidth = containerWidth - margin.left - margin.right;
        chartHeight = containerHeight - margin.top - margin.bottom;
        
        // Clear any existing SVG
        d3.select('#slide6Chart').selectAll('*').remove();
        
        // Create SVG
        svg = d3.select('#slide6Chart')
            .attr('width', containerWidth)
            .attr('height', containerHeight);
        
        chartGroup = svg.append('g')
            .attr('class', 'main-chart-group')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
        
        // Create scales
        xScale = d3.scaleLinear()
            .domain([2020, 2025])
            .range([0, chartWidth]);
        
        // Increased vertical range for better display
        yScale = d3.scaleLinear()
            .domain([0, 40])
            .range([chartHeight, 0]);
        
        // Create line generator
        line = d3.line()
            .x((d, i) => xScale(data.years[i]))
            .y(d => yScale(d));
        
        // Add grid lines
        const yGridLines = chartGroup.append('g')
            .attr('class', 'grid');
        
        for (let i = 0; i <= 40; i += 5) {
            yGridLines.append('line')
                .attr('class', 'grid-line')
                .attr('x1', 0)
                .attr('x2', chartWidth)
                .attr('y1', yScale(i))
                .attr('y2', yScale(i));
        }
        
        // Add axes
        const xAxis = d3.axisBottom(xScale)
            .tickFormat(d3.format('d'))
            .ticks(6);
        
        const yAxis = d3.axisLeft(yScale)
            .tickFormat(d => d + '%');
        
        chartGroup.append('g')
            .attr('class', 'axis x-axis')
            .attr('transform', `translate(0, ${chartHeight})`)
            .call(xAxis);
        
        chartGroup.append('g')
            .attr('class', 'axis y-axis')
            .call(yAxis);
        
        // Add axis labels
        svg.append('text')
            .attr('class', 'axis-label x-label')
            .attr('x', containerWidth / 2)
            .attr('y', containerHeight - 10)
            .attr('text-anchor', 'middle')
            .style('fill', 'var(--muted, #A4ADBD)')
            .style('font-size', '14px')
            .style('font-family', 'Inter, sans-serif')
            .text('Year');
        
        svg.append('text')
            .attr('class', 'axis-label y-label')
            .attr('transform', 'rotate(-90)')
            .attr('x', -(containerHeight / 2))
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .style('fill', 'var(--muted, #A4ADBD)')
            .style('font-size', '14px')
            .style('font-family', 'Inter, sans-serif')
            .text('% of U.S. adults');
        
        // Draw invisible lines for each platform (will be animated in later)
        Object.entries(data.platforms).forEach(([key, platform]) => {
            const lineGroup = chartGroup.append('g')
                .attr('class', `line-group line-${key.toLowerCase()}`);
            
            // Draw the line
            const pathLength = lineGroup.append('path')
                .datum(platform.values)
                .attr('class', `chart-line line-${key.toLowerCase()}`)
                .attr('d', line)
                .attr('stroke', platform.color)
                .style('stroke-dasharray', function() {
                    return this.getTotalLength();
                })
                .style('stroke-dashoffset', function() {
                    return this.getTotalLength();
                });
            
            // Add dots for each data point
            platform.values.forEach((value, i) => {
                lineGroup.append('circle')
                    .attr('class', `chart-dot dot-${key.toLowerCase()}`)
                    .attr('cx', xScale(data.years[i]))
                    .attr('cy', yScale(value))
                    .attr('r', 4)
                    .attr('fill', platform.color)
                    .attr('stroke', '#15171B')
                    .attr('stroke-width', 2);
            });
            
            // Add label at the end of the line
            const lastValue = platform.values[platform.values.length - 1];
            lineGroup.append('text')
                .attr('class', `chart-label label-${key.toLowerCase()}`)
                .attr('x', xScale(2025) + 10)
                .attr('y', yScale(lastValue))
                .attr('dy', '0.35em')
                .attr('fill', platform.color)
                .style('font-family', 'Inter, sans-serif')
                .style('font-size', '13px')
                .style('font-weight', '600')
                .text(platform.name);
        });
    }
    
    function animateSequence() {
        if (animationTriggered) return;
        animationTriggered = true;
        
        // Step 1: Fade in title (0s)
        setTimeout(() => {
            const title = document.getElementById('slide6Title');
            if (title) title.classList.add('visible');
        }, 100);
        
        // Step 2: Show first text (1s)
        setTimeout(() => {
            const text1 = document.getElementById('slide6Text1');
            if (text1) text1.classList.add('visible');
        }, 1000);
        
        // Step 3: Fade in YouTube word (1.5s)
        setTimeout(() => {
            document.querySelector('.youtube-text')?.classList.add('visible');
        }, 1500);
        
        // Step 4: Animate YouTube line (2s, slower)
        setTimeout(() => {
            animateLine('youtube', 'YouTube', 2200);
        }, 2000);
        
        // Step 5: Fade in Instagram word (4.2s)
        setTimeout(() => {
            document.querySelector('.instagram-text')?.classList.add('visible');
        }, 4200);
        
        // Step 6: Animate Instagram line (4.7s, slower)
        setTimeout(() => {
            animateLine('instagram', 'Instagram', 2200);
        }, 4700);
        
        // Step 7: Fade in TikTok word (6.9s)
        setTimeout(() => {
            document.querySelector('.tiktok-text')?.classList.add('visible');
        }, 6900);
        
        // Step 8: Animate TikTok line (7.4s, slower)
        setTimeout(() => {
            animateLine('tiktok', 'TikTok', 2200);
        }, 7400);
        
        // Step 9: Show second text (9.8s)
        setTimeout(() => {
            const text2 = document.getElementById('slide6Text2');
            if (text2) text2.classList.add('visible');
        }, 9800);
        
        // Step 10: Fade in Twitter word (10.3s)
        setTimeout(() => {
            document.querySelector('.twitter-text')?.classList.add('visible');
        }, 10300);
        
        // Step 11: Animate Twitter line (10.8s, slower)
        setTimeout(() => {
            animateLine('twitter', 'Twitter', 2200);
        }, 10800);
        
        // Step 12: Show third text (13.2s)
        setTimeout(() => {
            const text3 = document.getElementById('slide6Text3');
            if (text3) text3.classList.add('visible');
        }, 13200);
        
        // Step 13: Show toggle button (14.5s)
        setTimeout(() => {
            const toggleBtn = document.getElementById('slide6ToggleBtn');
            if (toggleBtn) toggleBtn.classList.add('visible');
        }, 14500);
    }
    
    function animateLine(platformKey, platformName, duration) {
        const line = d3.select(`.line-${platformKey.toLowerCase()}`);
        const path = line.select('.chart-line');
        
        // Animate the line drawing
        path.transition()
            .duration(duration)
            .style('opacity', 1)
            .style('stroke-dashoffset', 0);
        
        // Show dots progressively
        const dots = line.selectAll('.chart-dot');
        const totalDots = dots.size();
        
        dots.each(function(d, i) {
            d3.select(this)
                .transition()
                .delay((i / totalDots) * duration)
                .duration(200)
                .style('opacity', 1);
        });
        
        // Show label at the end
        line.select('.chart-label')
            .transition()
            .delay(duration)
            .duration(300)
            .style('opacity', 1);
    }
    
    // Create bar chart view
    function createBarChart() {
        // Hide all line chart elements
        chartGroup.selectAll('.line-group').style('display', 'none');
        chartGroup.selectAll('.grid').style('display', 'none');
        svg.selectAll('.axis').style('display', 'none');
        svg.selectAll('.axis-label').style('display', 'none');
        
        // Create bar chart data (sorted by change)
        const barData = Object.entries(data.platforms)
            .map(([key, platform]) => ({
                name: platform.name,
                change: platform.change,
                color: platform.color
            }))
            .sort((a, b) => b.change - a.change);
        
        // Create scales for bar chart
        const xBarScale = d3.scaleBand()
            .domain(barData.map(d => d.name))
            .range([0, chartWidth])
            .padding(0.3);
        
        // Increased range for better emphasis on change
        const yBarScale = d3.scaleLinear()
            .domain([-5, 20])
            .range([chartHeight, 0]);
        
        // Create bar chart group
        const barChartGroup = chartGroup.append('g')
            .attr('class', 'bar-chart-group');
        
        // Add grid lines for bar chart
        const gridGroup = barChartGroup.append('g')
            .attr('class', 'bar-grid');
        
        for (let i = -5; i <= 20; i += 5) {
            gridGroup.append('line')
                .attr('class', 'grid-line')
                .attr('x1', 0)
                .attr('x2', chartWidth)
                .attr('y1', yBarScale(i))
                .attr('y2', yBarScale(i));
        }
        
        // Add zero line (more prominent)
        barChartGroup.append('line')
            .attr('class', 'zero-line')
            .attr('x1', 0)
            .attr('x2', chartWidth)
            .attr('y1', yBarScale(0))
            .attr('y2', yBarScale(0))
            .attr('stroke', 'var(--muted, #A4ADBD)')
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', '4,4');
        
        // Add axes
        const xBarAxis = d3.axisBottom(xBarScale);
        const yBarAxis = d3.axisLeft(yBarScale)
            .tickFormat(d => d + '%');
        
        barChartGroup.append('g')
            .attr('class', 'axis x-axis-bar')
            .attr('transform', `translate(0, ${chartHeight})`)
            .call(xBarAxis)
            .selectAll('text')
            .style('font-size', '13px')
            .style('font-weight', '600');
        
        barChartGroup.append('g')
            .attr('class', 'axis y-axis-bar')
            .call(yBarAxis);
        
        // Add axis labels
        svg.append('text')
            .attr('class', 'axis-label x-label-bar')
            .attr('x', containerWidth / 2)
            .attr('y', containerHeight - 10)
            .attr('text-anchor', 'middle')
            .style('fill', 'var(--muted, #A4ADBD)')
            .style('font-size', '14px')
            .style('font-family', 'Inter, sans-serif')
            .text('Platform');
        
        svg.append('text')
            .attr('class', 'axis-label y-label-bar')
            .attr('transform', 'rotate(-90)')
            .attr('x', -(containerHeight / 2))
            .attr('y', 12)
            .attr('text-anchor', 'middle')
            .style('fill', 'var(--muted, #A4ADBD)')
            .style('font-size', '14px')
            .style('font-family', 'Inter, sans-serif')
            .text('Change in percentage points');
        
        // Draw bars with animation - grow slowly from x-axis
        barData.forEach((d, i) => {
            const finalBarHeight = Math.abs(yBarScale(d.change) - yBarScale(0));
            const finalBarY = d.change >= 0 ? yBarScale(d.change) : yBarScale(0);
            const zeroY = yBarScale(0);
            
            // For positive values: bar grows upward from zero
            // For negative values: bar grows downward from zero
            const startY = zeroY;
            const startHeight = 0;
            
            const bar = barChartGroup.append('rect')
                .attr('class', 'chart-bar')
                .attr('x', xBarScale(d.name))
                .attr('y', startY) // Always start at zero line
                .attr('width', xBarScale.bandwidth())
                .attr('height', startHeight) // Start with zero height
                .attr('fill', d.color)
                .style('opacity', 1);
            
            // Animate bar growth from zero line - much slower
            setTimeout(() => {
                if (d.change >= 0) {
                    // Positive bars: grow upward
                    bar.transition()
                        .duration(2000)
                        .ease(d3.easeCubicOut)
                        .attr('y', finalBarY) // Move top edge up
                        .attr('height', finalBarHeight); // Grow height
                } else {
                    // Negative bars: grow downward
                    bar.transition()
                        .duration(2000)
                        .ease(d3.easeCubicOut)
                        .attr('height', finalBarHeight); // Grow height downward
                }
                
                // Add value label - appears near the end of bar animation
                const labelY = d.change >= 0 ? finalBarY - 8 : zeroY + finalBarHeight + 20;
                barChartGroup.append('text')
                    .attr('class', 'bar-value-label')
                    .attr('x', xBarScale(d.name) + xBarScale.bandwidth() / 2)
                    .attr('y', labelY)
                    .attr('text-anchor', 'middle')
                    .attr('fill', d.color)
                    .text((d.change > 0 ? '+' : '') + d.change + '%')
                    .style('opacity', 0)
                    .transition()
                    .delay(1500) // Wait longer before showing label
                    .duration(400)
                    .style('opacity', 1);
            }, i * 600); // Longer stagger between bars
        });
    }
    
    // Switch back to line chart
    function showLineChart() {
        // Remove bar chart
        chartGroup.selectAll('.bar-chart-group').remove();
        svg.selectAll('.x-label-bar').remove();
        svg.selectAll('.y-label-bar').remove();
        
        // Show line chart elements
        chartGroup.selectAll('.line-group').style('display', 'block');
        chartGroup.selectAll('.grid').style('display', 'block');
        svg.selectAll('.axis:not(.x-axis-bar):not(.y-axis-bar)').style('display', 'block');
        svg.selectAll('.x-label').style('display', 'block');
        svg.selectAll('.y-label').style('display', 'block');
    }
    
    // Toggle between views
    function toggleView() {
        const btn = document.getElementById('slide6ToggleBtn');
        const btnText = btn.querySelector('.toggle-btn-text');
        const title = document.getElementById('slide6Title');
        
        if (currentView === 'lines') {
            currentView = 'bars';
            createBarChart();
            btnText.textContent = 'Show Trend Lines';
            title.textContent = 'Change in Regular News Use by Platform (2020–2025)';
        } else {
            currentView = 'lines';
            showLineChart();
            btnText.textContent = 'Show Change (2020–2025)';
            title.textContent = 'Where People Get News (2020–2025)';
        }
    }
    
    // Initialize on load
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initChart();
                setupIntersectionObserver();
                setupToggleButton();
            });
        } else {
            initChart();
            setupIntersectionObserver();
            setupToggleButton();
        }
        
        // Re-init chart on window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (!animationTriggered) {
                    initChart();
                }
            }, 300);
        });
    }
    
    function setupToggleButton() {
        const btn = document.getElementById('slide6ToggleBtn');
        if (btn) {
            btn.addEventListener('click', toggleView);
        }
    }
    
    function setupIntersectionObserver() {
        const slide6 = document.getElementById('slide6');
        if (!slide6) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    animateSequence();
                }
            });
        }, {
            threshold: [0.3]
        });
        
        observer.observe(slide6);
    }
    
    // Initialize
    init();
})();

