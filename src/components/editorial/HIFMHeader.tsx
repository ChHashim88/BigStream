import React from "react";
import { BookOpen, Sparkles } from "lucide-react";

export default function HIFMHeader() {
  return (
    <div className="py-12 border-b border-white/10 text-center space-y-4 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-mono font-bold tracking-widest uppercase">
        <BookOpen className="w-3.5 h-3.5" />
        <span>Official Publication of Big Stream</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-serif-editorial font-bold text-white tracking-tight leading-tight">
        HIFM
      </h1>

      <p className="text-base sm:text-lg text-[#92959D] font-serif tracking-wide italic">
        Hollywood International Filmmaker Magazine
      </p>

      <p className="text-xs sm:text-sm text-[#92959D] max-w-xl mx-auto font-light leading-relaxed">
        Deep dives into cinema history, visionary directing techniques, independent film production, and exclusive studio interviews.
      </p>
    </div>
  );
}
