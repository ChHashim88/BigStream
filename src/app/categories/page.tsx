"use client";

import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import CategoryBar from "@/components/categories/CategoryBar";
import MovieGrid from "@/components/movie/MovieGrid";
import TrailerModal from "@/components/movie/TrailerModal";
import { MOVIES, Movie, dedupeMovies } from "@/data/movies";

export default function CategoriesPage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const handlePlayTrailer = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsTrailerOpen(true);
  };

  return (
    <MainLayout>
      <main className="flex-1 pt-24 pb-16">
        <CategoryBar activeCategorySlug="all" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E50914] font-bold">
              Catalog Explorer
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              All Categories & Genres
            </h1>
            <p className="text-sm text-[#92959D] font-light max-w-2xl">
              Browse through our complete library of independent feature films, Big Stream Originals, award-winning documentaries, and cinema classics.
            </p>
          </div>

          {/* Full Movie Grid */}
          <MovieGrid movies={dedupeMovies(MOVIES)} onPlayMovie={handlePlayTrailer} />
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
