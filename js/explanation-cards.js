// =====================================================
// Explanation Cards Pop-up System
// =====================================================

(function() {
  if (window.explanationCardsLoaded) return;
  window.explanationCardsLoaded = true;

  const cardContent = {
    avatar: {
      title: "What does the avatar mean?",
      text: "Each avatar represents a creator. It appears at the month where the creator stands out—either reaching a peak or hitting a major shift in momentum."
    },
    promo: {
      title: "What does the promo marker mean?",
      text: "The racket icon marks months where creators used Shorts as promotional clips—similar to trailers. These often lead to spikes the following month."
    },
    spike: {
      title: "Why do spikes happen after promos?",
      text: "Short-form grabs attention fast. Long-form holds attention longer. When creators release both within the same period, viewership jumps sharply."
    }
  };

  function initExplanationCards() {
    const overlay = d3.select("#explanation-overlay");
    const card = overlay.select(".explanation-card");
    const content = card.select(".explanation-content");
    const closeBtn = card.select(".explanation-close");

    // Setup hint buttons
    d3.selectAll(".story-hint-btn").on("click", function() {
      const hintType = d3.select(this).attr("data-hint");
      showCard(hintType);
    });

    // Close button
    closeBtn.on("click", hideCard);

    // Close on overlay click
    overlay.on("click", function(evt) {
      if (evt.target === overlay.node()) {
        hideCard();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", function(evt) {
      if (evt.key === "Escape" && overlay.style("display") === "flex") {
        hideCard();
      }
    });

    function showCard(hintType) {
      const cardData = cardContent[hintType];
      if (!cardData) return;

      content.html(`
        <h3>${cardData.title}</h3>
        <p>${cardData.text}</p>
      `);

      overlay
        .style("display", "flex")
        .style("opacity", 0)
        .transition()
        .duration(300)
        .style("opacity", 1);

      card
        .style("transform", "scale(0.9)")
        .transition()
        .duration(300)
        .style("transform", "scale(1)");
    }

    function hideCard() {
      overlay
        .transition()
        .duration(300)
        .style("opacity", 0)
        .on("end", function() {
          overlay.style("display", "none");
        });

      card.style("transform", "scale(0.9)");
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExplanationCards);
  } else {
    initExplanationCards();
  }
})();

