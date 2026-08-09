"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Plus, Check, Star, Clock, Info } from "lucide-react";
import { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  variant?: "portrait" | "landscape";
  showProgress?: boolean;
  onPlay?: (movie: Movie) => void;
}

export default function MovieCard({
  movie,
  variant = "portrait",
  showProgress = false,
  onPlay,
}: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [inList, setInList] = useState(false);

  const isLandscape = variant === "landscape";

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative rounded-xl overflow-hidden bg-[#111318] border border-white/[0.08] shadow-lg hover:shadow-2xl hover:shadow-[#E50914]/20 transition-all duration-300 flex flex-col cursor-pointer h-full"
    >
      {/* Poster / Backdrop Container */}
      <Link
        href={`/movie/${movie.slug}`}
        className={`relative w-full shrink-0 overflow-hidden bg-[#08090B] block ${
          isLandscape ? "aspect-[16/9]" : "aspect-[2/3]"
        }`}
      >
        <img
          src={isLandscape ? movie.backdrop : movie.poster}
          alt={movie.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-2.5 right-2.5 z-10">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-amber-400 text-[11px] font-mono font-bold">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>{movie.score}</span>
          </div>
        </div>

        {/* Center Hover Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="w-12 h-12 rounded-full bg-[#E50914] text-white flex items-center justify-center shadow-xl shadow-[#E50914]/50 scale-90 group-hover:scale-100 transition-transform duration-300 hover:bg-[#FF0F1A]">
            <Play className="w-5 h-5 fill-white text-white ml-0.5" />
          </div>
        </div>

        {/* Progress Bar for Continue Watching */}
        {showProgress && movie.progress && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-3 py-1.5 z-20 border-t border-white/10">
            <div className="flex items-center justify-between text-[10px] text-[#92959D] font-mono mb-1">
              <span>Progress</span>
              <span>{movie.progress.timeRemaining}</span>
            </div>
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#E50914] rounded-full shadow-[0_0_8px_#E50914]"
                style={{ width: `${movie.progress.watchedPercent}%` }}
              />
            </div>
          </div>
        )}
      </Link>

      {/* Card Content & Metadata */}
      <div className="p-3.5 flex-1 flex flex-col justify-between space-y-2 bg-[#111318] min-h-[96px]">
        <div>
          <Link
            href={`/movie/${movie.slug}`}
            className="font-bold text-sm text-white group-hover:text-[#E50914] transition-colors truncate block h-[20px] leading-snug"
          >
            {movie.title}
          </Link>
          <div className="flex items-center gap-2 text-xs text-[#92959D] mt-1 font-medium h-[18px]">
            <span>{movie.year}</span>
            <span>·</span>
            <span className="truncate max-w-[90px]">{movie.genres[0]}</span>
            <span>·</span>
            <span className="font-mono text-[10px] px-1 rounded border border-white/10 shrink-0">
              {movie.rating}
            </span>
          </div>
        </div>

        {/* Bottom Card Footer Actions */}
        <div className="flex items-center justify-between pt-1 border-t border-white/[0.05] text-xs text-[#92959D] h-[28px]">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {movie.duration}
          </span>

          <div className="flex items-center gap-1">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setInList(!inList);
              }}
              title={inList ? "Remove from My List" : "Add to My List"}
              className={`p-1 rounded-full hover:bg-white/10 transition-colors ${inList ? "text-emerald-400" : "text-[#92959D] hover:text-white"
                }`}
            >
              {inList ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
            <Link
              href={`/movie/${movie.slug}`}
              title="View Details"
              className="p-1 rounded-full text-[#92959D] hover:text-white hover:bg-white/10 transition-colors"
            >
              <Info className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
