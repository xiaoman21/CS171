// Show timeline only after landing page
(function() {
    'use strict';
    
    function setupTimelineVisibility() {
        const timeline = document.getElementById('narrativeTimeline');
        const mainContent = document.getElementById('mainContent');
        
        if (!timeline || !mainContent) return;
        
        // Watch for when main content becomes visible
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const mainContentVisible = mainContent.classList.contains('main-visible');
                    if (mainContentVisible) {
                        timeline.classList.add('visible');
                    }
                }
            });
        });
        
        observer.observe(mainContent, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupTimelineVisibility);
    } else {
        setupTimelineVisibility();
    }
})();

