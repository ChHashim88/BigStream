"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, FileText, ArrowLeft, ChevronRight } from "lucide-react";
import { LegalSection } from "@/data/privacy";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalLayoutProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Banner */}
      <div className="mb-12 border-b border-white/10 pb-8 space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[#92959D] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#E50914]/20 border border-[#E50914]/40 flex items-center justify-center text-[#E50914]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{title}</h1>
            <p className="text-xs text-[#92959D] font-mono mt-0.5">
              Big Stream Entertainment & Big Screen Entertainment Group Inc. (Stock: BSEG) · Last Updated: {lastUpdated}
            </p>
          </div>
        </div>
        <p className="text-sm text-[#92959D] max-w-3xl font-light leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Desktop Sticky Sidebar Table of Contents */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-28 bg-[#111318] border border-white/10 rounded-2xl p-5 space-y-3 shadow-xl">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold pb-2 border-b border-white/10 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E50914]" />
              <span>Table of Contents</span>
            </h3>

            <nav className="space-y-1 max-h-[65vh] overflow-y-auto pr-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                    activeId === section.id
                      ? "bg-[#E50914] text-white font-semibold shadow-md shadow-[#E50914]/30"
                      : "text-[#92959D] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="truncate">{section.title}</span>
                  {activeId === section.id && <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Legal Text Content Body */}
        <div className="lg:col-span-3 space-y-10">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-[#111318]/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 scroll-mt-28 shadow-lg"
            >
              <h2 className="text-xl font-bold text-white flex items-center gap-2 font-sans border-b border-white/10 pb-3">
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                <span>{section.title}</span>
              </h2>

              <div className="space-y-3 text-sm text-[#92959D] font-light leading-relaxed">
                {section.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
