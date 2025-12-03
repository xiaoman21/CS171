(function() {
    'use strict';

    // Create nav tool
    const navTool = document.createElement('div');
    navTool.className = 'nav-tool-container';
    navTool.innerHTML = `
        <button class="nav-tool-button nav-tool-extra" id="resetZoomBtn" title="Reset Zoom">
            <span>🔍</span>
        </button>
        <button class="nav-tool-button nav-tool-extra" id="backToTopBtn" title="Back to Top">
            <span>↑</span>
        </button>
        <button class="nav-tool-button" id="navToolToggle" title="Navigation Tools">
            <span>⚙️</span>
        </button>
    `;
    document.body.appendChild(navTool);

    // Reset zoom
    document.getElementById('resetZoomBtn').addEventListener('click', function() {
        document.body.style.zoom = '100%';
        document.documentElement.style.zoom = '100%';
    });

    // Back to top
    document.getElementById('backToTopBtn').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

