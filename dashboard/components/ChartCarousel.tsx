import React, { useState } from 'react';

interface ChartCarouselProps {
  children: React.ReactNode[];
}

export const ChartCarousel: React.FC<ChartCarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  if (!children || children.length === 0) {
    return <div>No charts available</div>;
  }

  return (
    <div className="chart-carousel-container">
      {/* Chart Display Area */}
      <div className="chart-carousel-slide">
        {children[currentIndex]}
      </div>

      {/* Navigation Controls */}
      <div className="carousel-controls">
        <button 
          className="carousel-button carousel-prev" 
          onClick={goToPrevious}
          aria-label="Previous chart"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {children.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to chart ${index + 1}`}
            />
          ))}
        </div>

        <button 
          className="carousel-button carousel-next" 
          onClick={goToNext}
          aria-label="Next chart"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Chart Counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {children.length}
      </div>
    </div>
  );
};

