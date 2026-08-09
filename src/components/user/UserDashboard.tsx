"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { User, Film, Clock, Heart, Settings, ShieldCheck, Sparkles, Check, Play, Bookmark } from "lucide-react";
import { MOVIES, Movie } from "@/data/movies";
import MovieCard from "../movie/MovieCard";

interface UserDashboardProps {
  onPlayMovie?: (movie: Movie) => void;
}

export default function UserDashboard({ onPlayMovie }: UserDashboardProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const tabParam = searchParams.get("tab");
  const validTabs = ["bookmarked", "liked", "continue", "settings"];
  const currentTab = tabParam && validTabs.includes(tabParam) ? tabParam : "bookmarked";

  const [activeTab, setActiveTab] = useState<string>(currentTab);

  useEffect(() => {
    if (tabParam && validTabs.includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/user?tab=${tab}`);
  };

  // User state
  const [username, setUsername] = useState("CinemaEnthusiast2026");
  const [email, setEmail] = useState("user@bigstream.com");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([
    "Sci-Fi",
    "Drama",
    "Thriller",
    "Documentary",
  ]);

  const allGenres = [
    "Sci-Fi",
    "Drama",
    "Action",
    "Thriller",
    "Documentary",
    "Comedy",
    "Horror",
    "Animation",
    "Western",
    "Romance",
  ];

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const continueWatchingMovies = MOVIES.filter((m) => m.progress);
  const bookmarkedMovies = MOVIES.slice(0, 4);
  const likedMovies = MOVIES.slice(4, 9);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-[#181A20] via-[#111318] to-[#08090B] border border-white/10 p-5 sm:p-8 md:p-10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* User Info Block */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 w-full lg:w-auto min-w-0">
            <div className="flex items-center gap-3 sm:gap-5 min-w-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#E50914] to-red-900 flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-xl shadow-[#E50914]/30 border border-white/20 shrink-0">
                <User className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="sm:hidden">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/40 font-bold">
                  VIP Member
                </span>
              </div>
            </div>

            <div className="space-y-1 min-w-0 w-full">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-base sm:text-2xl md:text-3xl font-extrabold text-white leading-tight break-words max-w-full">
                  Welcome Back, <span className="text-[#E50914]">{username}</span>
                </h1>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/40 font-bold shrink-0">
                  VIP Member
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#92959D] font-light">
                Continue your cinematic journey on BIG STREAM.
              </p>
            </div>
          </div>

          {/* Stats Bar (3-Column Grid on Mobile, Flex on Desktop) */}
          <div className="w-full lg:w-auto grid grid-cols-3 gap-2 sm:gap-4 bg-black/50 backdrop-blur-md p-3 sm:px-5 sm:py-3.5 rounded-xl border border-white/10 text-center">
            <div className="px-1">
              <span className="block text-white font-bold text-sm sm:text-base">{bookmarkedMovies.length}</span>
              <span className="text-[10px] sm:text-xs font-mono text-[#92959D]">Bookmarked</span>
            </div>
            <div className="px-1 border-x border-white/10">
              <span className="block text-white font-bold text-sm sm:text-base">{likedMovies.length}</span>
              <span className="text-[10px] sm:text-xs font-mono text-[#92959D]">Liked</span>
            </div>
            <div className="px-1">
              <span className="block text-white font-bold text-sm sm:text-base">{continueWatchingMovies.length}</span>
              <span className="text-[10px] sm:text-xs font-mono text-[#92959D]">In Progress</span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Tab Badge Indicator */}
      <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
        {activeTab === "bookmarked" && (
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30">
            <Bookmark className="w-4 h-4" />
            <span>Bookmarked ({bookmarkedMovies.length})</span>
          </div>
        )}

        {activeTab === "liked" && (
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30">
            <Heart className="w-4 h-4" />
            <span>Liked Titles ({likedMovies.length})</span>
          </div>
        )}

        {activeTab === "continue" && (
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30">
            <Clock className="w-4 h-4" />
            <span>Continue Watching ({continueWatchingMovies.length})</span>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30">
            <Settings className="w-4 h-4" />
            <span>Account Settings</span>
          </div>
        )}
      </div>

      {/* Tab Content */}
      {activeTab === "bookmarked" && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">Bookmarked Movies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {bookmarkedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onPlay={onPlayMovie} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "liked" && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">Liked Titles & Favorites</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {likedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onPlay={onPlayMovie} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "continue" && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white">Pick up where you left off</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {continueWatchingMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                variant="landscape"
                showProgress={true}
                onPlay={onPlayMovie}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === "settings" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Account Profile Details Form */}
          <div className="lg:col-span-2 bg-[#111318] border border-white/10 rounded-2xl p-6 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <User className="w-4 h-4 text-[#E50914]" />
              <span>Personal Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-[#92959D] font-mono">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#08090B] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-[#92959D] font-mono">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#08090B] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>
            </div>

            {/* Favorite Genres Interactive Chips */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Favorite Cinema Genres</span>
              </h4>
              <p className="text-xs text-[#92959D]">
                Select genres to personalize your Big Stream homepage algorithm.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {allGenres.map((genre) => {
                  const isSelected = selectedGenres.includes(genre);
                  return (
                    <button
                      key={genre}
                      onClick={() => toggleGenre(genre)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        isSelected
                          ? "bg-[#E50914] text-white shadow-md shadow-[#E50914]/30"
                          : "bg-white/5 text-[#92959D] hover:text-white border border-white/10"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                      <span>{genre}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button className="px-6 py-2.5 rounded-full bg-[#E50914] text-white font-semibold text-xs shadow-lg hover:bg-[#FF0F1A] transition-colors">
              Save Preferences
            </button>
          </div>

          {/* Membership Info Card */}
          <div className="bg-[#181A20] border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Subscription & Billing</span>
            </h3>

            <div className="space-y-2 text-xs text-[#92959D]">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>Plan</span>
                <span className="text-white font-semibold">Big Stream Ultra 4K</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>Status</span>
                <span className="text-emerald-400 font-semibold">Active Active</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>Next Billing</span>
                <span className="text-white">Sept 1, 2026</span>
              </div>
            </div>

            <button className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors border border-white/10">
              Manage Subscription
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
