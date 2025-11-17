// =====================================================
// TikTok Globe Visualization Class
// =====================================================

class TikTokGlobeVis {
    constructor(parentElement, tiktokData, geoData) {
        this.parentElement = parentElement;
        this.tiktokData = tiktokData;
        this.geoData = geoData;
        this.selectedYear = '2025';

        this.initVis();
    }

    initVis() {
        let vis = this;

        vis.margin = { top: 20, right: 20, bottom: 20, left: 20 };
        vis.width = document.getElementById(vis.parentElement).getBoundingClientRect().width - vis.margin.left - vis.margin.right;
        vis.height = document.getElementById(vis.parentElement).getBoundingClientRect().height - vis.margin.top - vis.margin.bottom;

        vis.mainContainer = d3.select("#" + vis.parentElement)
            .append("div")
            .style("display", "flex")
            .style("align-items", "center")
            .style("justify-content", "center")
            .style("position", "relative")
            .style("width", "100%")
            .style("height", "100%");

        vis.addYearSelector();

        vis.svg = vis.mainContainer.append("svg")
            .attr("width", vis.width)
            .attr("height", vis.height);

        let zoomFactor = Math.min(vis.width, vis.height) / 800;
        let defaultScale = 300;

        vis.projection = d3.geoOrthographic()
            .clipAngle(90)
            .translate([vis.width / 2, vis.height / 2])
            .scale(defaultScale * zoomFactor);

        vis.path = d3.geoPath()
            .projection(vis.projection);

        vis.tooltip = vis.mainContainer.append('div')
            .attr('class', 'globe-tooltip')
            .style("opacity", 0);

        vis.sphere = vis.svg.append("path")
            .datum({type: "Sphere"})
            .attr("class", "graticule")
            .attr("fill", "#1a1a2e")
            .attr("stroke", "rgba(255, 244, 214, 0.3)")
            .attr("stroke-width", 1.5)
            .attr("d", vis.path);

        let graticule = d3.geoGraticule();
        vis.svg.append("path")
            .datum(graticule)
            .attr("class", "graticule")
            .attr("d", vis.path)
            .style("fill", "none")
            .style("stroke", "rgba(255, 244, 214, 0.1)")
            .style("stroke-width", "0.5px");

        vis.countriesGroup = vis.svg.append("g")
            .attr("class", "countries");

        vis.addLegend();
        vis.addInfoPanel();
        vis.wrangleData();

        window.addEventListener('resize', () => vis.handleResize());
        vis.enableRotation();
    }

    addYearSelector() {
        let vis = this;

        let selectorDiv = vis.mainContainer.append("div")
            .attr("class", "year-selector");

        selectorDiv.append("label")
            .text("Select Year:");

        let select = selectorDiv.append("select")
            .attr("id", "yearSelect");

        select.selectAll("option")
            .data(['2025', '2024', '2023'])
            .enter()
            .append("option")
            .text(d => d)
            .attr("value", d => d);

        select.on("change", function() {
            vis.selectedYear = this.value;
            vis.updateVis();
        });
    }

    addLegend() {
        let vis = this;

        vis.legendWidth = 250;
        vis.legendHeight = 20;

        vis.legend = vis.svg.append("g")
            .attr("class", "legend")
            .attr("transform", `translate(${vis.width / 2 - vis.legendWidth / 2}, ${vis.height - 60})`);
    }

    addInfoPanel() {
        let vis = this;

        vis.infoPanel = vis.mainContainer.append("div")
            .attr("class", "info-panel")
            .style("opacity", 0);

        vis.infoPanel.append("h4")
            .text("Top Countries");

        vis.infoPanelContent = vis.infoPanel.append("div")
            .attr("class", "info-content");
    }

