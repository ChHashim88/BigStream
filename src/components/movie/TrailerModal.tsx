"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Star, ShieldCheck, Film } from "lucide-react";
import { Movie } from "@/data/movies";

interface TrailerModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TrailerModal({ movie, isOpen, onClose }: TrailerModalProps) {
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

  if (!isOpen || !movie) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#111318] border border-white/15 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#08090B] border-b border-white/10">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white leading-tight truncate">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#92959D] mt-0.5 font-medium">
                  <span>{movie.year}</span>
                  <span>·</span>
                  <span className="text-amber-400 font-mono flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{movie.score}</span>
                  </span>
                  <span>·</span>
                  <span className="px-1.5 py-0.2 rounded border border-white/20 text-[10px] font-mono text-white">
                    {movie.rating}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#92959D] hover:text-white hover:bg-white/10 transition-colors shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Centered Viewing Options Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 bg-gradient-to-b from-[#111318] via-[#151720] to-[#0D0F14] relative overflow-hidden">
            {/* Ambient Red Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E50914]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Viewing Options Box Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E50914]/15 border border-[#E50914]/30 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#E50914]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-mono uppercase tracking-wider">
                    Viewing Options
                  </h4>
                  <p className="text-[11px] text-[#92959D] font-mono">
                    Protected Stream Presentation
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#E50914] text-white font-bold tracking-wider shadow-md">
                4K ULTRA HD
              </span>
            </div>

            {/* Message Description */}
            <p className="text-xs sm:text-sm text-[#92959D] font-light leading-relaxed">
              Sign in or create an account to unlock the full feature film presentation, lossless audio, and backstage bonus materials.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-2.5 py-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>4K HDR Presentation</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white">
                <Film className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dolby Atmos Audio</span>
              </div>
            </div>

            {/* Buttons: Login to View & Register */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                href="/login"
                onClick={onClose}
                className="w-full sm:flex-1 text-center py-3 px-4 rounded-xl bg-[#E50914] hover:bg-[#FF0F1A] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-[#E50914]/30 hover:scale-[1.02] active:scale-95"
              >
                Login to View
              </Link>
              <Link
                href="/register"
                onClick={onClose}
                className="w-full sm:flex-1 text-center py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/15 hover:scale-[1.02] active:scale-95"
              >
                Register
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
