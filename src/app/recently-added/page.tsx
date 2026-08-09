"use client";

import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import MovieGrid from "@/components/movie/MovieGrid";
import TrailerModal from "@/components/movie/TrailerModal";
import { MOVIES, Movie } from "@/data/movies";
import { Clock } from "lucide-react";

export default function RecentlyAddedPage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const recentlyAdded = MOVIES.filter((m) => m.recentlyAdded);

  const handlePlayTrailer = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsTrailerOpen(true);
  };

  return (
    <MainLayout>
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <div className="border-b border-white/10 pb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-mono font-bold uppercase">
              <Clock className="w-3.5 h-3.5" />
              <span>Fresh Releases</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Recently Added Films
            </h1>
            <p className="text-sm text-[#92959D] font-light max-w-2xl">
              Discover the latest cinematic additions, studio premieres, and restored independent classics on Big Stream.
            </p>
          </div>

          <MovieGrid movies={recentlyAdded} onPlayMovie={handlePlayTrailer} />
        </div>
      </main>

      <Footer />

      <TrailerModal
        movie={selectedMovie}
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />
    </MainLayout>
  );
}
