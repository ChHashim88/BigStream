"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import MovieRail from "@/components/movie/MovieRail";
import TrailerModal from "@/components/movie/TrailerModal";
import { MOVIES, Movie, dedupeMovies } from "@/data/movies";
import { Play, Plus, Check, Star, ArrowLeft, Lock } from "lucide-react";

export default function MovieDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const movie = MOVIES.find((m) => m.slug.toLowerCase() === slug.toLowerCase()) || MOVIES[0];
  const [inList, setInList] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [modalMovie, setModalMovie] = useState<Movie | null>(null);

  const recommendations = dedupeMovies(MOVIES.filter((m) => m.id !== movie.id)).slice(0, 6);

  const handlePlay = (targetMovie: Movie) => {
    setModalMovie(targetMovie);
    setIsTrailerOpen(true);
  };

  return (
    <MainLayout>
      <main className="flex-1">
        {/* Backdrop Hero Header with Full Movie Poster Showcase */}
        <div className="relative w-full min-h-[640px] bg-[#08090B] overflow-hidden select-none py-16 pt-24">
          {/* Backdrop Image with Dark Atmosphere Blur */}
          <div className="absolute inset-0 z-0">
            <img
              src={movie.backdrop}
              alt={movie.title}
              className="w-full h-full object-cover filter brightness-[0.35] blur-xl scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/80 to-[#08090B]/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-black/80 to-[#08090B]" />
          </div>

          {/* Main Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-6">
            {/* Top Back Link */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs text-[#92959D] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Browse</span>
              </Link>
            </div>

            {/* Hero Layout: Poster Card (Left) + Movie Details & Viewing Options (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column: Proper Full Poster Image Card */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative group/poster w-[260px] sm:w-[300px] aspect-[2/3] rounded-2xl overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-[#111318]">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Title, Metadata, Description, & Viewing Options Glass Box */}
              <div className="lg:col-span-8 space-y-6">

                {/* Badges & Title */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase bg-[#E50914] text-white">
                      {movie.isOriginal ? "BIG STREAM ORIGINAL" : "PREMIUM FEATURE"}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-amber-400 text-xs font-mono font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{movie.score}</span>
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-tight drop-shadow-xl font-sans">
                    {movie.title}
                  </h1>

                  <div className="flex items-center flex-wrap gap-3 text-xs sm:text-sm text-[#92959D] font-medium">
                    <span>{movie.year}</span>
                    <span>·</span>
                    <span className="px-2 py-0.5 rounded border border-white/20 text-white text-xs font-mono">
                      {movie.rating}
                    </span>
                    <span>·</span>
                    <span>{movie.duration}</span>
                    <span>·</span>
                    <span className="text-white font-medium">
                      {movie.genres.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#92959D] font-light leading-relaxed line-clamp-3 max-w-2xl">
                  {movie.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">


                  <button
                    onClick={() => setInList(!inList)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold border backdrop-blur-md transition-all ${inList
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                        : "bg-white/10 hover:bg-white/20 text-white border-white/15"
                      }`}
                  >
                    {inList ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Added to My List</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to My List</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Viewing Options Box (Cut from below and placed cleanly here) */}
                <div className="w-full max-w-md bg-[#111318]/90 backdrop-blur-xl border border-[#E50914]/30 rounded-2xl p-5 shadow-2xl space-y-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#E50914]/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <span className="text-sm font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[#E50914]" />
                      <span>Viewing Options</span>
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#E50914] text-white font-bold">
                      4K ULTRA HD
                    </span>
                  </div>

                  <p className="text-xs text-[#92959D] font-light leading-relaxed">
                    Sign in or create an account to unlock the full feature film presentation, lossless audio, and backstage bonus materials.
                  </p>

                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href="/login"
                      className="flex-1 text-center py-2.5 px-3 rounded-xl bg-[#E50914] hover:bg-[#FF0F1A] text-white text-xs font-bold transition-all shadow-md shadow-[#E50914]/25"
                    >
                      Login to View
                    </Link>
                    <Link
                      href="/register"
                      className="flex-1 text-center py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/10"
                    >
                      Register
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Movie Body Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Overview & Specs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                About this movie
              </h2>
              <p className="text-sm sm:text-base text-[#92959D] font-light leading-relaxed">
                {movie.description}
              </p>

              {/* Cast & Crew Horizontal Rail */}
              <div className="space-y-4 pt-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-white font-semibold">
                  Cast & Filmmakers
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {movie.cast.map((actor, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#111318] border border-white/5"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-xs">
                        {actor.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{actor}</p>
                        <p className="text-[10px] text-[#92959D] font-mono">Lead Cast</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Technical Specifications Box */}
            <div className="space-y-6">
              <div className="bg-[#111318] border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl">
                <h3 className="text-sm font-mono uppercase tracking-wider text-white font-bold pb-2 border-b border-white/10">
                  Technical Specifications
                </h3>

                <div className="space-y-3 text-xs text-[#92959D]">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Director</span>
                    <span className="text-white font-semibold">{movie.director}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Studio</span>
                    <span className="text-white font-semibold">{movie.studio}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Release Year</span>
                    <span className="text-white font-semibold">{movie.year}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Runtime</span>
                    <span className="text-white font-semibold">{movie.duration}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Audio & Format</span>
                    <span className="text-emerald-400 font-mono">4K Ultra HD · Dolby Atmos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Like This Recommendation Rail */}
          <MovieRail
            title="More Like This"
            subtitle="Recommended titles you might enjoy"
            movies={recommendations}
            variant="portrait"
            onPlayMovie={handlePlay}
          />
        </div>
      </main>

      <Footer />

      <TrailerModal
        movie={modalMovie}
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />
    </MainLayout>
  );
}
