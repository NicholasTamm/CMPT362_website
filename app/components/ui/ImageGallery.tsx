'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    title?: string;
  }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Image Display */}
      <div className="relative mb-6">
        <div className="relative aspect-[9/16] max-h-[500px] mx-auto bg-[var(--component-background)] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <Image
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            fill
            className="object-contain"
            priority={selectedImage === 0}
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--component-background)]/90 hover:opacity-80 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 border border-gray-700"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--component-background)]/90 hover:opacity-80 text-white rounded-full p-3 shadow-lg transition-all hover:scale-110 border border-gray-700"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Title */}
        {images[selectedImage].title && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1.5 rounded-full text-xs md:text-sm">
            {images[selectedImage].title}
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex justify-center gap-3 overflow-x-auto py-4 px-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-20 h-32 shrink-0 rounded-lg transition-all ${
                index === selectedImage
                  ? 'ring-4 ring-red-600 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="text-center mt-3 text-sm text-gray-300">
          {selectedImage + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
