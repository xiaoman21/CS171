(function() {
    'use strict';

    function animateTikTokBars() {
        const slide8_6 = document.getElementById('slide8-6');
        if (!slide8_6) {
            console.error('Slide 8-6 not found');
            return;
        }

        const bars = slide8_6.querySelectorAll('.bar-fill');
        console.log('Found bars:', bars.length);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Slide 8-6 is visible, animating bars');
                    // Animate bars when slide becomes visible
                    setTimeout(() => {
                        bars.forEach((bar, index) => {
                            const targetWidth = bar.getAttribute('data-width');
                            console.log(`Animating bar ${index} to ${targetWidth}%`);
                            bar.style.width = targetWidth + '%';
                        });
                    }, 500); // Small delay after slide enters
                    
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
})();

