"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

interface CategoryBarProps {
  activeCategorySlug?: string;
  onSelectCategory?: (slug: string) => void;
  sticky?: boolean;
}

export default function CategoryBar({
  activeCategorySlug = "all",
  onSelectCategory,
  sticky = true,
}: CategoryBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activePillRef = useRef<HTMLAnchorElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  // Smooth scroll active selected category pill into center view
  useEffect(() => {
    if (activePillRef.current && scrollRef.current) {
      const pill = activePillRef.current;
      const container = scrollRef.current;
      const pillLeft = pill.offsetLeft;
      const pillWidth = pill.offsetWidth;
      const containerWidth = container.clientWidth;

      const targetScroll = pillLeft - containerWidth / 2 + pillWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  }, [activeCategorySlug]);

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-full z-20 bg-[#08090B]/95 backdrop-blur-xl border-y border-white/[0.08] py-3.5 transition-all ${
        sticky ? "sticky top-[64px]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 relative group">
        {/* Fixed Categories Label (Stays fixed on left) */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#92959D] uppercase tracking-wider pr-3.5 border-r border-white/10 shrink-0 select-none bg-[#08090B] z-10 py-1">
          <Layers className="w-4 h-4 text-[#E50914]" />
          <span>Categories</span>
        </div>

        {/* Scroll Arrows & Container Wrapper */}
        <div className="relative flex-1 flex items-center overflow-hidden">
          {/* Left Arrow Scroll */}
          {canScrollLeft && (
            <button
              onClick={() => scrollBy(-300)}
              aria-label="Scroll Categories Left"
              className="absolute left-0 z-20 p-1.5 rounded-full bg-[#08090B]/90 text-white border border-white/10 shadow-xl hover:bg-[#E50914] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Scrollable Category Options Container */}
          <div
            ref={scrollRef}
            className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth w-full py-0.5 px-1"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategorySlug === category.slug;
              return (
                <Link
                  key={category.id}
                  ref={isActive ? activePillRef : null}
                  href={category.slug === "all" ? "/categories" : `/categories/${category.slug}`}
                  onClick={() => {
                    if (onSelectCategory) {
                      onSelectCategory(category.slug);
                    }
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide shrink-0 transition-all duration-300 select-none ${
                    isActive
                      ? "bg-[#E50914] text-white shadow-lg shadow-[#E50914]/40 font-semibold scale-105"
                      : "bg-white/[0.04] text-[#92959D] hover:text-white hover:bg-white/[0.1] border border-white/[0.05]"
                  }`}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>

          {/* Right Arrow Scroll */}
          {canScrollRight && (
            <button
              onClick={() => scrollBy(300)}
              aria-label="Scroll Categories Right"
              className="absolute right-0 z-20 p-1.5 rounded-full bg-[#08090B]/90 text-white border border-white/10 shadow-xl hover:bg-[#E50914] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
