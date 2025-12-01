// Landing Page Transition
(function() {
    'use strict';
    
    const landingPage = document.getElementById('landingPage');
    const enterButton = document.getElementById('enterButton');
    const mainContent = document.getElementById('mainContent');
    
    // Debug: Check if elements exist
    console.log('Landing page:', landingPage);
    console.log('Enter button:', enterButton);
    console.log('Main content:', mainContent);
    
    if (enterButton && landingPage && mainContent) {
        enterButton.addEventListener('click', function() {
            console.log('Enter button clicked');
            // Slide up the landing page
            landingPage.classList.add('slide-up');
            
            // Show main content
            setTimeout(() => {
                mainContent.classList.remove('main-hidden');
                mainContent.classList.add('main-visible');
                console.log('Main content should be visible now');
                
                // Remove landing page from DOM after transition
                setTimeout(() => {
                    landingPage.style.display = 'none';
                }, 800);
            }, 300);
        });
    } else {
        console.error('Missing elements:', {
            landingPage: !!landingPage,
            enterButton: !!enterButton,
            mainContent: !!mainContent
        });
    }
})();

