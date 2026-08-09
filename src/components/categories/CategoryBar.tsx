"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
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

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-full z-40 bg-[#08090B]/90 backdrop-blur-xl border-y border-white/[0.08] py-3.5 transition-all ${
        sticky ? "sticky top-[64px]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center group">
        {/* Left Arrow Scroll */}
        {canScrollLeft && (
          <button
            onClick={() => scrollBy(-300)}
            aria-label="Scroll Categories Left"
            className="absolute left-2 z-10 p-2 rounded-full bg-[#08090B]/90 text-white border border-white/10 shadow-xl hover:bg-[#E50914] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth w-full px-2 py-0.5"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#92959D] uppercase tracking-wider pr-3 border-r border-white/10 shrink-0">
            <Layers className="w-3.5 h-3.5 text-[#E50914]" />
            <span>Categories</span>
          </div>

          {CATEGORIES.map((category) => {
            const isActive = activeCategorySlug === category.slug;
            return (
              <Link
                key={category.id}
                href={category.slug === "all" ? "/categories" : `/categories/${category.slug}`}
                onClick={(e) => {
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
            className="absolute right-2 z-10 p-2 rounded-full bg-[#08090B]/90 text-white border border-white/10 shadow-xl hover:bg-[#E50914] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
