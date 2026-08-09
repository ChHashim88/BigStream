"use client";

import React from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import { Film, Tv, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { BSEG_INFO, CAMELCODE_INFO } from "@/data/team";

export default function AboutPage() {
  return (
    <MainLayout>
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
          {/* Header */}
          <div className="border-b border-white/10 pb-8 space-y-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E50914] font-bold">
              Corporate Overview
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              Big Stream Entertainment
            </h1>
            <p className="text-base sm:text-lg text-[#92959D] font-light leading-relaxed">
              Delivering Big Screen Entertainment Group (Stock: BSEG), partner, and affiliate feature film content directly to global audiences across connected TVs, web platforms, and mobile apps.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111318] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E50914]/20 border border-[#E50914]/40 flex items-center justify-center text-[#E50914]">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Original Cinema</h3>
              <p className="text-xs text-[#92959D] leading-relaxed">
                Producing and distributing feature-length motion pictures, holiday specials, and documentaries with top Hollywood talent.
              </p>
            </div>

            <div className="bg-[#111318] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Tv className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Roku & Multi-Platform</h3>
              <p className="text-xs text-[#92959D] leading-relaxed">
                Expanding from our dedicated Roku channel into Next.js powered web streaming and smart TV ecosystems.
              </p>
            </div>

            <div className="bg-[#111318] border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Public Corporation</h3>
              <p className="text-xs text-[#92959D] leading-relaxed">
                Owned and operated by Big Screen Entertainment Group Inc., a publicly traded media conglomerate (Stock: BSEG).
              </p>
            </div>
          </div>

          {/* Technology Partner Section */}
          <div className="bg-[#181A20] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E50914] font-bold">
              Engineering Partner
            </span>
            <h2 className="text-2xl font-bold text-white">{CAMELCODE_INFO.name}</h2>
            <p className="text-sm text-[#92959D] max-w-3xl leading-relaxed">
              {CAMELCODE_INFO.description}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/about/bseg"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E50914] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#FF0F1A] shadow-xl transition-all"
            >
              <span>View BSEG Leadership & Stock Profile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </MainLayout>
  );
}
