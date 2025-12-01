// Reset View Button for Pew Research Visualization
(function() {
    'use strict';
    
    const resetButton = document.getElementById('resetPewView');
    const pewFrame = document.getElementById('pewResearchFrame');
    
    if (resetButton && pewFrame) {
        resetButton.addEventListener('click', function() {
            // Reload the iframe to reset the view
            const currentSrc = pewFrame.src;
            pewFrame.src = '';
            
            // Small delay to ensure iframe is cleared
            setTimeout(() => {
                pewFrame.src = currentSrc;
            }, 100);
        });
    }
})();

