"use client";

import React, { useState } from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/hero/HeroCarousel";
import MovieRail from "@/components/movie/MovieRail";
import MovieCard from "@/components/movie/MovieCard";
import TrailerModal from "@/components/movie/TrailerModal";
import ArticleCard from "@/components/editorial/ArticleCard";
import { MOVIES, Movie, dedupeMovies } from "@/data/movies";
import { HIFM_ARTICLES } from "@/data/articles";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const handlePlayTrailer = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsTrailerOpen(true);
  };

  const continueWatching = dedupeMovies(MOVIES.filter((m) => m.progress));
  const featuredMovies = dedupeMovies(MOVIES.filter((m) => m.featured));
  const recentlyAdded = dedupeMovies(MOVIES.filter((m) => m.recentlyAdded));
  const featuredArticle = HIFM_ARTICLES[0];

  // Helper to filter movies by category or genre with fallback matching
  const getCategoryMovies = (genreOrCategory: string) => {
    const matches = dedupeMovies(
      MOVIES.filter(
        (m) =>
          m.category.toLowerCase() === genreOrCategory.toLowerCase() ||
          m.genres.some((g) => g.toLowerCase() === genreOrCategory.toLowerCase())
      )
    );
    if (matches.length >= 3) return matches;
    // Fallback supplement if matches are sparse
    const remaining = dedupeMovies(
      MOVIES.filter((m) => !matches.some((match) => match.title.toLowerCase() === m.title.toLowerCase()))
    );
    return dedupeMovies([...matches, ...remaining]).slice(0, 8);
  };

  // Define Category Rail Configuration
  const categoryRails = [
    {
      title: "Special & Vault Presentations",
      movies: getCategoryMovies("Special"),
      slug: "special",
    },
    {
      title: "Adventure & Wilderness Expeditions",
      movies: getCategoryMovies("Adventure"),
      slug: "adventure",
    },
    {
      title: "History & Historic Vault Archives",
      movies: getCategoryMovies("History"),
      slug: "history",
    },
    {
      title: "World War I Vault Archives",
      movies: getCategoryMovies("World War I"),
      slug: "world-war-one",
    },
    {
      title: "World War II Vault Archives",
      movies: getCategoryMovies("World War II"),
      slug: "world-war-two",
    },
    {
      title: "Action & Tactical Thrillers",
      movies: getCategoryMovies("Action"),
      slug: "action",
    },
    {
      title: "Sci-Fi & Cyberpunk Visions",
      movies: getCategoryMovies("Sci-Fi"),
      slug: "sci-fi",
    },
    {
      title: "Drama & Character Studies",
      movies: getCategoryMovies("Drama"),
      slug: "drama",
    },
    {
      title: "Documentaries & Real Stories",
      movies: getCategoryMovies("Documentary"),
      slug: "documentary",
    },
    {
      title: "Thriller & Noir Mysteries",
      movies: getCategoryMovies("Thriller"),
      slug: "thriller",
    },
    {
      title: "Comedy & Satire",
      movies: getCategoryMovies("Comedy"),
      slug: "comedy",
    },
    {
      title: "Horror & Supernatural Dread",
      movies: getCategoryMovies("Horror"),
      slug: "horror",
    },
    {
      title: "Family & Holiday Magic",
      movies: getCategoryMovies("Family"),
      slug: "family",
    },
    {
      title: "Animation & Digital Odysseys",
      movies: getCategoryMovies("Animation"),
      slug: "animation",
    },
    {
      title: "Western & Frontier Tales",
      movies: getCategoryMovies("Western"),
      slug: "western",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <main className="flex-1">
        <HeroCarousel movies={MOVIES} onPlayTrailer={handlePlayTrailer} />

        {/* Continue Watching Rail */}
        <div className="pt-6">
          <MovieRail
            title="Continue Watching"
            movies={continueWatching}
            variant="landscape"
            showProgress={true}
            onPlayMovie={handlePlayTrailer}
          />
        </div>

        {/* Featured Movies Showcase (Horizontal Scroll Row on Mobile, Grid on Desktop) */}
        <section className="py-12 bg-[#0D0F14]/80 border-y border-white/[0.06] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914] text-xs font-mono font-bold tracking-wider uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curated Spotlight</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Featured Masterpieces
                </h2>
              </div>

              <Link
                href="/featured"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E50914] hover:text-[#FF0F1A] transition-colors"
              >
                <span>Explore Featured</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile: Horizontal Scrolling Row for all featured movies | Desktop: Grid */}
            <div className="flex overflow-x-auto space-x-4 no-scrollbar pb-4 pt-1 items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 md:space-x-0 md:gap-6">
              {featuredMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="shrink-0 w-[280px] sm:w-[320px] md:w-auto h-full flex flex-col"
                >
                  <MovieCard
                    movie={movie}
                    variant="landscape"
                    onPlay={handlePlayTrailer}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recently Added Rail */}
        <MovieRail
          title="Recently Added"
          movies={recentlyAdded}
          variant="portrait"
          viewAllHref="/recently-added"
          onPlayMovie={handlePlayTrailer}
        />

        {/* All Individual Category Rows */}
        <div className="space-y-4 py-4">
          {categoryRails.map((catRail) => (
            <MovieRail
              key={catRail.slug}
              title={catRail.title}
              movies={catRail.movies}
              variant="portrait"
              viewAllHref={`/categories`}
              onPlayMovie={handlePlayTrailer}
            />
          ))}
        </div>

        {/* HIFM Magazine Spotlight Section */}
        <section className="py-16 bg-gradient-to-b from-[#08090B] via-[#111318] to-[#08090B] border-t border-white/[0.08] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-end justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono tracking-[0.2em] text-[#E50914] uppercase font-bold">
                  HIFM Magazine Spotlight
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-white mt-1">
                  Hollywood International Filmmaker Magazine
                </h2>
                <p className="text-xs sm:text-sm text-[#92959D] font-serif italic mt-0.5">
                  Exclusive commentary, director retrospectives, and industry stories.
                </p>
              </div>

              <Link
                href="/hifm"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E50914] hover:text-[#FF0F1A] transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {featuredArticle && (
              <ArticleCard article={featuredArticle} featured={true} />
            )}
          </div>
        </section>

        {/* BSEG Corporate Banner */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#181A20] via-[#111318] to-[#08090B] border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E50914]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Public Media Group · OTC: BSEG</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Big Screen Entertainment Group Inc.
              </h2>

              <p className="text-sm sm:text-base text-[#92959D] font-light leading-relaxed">
                Big Stream Entertainment is powered by Big Screen Entertainment Group (Stock: BSEG), delivering high-impact feature films, affiliate distribution, and expanding Roku channel experiences to film lovers around the globe.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/about/bseg"
                  className="px-6 py-3 rounded-full bg-[#E50914] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF0F1A] shadow-xl shadow-[#E50914]/30 transition-all hover:scale-105"
                >
                  Explore BSEG Corporate
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 border border-white/15 transition-all"
                >
                  About Big Stream
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Global Interactive Video Player Modal */}
      <TrailerModal
        movie={selectedMovie}
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />
    </MainLayout>
  );
}
