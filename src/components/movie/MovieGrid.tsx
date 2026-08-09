"use client";

import React, { useState } from "react";
import { Movie, dedupeMovies } from "@/data/movies";
import MovieCard from "./MovieCard";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";

interface MovieGridProps {
  movies: Movie[];
  onPlayMovie?: (movie: Movie) => void;
  showControls?: boolean;
}

export default function MovieGrid({
  movies,
  onPlayMovie,
  showControls = true,
}: MovieGridProps) {
  const [sortBy, setSortBy] = useState<"featured" | "score" | "year" | "title">("featured");

  const uniqueMovies = dedupeMovies(movies);
  const sortedMovies = [...uniqueMovies].sort((a, b) => {
    if (sortBy === "score") return b.score - a.score;
    if (sortBy === "year") return b.year - a.year;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return 0; // featured default
  });

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      {showControls && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div className="text-xs text-[#92959D] font-mono">
            Showing <span className="text-white font-bold">{sortedMovies.length}</span> titles
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-[#92959D] bg-[#111318] border border-white/10 px-3 py-1.5 rounded-full">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#E50914]" />
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="featured" className="bg-[#111318] text-white">
                  Featured
                </option>
                <option value="score" className="bg-[#111318] text-white">
                  Highest Rating
                </option>
                <option value="year" className="bg-[#111318] text-white">
                  Release Year
                </option>
                <option value="title" className="bg-[#111318] text-white">
                  Alphabetical
                </option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Grid */}
      {sortedMovies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
          {sortedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              variant="portrait"
              onPlay={onPlayMovie}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-3 bg-[#111318]/40 border border-white/5 rounded-2xl">
          <p className="text-base text-white font-semibold">No movies found</p>
          <p className="text-xs text-[#92959D]">
            Try adjusting your search query or selecting a different category.
          </p>
        </div>
      )}
    </div>
  );
}
