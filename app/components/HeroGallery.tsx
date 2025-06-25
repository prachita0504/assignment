"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
];

const HeroGallery: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-8">
      <h2 className="text-center text-2xl font-semibold text-blue-900 mb-4 border-b w-fit mx-auto pb-2">
        Galerie de photos
      </h2>

      <div className="relative max-w-5xl mx-auto flex items-center justify-center overflow-hidden">
        {/* Left blurred image */}
        <div className="w-1/4 relative h-[400px] blur-sm opacity-60 hidden sm:block">
          <Image
            src={images[(current - 1 + images.length) % images.length]}
            alt="Previous"
            fill
            className="object-contain"
          />
        </div>

        {/* Center main image */}
        <div className="relative w-full sm:w-2/4 h-[400px] z-10 mx-4">
          <Image
            src={images[current]}
            alt="Current"
            fill
            className="object-contain rounded-md"
            priority
          />
          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <FaChevronLeft />
          </button>
          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Right blurred image */}
        <div className="w-1/4 relative h-[400px] blur-sm opacity-60 hidden sm:block">
          <Image
            src={images[(current + 1) % images.length]}
            alt="Next"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-6 overflow-x-auto max-w-5xl mx-auto px-2 scrollbar-hide">
        {images.map((img, index) => (
          <div
            key={index}
            className={`cursor-pointer min-w-[80px] border-2 ${
              index === current ? "border-blue-600" : "border-transparent"
            }`}
            onClick={() => setCurrent(index)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              width={80}
              height={80}
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroGallery;
