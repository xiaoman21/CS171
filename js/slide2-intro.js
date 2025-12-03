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
                    
                    // Hide year selector during intro
                    const yearSelector = document.querySelector('.year-selector');
                    if (yearSelector) {
                        yearSelector.style.opacity = '0';
                        yearSelector.style.pointerEvents = 'none';
                    }
                    
                    // Fade out the intro after 5 seconds (longer for slower animations)
                    setTimeout(() => {
                        introOverlay.classList.add('fade-out');
                        
                        // Show year selector after intro fades
                        setTimeout(() => {
                            if (yearSelector) {
                                yearSelector.style.transition = 'opacity 0.5s ease-in';
                                yearSelector.style.opacity = '1';
                                yearSelector.style.pointerEvents = 'auto';
                            }
                        }, 500);
                        
                        // Remove from DOM after fade completes
                        setTimeout(() => {
                            introOverlay.style.display = 'none';
                        }, 1000);
                    }, 5500);
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

