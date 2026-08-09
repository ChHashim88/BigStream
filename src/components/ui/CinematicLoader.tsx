"use client";

import React from "react";

interface CinematicLoaderProps {
  fullScreen?: boolean;
  message?: string;
}

export default function CinematicLoader({
  fullScreen = true,
  message = "PREPARING CINEMATIC EXPERIENCE...",
}: CinematicLoaderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#08090B] text-white z-50 select-none ${
        fullScreen ? "fixed inset-0 min-h-screen w-full" : "w-full py-16"
      }`}
    >
      {/* Background Subtle Red Ambient Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-[#E50914]/15 blur-3xl animate-pulse pointer-events-none" />

      {/* Main Loader Container */}
      <div className="relative flex flex-col items-center gap-6 z-10">
        {/* Animated Logo & Reel Ring Wrapper */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Outer Spinning Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#E50914] border-r-[#E50914]/40 animate-spin duration-1000 shadow-[0_0_20px_#E50914]" />

          {/* Inner Counter-Rotating Pulse Ring */}
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#E50914]/80 border-l-[#E50914]/20 animate-spin duration-1500 reverse" />

          {/* Logo Image Centered with Glow */}
          <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 p-2 shadow-2xl shadow-[#E50914]/30 animate-pulse">
            <img
              src="/logo.png"
              alt="Big Stream Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_#E50914]"
            />
          </div>
        </div>

        {/* Brand Text & Status Shimmer */}
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex items-center gap-1 font-extrabold text-xl tracking-[0.2em] text-white font-sans uppercase">
            <span>BIG</span>
            <span className="text-[#E50914] animate-ping">.</span>
            <span>STREAM</span>
          </div>

          <p className="text-[11px] font-mono tracking-[0.25em] text-[#92959D] uppercase animate-pulse">
            {message}
          </p>

          {/* Shimmer Bar Indicator */}
          <div className="w-36 h-1 bg-white/10 rounded-full overflow-hidden mt-1">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#E50914] to-transparent animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
