(function() {
    'use strict';

    console.log('Youth voter bar animation script loaded');

    let animationTriggered = false;

    function animateYouthVoterBars() {
        console.log('Initializing youth voter bar animation');
        const slide8_4 = document.getElementById('slide8-4');
        
        if (!slide8_4) {
            console.error('Slide 8-4 not found');
            // Try again after a delay
            setTimeout(animateYouthVoterBars, 1000);
            return;
        }

        console.log('Slide 8-4 found');
        const bars = slide8_4.querySelectorAll('.horizontal-bar-fill');
        console.log('Found horizontal bars:', bars.length, bars);

        if (bars.length === 0) {
            console.error('No horizontal bars found');
            return;
        }

        // Ensure all bars start at width 0
        bars.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('data-width');
            console.log(`Horizontal bar ${index} initialized at 0%, will animate to ${targetWidth}%`);
            bar.style.width = '0%';
        });

        // Animate when slide becomes visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animationTriggered) {
                    animationTriggered = true;
                    console.log('Slide 8-4 is visible, animating horizontal bars');
                    setTimeout(() => {
                        bars.forEach((bar, index) => {
                            const targetWidth = bar.getAttribute('data-width');
                            console.log(`Animating horizontal bar ${index} to ${targetWidth}%`);
                            bar.style.width = targetWidth + '%';
                        });
                    }, 500);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });

        observer.observe(slide8_4);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', animateYouthVoterBars);
    } else {
        animateYouthVoterBars();
    }

    console.log('Youth voter bar animation script setup complete');
})();

