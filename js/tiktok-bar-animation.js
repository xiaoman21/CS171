(function() {
    'use strict';

    console.log('TikTok bar animation script loaded');

    let animationTriggered = false;

    function animateTikTokBars() {
        console.log('Initializing TikTok bar animation');
        const slide8_6 = document.getElementById('slide8-6');
        
        if (!slide8_6) {
            console.error('Slide 8-6 not found');
            // Try again after a delay
            setTimeout(animateTikTokBars, 1000);
            return;
        }

        console.log('Slide 8-6 found');
        const bars = slide8_6.querySelectorAll('.bar-fill');
        console.log('Found bars:', bars.length, bars);

        if (bars.length === 0) {
            console.error('No bars found');
            return;
        }

        // Ensure all bars start at width 0
        bars.forEach((bar, index) => {
            const targetWidth = bar.getAttribute('data-width');
            console.log(`Bar ${index} initialized at 0%, will animate to ${targetWidth}%`);
            bar.style.width = '0%';
        });

        // Animate when slide becomes visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animationTriggered) {
                    animationTriggered = true;
                    console.log('Slide 8-6 is visible, animating bars');
                    setTimeout(() => {
                        bars.forEach((bar, index) => {
                            const targetWidth = bar.getAttribute('data-width');
                            console.log(`Animating bar ${index} to ${targetWidth}%`);
                            bar.style.width = targetWidth + '%';
                        });
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });

        observer.observe(slide8_6);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', animateTikTokBars);
    } else {
        animateTikTokBars();
    }

    console.log('TikTok bar animation script setup complete');
})();

