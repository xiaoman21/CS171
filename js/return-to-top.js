(function() {
    'use strict';

    function initReturnToTop() {
        const returnBtn = document.getElementById('returnToTopBtn');
        if (!returnBtn) return;

        returnBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll to the landing page
            const landingPage = document.getElementById('landingPage');
            const mainContent = document.getElementById('mainContent');
            
            if (landingPage && mainContent) {
                // First, scroll main content to top
                mainContent.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Then ensure window is at top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Show landing page if it was hidden
                if (mainContent.classList.contains('main-visible')) {
                    mainContent.classList.remove('main-visible');
                }
            } else {
                // Fallback to simple scroll
                window.scrollTo({ top: 0, behavior: 'smooth' });
                const main = document.querySelector('main');
                if (main) {
                    main.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
            
            console.log('Returning to landing page');
        });

        console.log('Return to top button initialized');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initReturnToTop);
    } else {
        initReturnToTop();
    }
})();

