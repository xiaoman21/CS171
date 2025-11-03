// =====================================================
// DATA LOADING AND INITIALIZATION
// =====================================================

let tiktokGlobeVis;

Promise.all([
    d3.csv('tiktok-users-by-country-2025.csv'),
    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'),
    d3.csv('top2024_annual_summary.csv')
]).then(data => {
    let tiktokData = data[0];
    let geoData = data[1];
    let youtubeData = data[2];

    // Initialize TikTok Globe
    tiktokGlobeVis = new TikTokGlobeVis('tiktokGlobe', tiktokData, geoData);

    // Initialize YouTube Chart
    initYouTubeVis(youtubeData);

}).catch(error => {
    console.error('Error loading data:', error);
    d3.select("#tiktokGlobe").append("div")
        .attr("class", "loading")
        .html("Error loading data. Please check the console.");
});