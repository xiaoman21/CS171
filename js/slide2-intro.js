// Slide 2 Intro Animation with Typing Effect
(function() {
    'use strict';
    
    let introShown = false;
    
    function typeText(element, text, speed, callback) {
        let index = 0;
        element.textContent = '';
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                if (callback) callback();
            }
        }
        
        type();
    }
    
    function setupSlide2Intro() {
        const slide2 = document.getElementById('slide2');
        const introOverlay = document.getElementById('slide2IntroOverlay');
        const titleElement = introOverlay?.querySelector('.slide2-intro-title');
        const textElement = introOverlay?.querySelector('.slide2-intro-text');
        
        if (!slide2 || !introOverlay || !titleElement || !textElement) return;
        
        const titleText = titleElement.textContent;
        const bodyText = textElement.textContent;
        
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
                    
                    // Start typing animation
                    typeText(titleElement, titleText, 80, () => {
                        // Title done, wait a moment then type text
                        setTimeout(() => {
                            typeText(textElement, bodyText, 30, () => {
                                // Both done, hold for 2 seconds then fade out
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
                                }, 2000); // Hold for 2 seconds after typing completes
                            });
                        }, 300);
                    });
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