    wrangleData() {
        let vis = this;

        vis.countryCodeToName = {
            'US': 'United States of America', 'ID': 'Indonesia', 'BR': 'Brazil', 'MX': 'Mexico',
            'PK': 'Pakistan', 'PH': 'Philippines', 'RU': 'Russia', 'BD': 'Bangladesh',
            'EG': 'Egypt', 'VN': 'Vietnam', 'TR': 'Turkey', 'NG': 'Nigeria',
            'IQ': 'Iraq', 'SA': 'Saudi Arabia', 'TH': 'Thailand', 'CO': 'Colombia',
            'JP': 'Japan', 'GB': 'United Kingdom', 'AR': 'Argentina', 'PE': 'Peru',
            'ZA': 'South Africa', 'DE': 'Germany', 'FR': 'France', 'DZ': 'Algeria',
            'IT': 'Italy', 'MM': 'Myanmar', 'ES': 'Spain', 'UA': 'Ukraine',
            'KZ': 'Kazakhstan', 'KE': 'Kenya', 'MA': 'Morocco', 'CL': 'Chile',
            'VE': 'Venezuela', 'EC': 'Ecuador', 'CA': 'Canada', 'PL': 'Poland',
            'AE': 'United Arab Emirates', 'KH': 'Cambodia', 'GT': 'Guatemala',
            'RO': 'Romania', 'TW': 'Taiwan', 'AU': 'Australia', 'BO': 'Bolivia',
            'DO': 'Dominican Republic', 'KR': 'South Korea', 'CD': 'Democratic Republic of the Congo',
            'AZ': 'Azerbaijan', 'BY': 'Belarus', 'LK': 'Sri Lanka', 'NL': 'Netherlands',
            'TN': 'Tunisia', 'LY': 'Libya', 'YE': 'Yemen', 'HN': 'Honduras',
            'IL': 'Israel', 'LB': 'Lebanon', 'KW': 'Kuwait', 'GR': 'Greece',
            'BE': 'Belgium', 'SD': 'Sudan', 'PT': 'Portugal', 'SV': 'El Salvador',
            'SG': 'Singapore', 'NI': 'Nicaragua', 'CR': 'Costa Rica', 'SE': 'Sweden',
            'HU': 'Hungary', 'AO': 'Angola', 'SO': 'Somalia', 'PA': 'Panama',
            'MZ': 'Mozambique', 'RS': 'Serbia', 'QA': 'Qatar', 'AT': 'Austria',
            'GE': 'Georgia', 'JO': 'Jordan', 'BG': 'Bulgaria', 'HT': 'Haiti',
            'IE': 'Ireland', 'CH': 'Switzerland', 'UY': 'Uruguay', 'CZ': 'Czech Republic',
            'GN': 'Guinea', 'NZ': 'New Zealand', 'OM': 'Oman', 'NO': 'Norway',
            'TD': 'Chad', 'MR': 'Mauritania', 'FI': 'Finland', 'JM': 'Jamaica',
            'AL': 'Albania', 'DK': 'Denmark', 'BH': 'Bahrain', 'MD': 'Moldova',
            'HR': 'Croatia', 'SK': 'Slovakia', 'BA': 'Bosnia and Herzegovina',
            'LT': 'Lithuania', 'TT': 'Trinidad and Tobago', 'LV': 'Latvia',
            'MK': 'Macedonia', 'PS': 'Palestine', 'SI': 'Slovenia', 'SS': 'South Sudan',
            'GW': 'Guinea-Bissau', 'EE': 'Estonia', 'MY': 'Malaysia'
        };

        vis.countryInfo = {};
        vis.world = topojson.feature(vis.geoData, vis.geoData.objects.countries).features;

        vis.world.forEach(d => {
            vis.countryInfo[d.properties.name] = {
                countryName: d.properties.name,
                users2025: 0,
                users2024: 0,
                users2023: 0,
                color: "#555"
            };
        });

        vis.tiktokData.forEach(row => {
            let countryName = vis.countryCodeToName[row.flagCode];
            if (countryName && vis.countryInfo[countryName]) {
                vis.countryInfo[countryName].users2025 = +row.TikTokUsers_2025 || 0;
                vis.countryInfo[countryName].users2024 = +row.TikTokUsers_2024 || 0;
                vis.countryInfo[countryName].users2023 = +row.TikTokUsers_2023 || 0;
                vis.countryInfo[countryName].displayName = row.country;
            }
        });

        let allUsers2025 = Object.values(vis.countryInfo).map(d => d.users2025).filter(d => d > 0);
        let maxUsers = Math.max(...allUsers2025);

        vis.colorScale = d3.scaleSequential()
            .domain([0, maxUsers])
            .interpolator(d3.interpolateRgb("#4a4a6a", "#ff6b6b"));

        vis.updateVis();
    }

    updateVis() {
        let vis = this;

        let yearKey = `users${vis.selectedYear}`;

        Object.keys(vis.countryInfo).forEach(countryName => {
            let users = vis.countryInfo[countryName][yearKey];
            vis.countryInfo[countryName].color = users > 0 ? vis.colorScale(users) : "#3a3a4a";
        });

        let countries = vis.countriesGroup
            .selectAll(".country")
            .data(vis.world);

        countries.enter()
            .append("path")
            .attr('class', 'country')
            .merge(countries)
            .attr("d", vis.path)
            .transition()
            .duration(500)
            .style("fill", d => vis.countryInfo[d.properties.name].color);

        vis.countriesGroup.selectAll(".country")
            .on('mouseover', function(event, d) {
                let countryData = vis.countryInfo[d.properties.name];
                let users = countryData[yearKey];

                if (users > 0) {
                    d3.select(this)
                        .attr('stroke-width', '2px')
                        .attr('stroke', '#fff4d6');

                    vis.tooltip
                        .style("opacity", 1)
                        .html(`
                            <strong>${countryData.displayName || d.properties.name}</strong>
                            <p><strong>${vis.selectedYear} Users:</strong> ${(users / 1000000).toFixed(2)}M</p>
                            ${countryData.users2024 > 0 ? `<p><strong>2024 Users:</strong> ${(countryData.users2024 / 1000000).toFixed(2)}M</p>` : ''}
                            ${countryData.users2023 > 0 ? `<p><strong>2023 Users:</strong> ${(countryData.users2023 / 1000000).toFixed(2)}M</p>` : ''}
                        `)
                        .style("left", `${event.pageX + 10}px`)
                        .style("top", `${event.pageY - 50}px`);
                }
            })
            .on('mouseout', function() {
                d3.select(this)
                    .attr('stroke-width', '0.5px')
                    .attr('stroke', 'rgba(255, 244, 214, 0.3)');

                vis.tooltip.style("opacity", 0);
            });

        countries.exit().remove();

        vis.updateLegend();
        vis.updateInfoPanel();
    }

