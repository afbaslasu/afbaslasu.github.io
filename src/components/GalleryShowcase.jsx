// src/components/GalleryShowcase.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://source.unsplash.com/random/1200x500?nature1",
  "https://source.unsplash.com/random/1200x500?nature2",
  "https://source.unsplash.com/random/1200x500?nature3",
  "https://source.unsplash.com/random/1200x500?nature4",
  "https://source.unsplash.com/random/1200x500?nature5",
  "https://source.unsplash.com/random/1200x500?nature6",
  "https://source.unsplash.com/random/1200x500?nature7",
  "https://source.unsplash.com/random/1200x500?nature8",
];

export default function GalleryShowcase() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const pauseRef = useRef(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!pauseRef.current) {
        setIndex((prev) => (prev + 1) % images.length);
      }
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg group"
      onMouseEnter={() => (pauseRef.current = true)}
      onMouseLeave={() => (pauseRef.current = false)}
    >
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Gallery ${index + 1}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay for hover effect */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg"
        aria-label="Previous"
      >
        <FaChevronLeft className="text-xl text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg"
        aria-label="Next"
      >
        <FaChevronRight className="text-xl text-gray-800" />
      </button>
    </div>
  );
}
