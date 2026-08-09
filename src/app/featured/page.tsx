"use client";

import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import MovieGrid from "@/components/movie/MovieGrid";
import TrailerModal from "@/components/movie/TrailerModal";
import { MOVIES, Movie } from "@/data/movies";
import { Sparkles } from "lucide-react";

export default function FeaturedPage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const featuredMovies = MOVIES.filter((m) => m.featured);

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
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
              Featured Originals & Masterpieces
            </h1>
            <p className="text-sm text-[#92959D] font-light max-w-2xl">
              Handpicked selections, high-budget originals, and festival winners curated by Big Stream Entertainment.
            </p>
          </div>

          <MovieGrid movies={featuredMovies} onPlayMovie={handlePlayTrailer} />
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
