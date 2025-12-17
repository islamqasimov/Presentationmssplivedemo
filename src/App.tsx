import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide1MarketContext } from './components/slides/Slide1MarketContext';
import { Slide2PresalesProblem } from './components/slides/Slide2PresalesProblem';
import { Slide3Consequences } from './components/slides/Slide3Consequences';
import { Slide4KeyInsight } from './components/slides/Slide4KeyInsight';
import { Slide5Solution } from './components/slides/Slide5Solution';
import { Slide6WhyWorks } from './components/slides/Slide6WhyWorks';
import { Slide7AlreadyStarted } from './components/slides/Slide7AlreadyStarted';
import { Slide8BusinessImpact } from './components/slides/Slide8BusinessImpact';
import { Slide9ControlBoundaries } from './components/slides/Slide9ControlBoundaries';
import { Slide10Summary } from './components/slides/Slide10Summary';

const slides = [
  Slide1MarketContext,
  Slide2PresalesProblem,
  Slide3Consequences,
  Slide4KeyInsight,
  Slide5Solution,
  Slide6WhyWorks,
  Slide7AlreadyStarted,
  Slide8BusinessImpact,
  Slide9ControlBoundaries,
  Slide10Summary,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Attach keyboard listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-4">
      {/* Presentation Container - 16:9 Aspect Ratio */}
      <div className="w-full max-w-[1920px] aspect-video bg-white relative overflow-hidden shadow-2xl">
        {/* Slide Content */}
        <div className="w-full h-full">
          <CurrentSlideComponent />
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 rounded-full bg-white/90 hover:bg-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#6B46C1]" />
          </button>
          
          <div className="text-sm text-[#6B46C1] bg-white/90 px-4 py-2 rounded-full shadow-lg">
            {currentSlide + 1} / {slides.length}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-full bg-white/90 hover:bg-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#6B46C1]" />
          </button>
        </div>

        {/* Slide Number Indicator - Bottom Right */}
        <div className="absolute bottom-4 left-8 text-[#9333EA]/50 text-xs">
          Slide {currentSlide + 1}
        </div>
      </div>
    </div>
  );
}