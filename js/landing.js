// Landing Page Transition
(function() {
    'use strict';
    
    const landingPage = document.getElementById('landingPage');
    const scrollDownArrow = document.getElementById('scrollDownArrow');
    const mainContent = document.getElementById('mainContent');
    const animatedTitle = document.getElementById('animatedTitle');
    
    // Font families to cycle through
    const fonts = [
        '"Georgia", serif',
        '"Arial", sans-serif',
        '"Times New Roman", serif',
        '"Courier New", monospace',
        '"Verdana", sans-serif',
        '"Palatino", serif',
        '"Trebuchet MS", sans-serif',
        '"Impact", sans-serif'
    ];
    
    // Font weights to cycle through (mixing bold and normal)
    const fontWeights = [400, 500, 600, 700, 800, 900]; // Range from normal to extra bold
    
    // Initialize title animation
    function initTitleAnimation() {
        if (!animatedTitle) return;
        
        const titleText = animatedTitle.textContent.trim();
        // Split by spaces but keep punctuation with words
        const words = titleText.split(/\s+/);
        
        // Wrap each word in a span with consistent spacing
        // Use a non-breaking space character to ensure consistent spacing
        animatedTitle.innerHTML = words.map((word, index) => {
            return `<span class="title-word" data-word-index="${index}">${word}</span>`;
        }).join('\u00A0'); // Use non-breaking space for consistent spacing
        
        const wordSpans = animatedTitle.querySelectorAll('.title-word');
        
        // Start with faster initial speed, change speed every 1.5 seconds
        let animationStartTime = Date.now();
        const initialInterval = 600; // Start at 600ms (faster than before)
        const speedChangeInterval = 1500; // Change speed every 1.5 seconds
        const minInterval = 200; // Minimum interval (much slower final speed)
        const speedReduction = 0.15; // Reduce interval by 15% each step (gets faster)
        let animationFrameId = null;
        
        function getCurrentSpeed(elapsed) {
            // Calculate which speed step we're on (every 1.5 seconds)
            const step = Math.floor(elapsed / speedChangeInterval);
            
            // Calculate interval for current step
            // Each step reduces the interval by speedReduction (15%)
            let currentInterval = initialInterval;
            for (let i = 0; i < step; i++) {
                currentInterval = currentInterval * (1 - speedReduction);
            }
            
            // Ensure we don't go below minimum
            return Math.max(minInterval, currentInterval);
        }
        
        function animateWords() {
            const elapsed = Date.now() - animationStartTime;
            
            // Get current speed based on elapsed time (changes every 1.5 seconds)
            const timeBasedInterval = getCurrentSpeed(elapsed);
            
            // Cycle through each word with different fonts and weights
            wordSpans.forEach((span, index) => {
                // Stagger the animation slightly for each word
                setTimeout(() => {
                    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                    const randomWeight = fontWeights[Math.floor(Math.random() * fontWeights.length)];
                    
                    span.style.fontFamily = randomFont;
                    span.style.fontWeight = randomWeight;
                    
                    // Add a subtle scale animation for visual interest
                    span.style.transform = 'scale(1.05)';
                    span.style.transition = 'transform 0.15s ease, font-family 0.1s ease, font-weight 0.1s ease';
                    
                    setTimeout(() => {
                        span.style.transform = 'scale(1)';
                    }, 150);
                }, index * 30); // Small stagger between words
            });
            
            // Schedule next animation with accelerating interval
            animationFrameId = setTimeout(animateWords, timeBasedInterval);
        }
        
        // Start the animation
        animateWords();
        
        // Store cleanup function (in case we need to stop it)
        window.stopTitleAnimation = function() {
            if (animationFrameId) {
                clearTimeout(animationFrameId);
                animationFrameId = null;
            }
        };
    }
    
    // Function to transition from landing page to main content
    function transitionToMainContent() {
        if (!landingPage || !mainContent) return;
        
        // Slide up the landing page
        landingPage.classList.add('slide-up');
        
        // Show main content
        setTimeout(() => {
            mainContent.classList.remove('main-hidden');
            mainContent.classList.add('main-visible');
            
            // Remove landing page from DOM after transition
            setTimeout(() => {
                landingPage.style.display = 'none';
            }, 800);
        }, 300);
    }
    
    // Debug: Check if elements exist
    console.log('Landing page:', landingPage);
    console.log('Scroll down arrow:', scrollDownArrow);
    console.log('Main content:', mainContent);
    
    // Initialize title animation when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTitleAnimation);
    } else {
        initTitleAnimation();
    }
    
    // Handle scroll down arrow click
    if (scrollDownArrow && landingPage && mainContent) {
        scrollDownArrow.addEventListener('click', function() {
            console.log('Scroll down arrow clicked');
            transitionToMainContent();
        });
    }
    
    // Allow scrolling (wheel or touch) to trigger transition
    let isScrolling = false;
    
    function handleScroll(event) {
        if (landingPage && !landingPage.classList.contains('slide-up') && !isScrolling) {
            // Detect downward scroll
            if (event.deltaY > 0 || event.type === 'touchmove') {
                isScrolling = true;
                transitionToMainContent();
            }
        }
    }
    
    // Add wheel event listener for mouse scroll
    window.addEventListener('wheel', handleScroll, { passive: true });
    
    // Add touch events for mobile
    let touchStartY = 0;
    window.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    window.addEventListener('touchmove', function(e) {
        if (landingPage && !landingPage.classList.contains('slide-up') && !isScrolling) {
            const touchEndY = e.touches[0].clientY;
            // If scrolling down (swiping up)
            if (touchStartY > touchEndY + 30) {
                isScrolling = true;
                transitionToMainContent();
            }
        }
    }, { passive: true });
})();

