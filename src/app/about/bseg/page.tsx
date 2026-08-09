"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import { BSEG_INFO, EXECUTIVE_TEAM, CAMELCODE_INFO } from "@/data/team";
import { ShieldCheck, UserCheck, Code, Building, TrendingUp } from "lucide-react";

export default function BSEGPage() {
  return (
    <MainLayout>
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
          {/* Company Profile Header */}
          <div className="border-b border-white/10 pb-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Public Stock Ticker: BSEG</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              {BSEG_INFO.companyName}
            </h1>
            <p className="text-base sm:text-lg text-[#92959D] font-light max-w-3xl leading-relaxed">
              {BSEG_INFO.mission}
            </p>
          </div>

          {/* Key Corporate Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#111318] border border-white/10 rounded-2xl p-5 space-y-1">
              <span className="text-xs text-[#92959D] font-mono">Stock Symbol</span>
              <p className="text-xl font-bold text-white font-mono">{BSEG_INFO.stockTicker}</p>
            </div>
            <div className="bg-[#111318] border border-white/10 rounded-2xl p-5 space-y-1">
              <span className="text-xs text-[#92959D] font-mono">Founded</span>
              <p className="text-xl font-bold text-white font-mono">{BSEG_INFO.foundedYear}</p>
            </div>
            <div className="bg-[#111318] border border-white/10 rounded-2xl p-5 space-y-1">
              <span className="text-xs text-[#92959D] font-mono">Headquarters</span>
              <p className="text-xl font-bold text-white font-mono">Los Angeles, CA</p>
            </div>
            <div className="bg-[#111318] border border-white/10 rounded-2xl p-5 space-y-1">
              <span className="text-xs text-[#92959D] font-mono">Platform Ecosystem</span>
              <p className="text-xl font-bold text-emerald-400 font-mono">Roku & Web</p>
            </div>
          </div>

          {/* Executive Leadership Section */}
          <div id="leadership" className="space-y-8 scroll-mt-28">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E50914] font-bold">
                Executive Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Board of Directors & Officers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXECUTIVE_TEAM.map((exec, idx) => (
                <div
                  key={idx}
                  className="bg-[#111318] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#E50914]/40 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={exec.image}
                      alt={exec.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/20 group-hover:border-[#E50914] transition-colors"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white">{exec.name}</h3>
                      <p className="text-xs text-[#E50914] font-mono font-semibold">
                        {exec.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#92959D] font-light leading-relaxed">
                    {exec.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Partner Section */}
          <div className="bg-[#181A20] border border-white/10 rounded-3xl p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E50914] uppercase tracking-wider font-bold">
              <Code className="w-4 h-4" />
              <span>Technology Partner</span>
            </div>
            <h2 className="text-2xl font-bold text-white">{CAMELCODE_INFO.name}</h2>
            <p className="text-sm text-[#92959D] leading-relaxed max-w-3xl">
              {CAMELCODE_INFO.description}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </MainLayout>
  );
}
