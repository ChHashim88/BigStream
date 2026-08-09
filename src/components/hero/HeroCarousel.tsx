"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Plus, Check, Info, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Movie } from "@/data/movies";

interface HeroCarouselProps {
  movies: Movie[];
  onPlayTrailer: (movie: Movie) => void;
}

export default function HeroCarousel({ movies, onPlayTrailer }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inMyList, setInMyList] = useState<Record<string, boolean>>({});

  const featuredMovies = movies.filter((m) => m.featured).slice(0, 6);
  const currentMovie = featuredMovies[currentIndex] || featuredMovies[0];

  // Auto slide interval
  useEffect(() => {
    if (featuredMovies.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [featuredMovies.length]);

  const toggleMyList = (id: string) => {
    setInMyList((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);
  };

  if (!currentMovie) return null;

  return (
    <div className="relative w-full h-[88vh] min-h-[600px] max-h-[920px] bg-[#08090B] overflow-hidden select-none">
      {/* Background Image Carousel with Fade Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMovie.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={currentMovie.backdrop}
            alt={currentMovie.title}
            className="w-full h-full object-cover object-top filter brightness-[0.8] contrast-[1.05]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Layer Gradients */}
      {/* Bottom to Top Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/60 to-transparent" />
      {/* Left to Right Dark Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/90 via-[#08090B]/50 to-transparent w-full md:w-3/4" />
      {/* Vignette Overlay */}
      <div className="absolute inset-0 cinematic-vignette pointer-events-none" />
      {/* Crimson Ambient Glow accent at bottom left */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#E50914]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Positioning */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-20">
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          {/* Label Pill */}
          {/* <motion.div
            key={`label-${currentMovie.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-white uppercase font-bold">
              {currentMovie.isOriginal ? "BIG STREAM ORIGINAL" : "PREMIUM SELECTION"}
            </span>
          </motion.div> */}

          {/* Title */}
          <motion.h1
            key={`title-${currentMovie.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.08] font-sans drop-shadow-2xl"
          >
            {currentMovie.title}
          </motion.h1>

          {/* Metadata Row */}
          <motion.div
            key={`meta-${currentMovie.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center flex-wrap gap-3 text-xs sm:text-sm text-[#92959D] font-medium"
          >
            <span className="text-emerald-400 font-bold font-mono">
              ★ {currentMovie.score} Score
            </span>
            <span>·</span>
            <span>{currentMovie.year}</span>
            <span>·</span>
            <span className="px-2 py-0.5 rounded border border-white/20 text-white text-xs">
              {currentMovie.rating}
            </span>
            <span>·</span>
            <span>{currentMovie.duration}</span>
            <span>·</span>
            <span className="text-white font-medium">
              {currentMovie.genres.join(" / ")}
            </span>
          </motion.div>

          {/* Description (Hidden on mobile <640px) */}
          <motion.p
            key={`desc-${currentMovie.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden sm:block text-sm sm:text-base text-[#92959D] font-light line-clamp-3 leading-relaxed max-w-xl"
          >
            {currentMovie.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            key={`actions-${currentMovie.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            {/* Watch Now */}
            <button
              onClick={() => onPlayTrailer(currentMovie)}
              className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#E50914] hover:bg-[#FF0F1A] text-white font-semibold text-sm shadow-xl shadow-[#E50914]/30 hover:shadow-[#E50914]/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Play className="w-4 h-4 fill-white text-white" />
              <span>Watch Now</span>
            </button>

            {/* Explore Film */}
            <Link
              href={`/movie/${currentMovie.slug}`}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/15 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <Info className="w-4 h-4" />
              <span>Explore Film</span>
            </Link>

            {/* Add to My List */}
            <button
              onClick={() => toggleMyList(currentMovie.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-full text-xs font-medium border backdrop-blur-md transition-all duration-300 ${inMyList[currentMovie.id]
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                : "bg-white/5 hover:bg-white/10 text-white border-white/10"
                }`}
            >
              {inMyList[currentMovie.id] ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>In My List</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>My List</span>
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation Controls & Progress Indicator */}
      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-12 z-20 flex items-center gap-4">
        {/* Previous / Next Arrows (Hidden on mobile <640px) */}
        <div className="hidden sm:flex items-center gap-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="p-2 rounded-full text-[#92959D] hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="p-2 rounded-full text-[#92959D] hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Counter (01 / 06) */}
        <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
          <span className="text-xs font-mono font-bold text-white">
            0{currentIndex + 1}
          </span>
          <div className="flex items-center gap-1.5">
            {featuredMovies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex
                  ? "w-8 bg-[#E50914] shadow-[0_0_10px_#E50914]"
                  : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
          <span className="text-xs font-mono text-[#92959D]">
            0{featuredMovies.length}
          </span>
        </div>
      </div>
    </div>
  );
}
