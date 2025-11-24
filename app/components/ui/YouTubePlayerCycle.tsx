'use client';

import { useState, useEffect } from 'react';
import YouTubePlayer from './YouTubePlayer';

interface Video {
  videoId: string;
  title: string;
}

interface YouTubePlayerCycleProps {
  videos: Video[];
  autoCycle?: boolean;
  cycleInterval?: number; // milliseconds
}

export default function YouTubePlayerCycle({ 
  videos, 
  autoCycle = false,
  cycleInterval = 10000 
}: YouTubePlayerCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle functionality
  useEffect(() => {
    if (autoCycle && videos.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }, cycleInterval);

      return () => clearInterval(interval);
    }
  }, [autoCycle, cycleInterval, videos.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  if (videos.length === 0) {
    return null;
  }

  const currentVideo = videos[currentIndex];

  return (
    <div className="w-full">
      {/* Main Video Player */}
      <YouTubePlayer 
        videoId={currentVideo.videoId} 
        title={currentVideo.title}
      />

      {/* Navigation Controls */}
      {videos.length > 1 && (
        <div className="mt-6 flex flex-col items-center gap-4">
          {/* Video Selector Dots */}
          <div className="flex justify-center gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={goToPrevious}
              className="min-w-[120px] px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
              aria-label="Previous video"
            >
              ← Previous
            </button>
            <span className="px-4 py-2 text-gray-600 font-medium">
              {currentIndex + 1} / {videos.length}
            </span>
            <button
              onClick={goToNext}
              className="min-w-[120px] px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
              aria-label="Next video"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

