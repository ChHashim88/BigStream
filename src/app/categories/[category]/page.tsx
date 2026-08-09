"use client";

import React, { useState, use } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CategoryBar from "@/components/categories/CategoryBar";
import MovieGrid from "@/components/movie/MovieGrid";
import TrailerModal from "@/components/movie/TrailerModal";
import { MOVIES, Movie, dedupeMovies } from "@/data/movies";
import { CATEGORIES } from "@/data/categories";

export default function CategoryDetailPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const currentCategory = CATEGORIES.find(
    (c) => c.slug.toLowerCase() === categorySlug.toLowerCase()
  ) || {
    name: categorySlug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    slug: categorySlug,
    description: `Explore all ${categorySlug} titles on Big Stream.`,
    count: 0,
  };

  const filteredMovies = dedupeMovies(
    MOVIES.filter((m) => {
      const slug = categorySlug.toLowerCase();
      if (slug === "all") return true;
      if (slug === "featured") return m.featured;
      if (slug === "recently-added") return m.recentlyAdded;

      // Special match for World War I / 1 / One
      if (slug === "world-war-one" || slug === "world-war-1" || slug === "ww1") {
        return (
          m.category.toLowerCase() === "world war i" ||
          m.category.toLowerCase() === "world war 1" ||
          m.category.toLowerCase() === "world war one" ||
          m.genres.some((g) => {
            const lower = g.toLowerCase();
            return lower === "world war i" || lower === "world war 1" || lower === "world war one";
          })
        );
      }

      // Special match for World War II / 2 / Two
      if (slug === "world-war-two" || slug === "world-war-2" || slug === "ww2") {
        return (
          m.category.toLowerCase() === "world war ii" ||
          m.category.toLowerCase() === "world war 2" ||
          m.category.toLowerCase() === "world war two" ||
          m.genres.some((g) => {
            const lower = g.toLowerCase();
            return lower === "world war ii" || lower === "world war 2" || lower === "world war two";
          })
        );
      }

      // Direct category match or normalized slug match
      const normSlug = slug.replace(/-/g, " ");
      const normCat = m.category.toLowerCase().replace(/-/g, " ");
      if (normCat === normSlug) return true;

      return m.genres.some((g) => g.toLowerCase().replace(/-/g, " ") === normSlug);
    })
  );

  const handlePlayTrailer = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsTrailerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <CategoryBar activeCategorySlug={categorySlug} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E50914] font-bold">
              Category View
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white capitalize">
              {currentCategory.name}
            </h1>
            <p className="text-sm text-[#92959D] font-light max-w-2xl">
              {currentCategory.description}
            </p>
          </div>

          {/* Grid */}
          <MovieGrid movies={filteredMovies} onPlayMovie={handlePlayTrailer} />
        </div>
      </main>

      <Footer />

      <TrailerModal
        movie={selectedMovie}
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />
    </div>
  );
}
