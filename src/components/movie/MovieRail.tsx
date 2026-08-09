"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Movie, dedupeMovies } from "@/data/movies";
import MovieCard from "./MovieCard";

interface MovieRailProps {
  title: string;
  subtitle?: string;
  movies: Movie[];
  variant?: "portrait" | "landscape";
  showProgress?: boolean;
  viewAllHref?: string;
  onPlayMovie?: (movie: Movie) => void;
}

export default function MovieRail({
  title,
  subtitle,
  movies,
  variant = "portrait",
  showProgress = false,
  viewAllHref,
  onPlayMovie,
}: MovieRailProps) {
  const uniqueMovies = dedupeMovies(movies);
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!railRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = railRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [uniqueMovies]);

  const scroll = (direction: "left" | "right") => {
    if (railRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      railRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (uniqueMovies.length === 0) return null;

  return (
    <section className="py-8 relative group/rail">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans flex items-center gap-2">
              <span>{title}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
            </h2>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#92959D] mt-0.5 font-light">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-3">
            {viewAllHref && (
              <Link
                href={viewAllHref}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E50914] hover:text-[#FF0F1A] transition-colors"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}

            {/* Manual Scroll Arrows */}
            <div className="hidden sm:flex items-center space-x-1">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`p-2 rounded-full border border-white/10 transition-all ${
                  canScrollLeft
                    ? "bg-[#111318] text-white hover:bg-[#E50914] hover:border-[#E50914]"
                    : "bg-white/[0.02] text-white/20 cursor-not-allowed border-transparent"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`p-2 rounded-full border border-white/10 transition-all ${
                  canScrollRight
                    ? "bg-[#111318] text-white hover:bg-[#E50914] hover:border-[#E50914]"
                    : "bg-white/[0.02] text-white/20 cursor-not-allowed border-transparent"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Rail */}
        <div
          ref={railRef}
          className="flex space-x-4 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-1 items-stretch"
        >
          {uniqueMovies.map((movie) => (
            <div
              key={movie.id}
              className={`shrink-0 h-full flex flex-col ${
                variant === "landscape"
                  ? "w-[280px] sm:w-[320px] md:w-[360px]"
                  : "w-[160px] sm:w-[190px] md:w-[220px]"
              }`}
            >
              <MovieCard
                movie={movie}
                variant={variant}
                showProgress={showProgress}
                onPlay={onPlayMovie}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
