"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Film, BookOpen, Layers, ArrowRight, Star } from "lucide-react";
import { MOVIES, dedupeMovies } from "@/data/movies";
import { CATEGORIES } from "@/data/categories";
import { HIFM_ARTICLES } from "@/data/articles";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const filteredMovies = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return dedupeMovies(
      MOVIES.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.genres.some((g) => g.toLowerCase().includes(q)) ||
          m.director.toLowerCase().includes(q) ||
          m.cast.some((c) => c.toLowerCase().includes(q))
      )
    );
  }, [query]);

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return CATEGORIES.filter((c) => c.name.toLowerCase().includes(q));
  }, [query]);

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return HIFM_ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Surface */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-[#111318] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]"
        >
          {/* Input Bar */}
          <div className="relative flex items-center px-6 py-5 border-b border-white/10 bg-[#08090B]">
            <Search className="w-5 h-5 text-[#E50914] shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies, directors, genres, actors, or articles..."
              className="w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-white placeholder-[#92959D] text-base sm:text-lg px-4"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="p-1 rounded-full text-[#92959D] hover:text-white mr-2"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#92959D] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Scroll Container */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            {!query.trim() ? (
              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-[#92959D]">
                  Popular Search Topics
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Big Stream Originals",
                    "The Next Chapter of Cinema",
                    "Documentary",
                    "Denis Villeneuve",
                    "The Key to Christmas",
                    "Sci-Fi",
                    "Venice Film Festival",
                  ].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => setQuery(chip)}
                      className="px-3.5 py-1.5 rounded-full text-xs bg-white/[0.05] hover:bg-[#E50914]/20 hover:text-[#E50914] hover:border-[#E50914]/40 border border-white/10 text-white transition-colors"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Movies Results */}
                {filteredMovies.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#E50914] uppercase tracking-wider font-semibold">
                      <Film className="w-4 h-4" />
                      <span>Movies ({filteredMovies.length})</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {filteredMovies.map((movie) => (
                        <Link
                          key={movie.id}
                          href={`/movie/${movie.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors group"
                        >
                          <img
                            src={movie.poster}
                            alt={movie.title}
                            className="w-12 h-16 object-cover rounded-lg shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-semibold text-white group-hover:text-[#E50914] transition-colors truncate">
                              {movie.title}
                            </h4>
                            <p className="text-xs text-[#92959D]">
                              {movie.year} · {movie.genres.slice(0, 2).join(", ")}
                            </p>
                            <div className="flex items-center gap-1 text-[11px] text-amber-400 font-mono mt-0.5">
                              <Star className="w-3 h-3 fill-amber-400" />
                              <span>{movie.score}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Category Matches */}
                {filteredCategories.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#E50914] uppercase tracking-wider font-semibold">
                      <Layers className="w-4 h-4" />
                      <span>Categories ({filteredCategories.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {filteredCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={cat.slug === "all" ? "/categories" : `/categories/${cat.slug}`}
                          onClick={onClose}
                          className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-[#E50914] text-xs font-semibold text-white transition-colors border border-white/10"
                        >
                          {cat.name} ({cat.count})
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* HIFM Articles Matches */}
                {filteredArticles.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#E50914] uppercase tracking-wider font-semibold">
                      <BookOpen className="w-4 h-4" />
                      <span>HIFM Magazine ({filteredArticles.length})</span>
                    </div>
                    <div className="space-y-2">
                      {filteredArticles.map((article) => (
                        <Link
                          key={article.id}
                          href={`/hifm/${article.slug}`}
                          onClick={onClose}
                          className="block p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors group"
                        >
                          <h4 className="text-sm font-semibold text-white group-hover:text-[#E50914] transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-xs text-[#92959D] line-clamp-1 mt-1">
                            {article.excerpt}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Zero State */}
                {filteredMovies.length === 0 &&
                  filteredCategories.length === 0 &&
                  filteredArticles.length === 0 && (
                    <div className="py-12 text-center text-[#92959D] space-y-2">
                      <p className="text-sm">No results found for "{query}"</p>
                      <p className="text-xs">Try searching for genres like "Sci-Fi", "Drama", or "Nolan"</p>
                    </div>
                  )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
