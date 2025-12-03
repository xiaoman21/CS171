// Slide 2 Intro Animation
(function() {
    'use strict';
    
    let introShown = false;
    
    function setupSlide2Intro() {
        const slide2 = document.getElementById('slide2');
        const introOverlay = document.getElementById('slide2IntroOverlay');
        
        if (!slide2 || !introOverlay) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !introShown) {
                    introShown = true;
                    
                    // Fade out the intro after 4 seconds
                    setTimeout(() => {
                        introOverlay.classList.add('fade-out');
                        
                        // Remove from DOM after fade completes
                        setTimeout(() => {
                            introOverlay.style.display = 'none';
                        }, 1000);
                    }, 4000);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(slide2);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupSlide2Intro);
    } else {
        setupSlide2Intro();
    }
})();