    updateLegend() {
        let vis = this;

        vis.legend.selectAll("*").remove();

        vis.legend.append("text")
            .attr("class", "legend-title")
            .attr("x", vis.legendWidth / 2)
            .attr("y", -10)
            .attr("text-anchor", "middle")
            .text(`TikTok Users ${vis.selectedYear} (millions)`);

        let defs = vis.svg.select("defs");
        if (defs.empty()) {
            defs = vis.svg.append("defs");
        }

        let gradient = defs.select("#legend-gradient");
        if (gradient.empty()) {
            gradient = defs.append("linearGradient")
                .attr("id", "legend-gradient")
                .attr("x1", "0%")
                .attr("x2", "100%")
                .attr("y1", "0%")
                .attr("y2", "0%");
        }

        gradient.selectAll("stop").remove();

        gradient.selectAll("stop")
            .data([
                {offset: "0%", color: "#4a4a6a"},
                {offset: "100%", color: "#ff6b6b"}
            ])
            .enter()
            .append("stop")
            .attr("offset", d => d.offset)
            .attr("stop-color", d => d.color);

        vis.legend.append("rect")
            .attr("width", vis.legendWidth)
            .attr("height", vis.legendHeight)
            .style("fill", "url(#legend-gradient)");

        let yearKey = `users${vis.selectedYear}`;
        let allUsers = Object.values(vis.countryInfo).map(d => d[yearKey]).filter(d => d > 0);
        let maxUsers = Math.max(...allUsers);

        let legendScale = d3.scaleLinear()
            .domain([0, maxUsers])
            .range([0, vis.legendWidth]);

        let legendAxis = d3.axisBottom(legendScale)
            .ticks(5)
            .tickFormat(d => `${(d / 1000000).toFixed(0)}M`);

        vis.legend.append("g")
            .attr("transform", `translate(0, ${vis.legendHeight})`)
            .call(legendAxis)
            .selectAll("text")
            .style("fill", "#fff4d6")
            .style("font-size", "11px");

        vis.legend.selectAll(".domain, .tick line")
            .style("stroke", "#fff4d6");
    }

    updateInfoPanel() {
        let vis = this;

        let yearKey = `users${vis.selectedYear}`;

        let topCountries = Object.values(vis.countryInfo)
            .filter(d => d[yearKey] > 0)
            .sort((a, b) => b[yearKey] - a[yearKey])
            .slice(0, 5);

        vis.infoPanelContent.selectAll("*").remove();

        topCountries.forEach((country, i) => {
            vis.infoPanelContent.append("p")
                .html(`<strong>${i + 1}. ${country.displayName || country.countryName}</strong><br>
                       <span class="stat-number">${(country[yearKey] / 1000000).toFixed(1)}M</span> users`);
        });

        vis.infoPanel.transition().duration(500).style("opacity", 1);
    }

    enableRotation() {
        let vis = this;

        let m0, o0;

        vis.svg.call(
            d3.drag()
                .on("start", function(event) {
                    let lastRotationParams = vis.projection.rotate();
                    m0 = [event.x, event.y];
                    o0 = [-lastRotationParams[0], -lastRotationParams[1]];
                })
                .on("drag", function(event) {
                    if (m0) {
                        let m1 = [event.x, event.y];
                        let o1 = [o0[0] + (m0[0] - m1[0]) / 4, o0[1] + (m1[1] - m0[1]) / 4];
                        vis.projection.rotate([-o1[0], -o1[1]]);
                    }

                    vis.path = d3.geoPath().projection(vis.projection);
                    vis.svg.selectAll(".country").attr("d", vis.path);
                    vis.svg.selectAll(".graticule").attr("d", vis.path);
                    vis.sphere.attr("d", vis.path);
                })
        );
    }

    handleResize() {
        let vis = this;

        vis.width = document.getElementById(vis.parentElement).getBoundingClientRect().width - vis.margin.left - vis.margin.right;
        vis.height = document.getElementById(vis.parentElement).getBoundingClientRect().height - vis.margin.top - vis.margin.bottom;

        let zoomFactor = Math.min(vis.width, vis.height) / 800;
        let defaultScale = 300;

        vis.projection
            .translate([vis.width / 2, vis.height / 2])
            .scale(defaultScale * zoomFactor);

        vis.svg
            .attr("width", vis.width)
            .attr("height", vis.height);

        vis.path.projection(vis.projection);
        vis.svg.selectAll(".country").attr("d", vis.path);
        vis.svg.selectAll(".graticule").attr("d", vis.path);

        vis.legend.attr("transform", `translate(${vis.width / 2 - vis.legendWidth / 2}, ${vis.height - 60})`);
    }
}