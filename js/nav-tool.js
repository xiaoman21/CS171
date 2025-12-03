(function() {
    'use strict';

    // Wait for DOM to be ready
    function initNavTool() {
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

        // Reset zoom - use transform scale instead of zoom property
        document.getElementById('resetZoomBtn').addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            // Reset browser zoom
            document.body.style.zoom = '1';
            document.body.style.transform = 'scale(1)';
            document.documentElement.style.zoom = '1';
            // Also try to reset via meta viewport
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
            }
            console.log('Zoom reset to 100%');
        });

        // Back to top - scroll main content area
        document.getElementById('backToTopBtn').addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const mainContent = document.getElementById('mainContent') || document.querySelector('main');
            if (mainContent) {
                mainContent.scrollTo({ top: 0, behavior: 'smooth' });
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log('Scrolling to top');
        });

        console.log('Nav tool initialized');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavTool);
    } else {
        initNavTool();
    }
})();

