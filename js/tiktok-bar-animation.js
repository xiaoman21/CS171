(function() {
    'use strict';

    function animateTikTokBars() {
        const slide8_6 = document.getElementById('slide8-6');
        if (!slide8_6) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate bars when slide becomes visible
                    setTimeout(() => {
                        const bars = slide8_6.querySelectorAll('.bar-fill');
                        bars.forEach(bar => {
                            const targetWidth = bar.getAttribute('data-width');
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

