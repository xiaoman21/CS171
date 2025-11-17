// main.js
(function(){
  // Ensure main gets focus for keyboard page up/down (optional)
  const main = document.querySelector('main');
  if (main) {
    main.setAttribute('tabindex', '-1');
    main.focus({ preventScroll: true });
  }

  // On load, mark first slide's text as revealed (in case IO threshold not hit yet)
  requestAnimationFrame(()=>{
    const firstTitle = document.querySelector('.slide-section .slide-title');
    if (firstTitle){
      firstTitle.classList.add('reveal','is-visible');
    }
  });

  // Data loading and visualization initialization
  let tiktokGlobeVis;

  // Load all data files
  Promise.all([
      d3.csv('tiktok-users-by-country-2025.csv'),
      d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'),
      d3.csv('top2024_annual_summary.csv')
  ]).then(data => {
      let tiktokData = data[0];
      let geoData = data[1];
      let youtubeData = data[2];

      // Initialize TikTok Globe (Section 2)
      if (document.getElementById('tiktokGlobe')) {
          tiktokGlobeVis = new TikTokGlobeVis('tiktokGlobe', tiktokData, geoData);
      }

      // Initialize YouTube Chart (Section 5)
      if (typeof initYouTubeVis === 'function' && document.getElementById('chart-area')) {
          initYouTubeVis(youtubeData);
      }

      // YouTube Top 5 Visualization initializes itself when script loads
      // No need to call it here as it handles its own DOM ready state

  }).catch(error => {
      console.error('Error loading data:', error);
      
      // Show error messages in visualization containers
      const containers = [
          { id: 'tiktokGlobe', msg: 'Error loading TikTok data.' },
          { id: 'chart-area', msg: 'Error loading YouTube channel data.' },
          { id: 'youtubeTop5', msg: 'Error loading YouTube Top 5 data.' }
      ];
      
      containers.forEach(({ id, msg }) => {
          const el = document.getElementById(id);
          if (el) {
              el.innerHTML = `<div style="color: var(--muted); padding: 2rem; text-align: center;">${msg} Please check the console.</div>`;
          }
      });
  });
})();
