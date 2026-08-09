"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Menu, X, Film, Sparkles, LogIn, Bell } from "lucide-react";
import SearchModal from "../search/SearchModal";

interface NavbarProps {
  onOpenMobileSidebar?: () => void;
}

export default function Navbar({ onOpenMobileSidebar }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Featured", href: "/featured" },
    { name: "Recently Added", href: "/recently-added" },
    { name: "HIFM", href: "/hifm" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 lg:left-64 right-0 z-30 transition-all duration-500 ${
          scrolled
            ? "bg-[#08090B]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80 py-3"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Brand Logo & Drawer Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={onOpenMobileSidebar}
                className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors border border-white/10"
                aria-label="Open sidebar menu"
              >
                <Menu className="w-5 h-5 text-[#E50914]" />
              </button>

              <Link href="/" className="flex items-center gap-2 focus:outline-none">
                <div className="w-7 h-7 rounded-lg bg-[#E50914] flex items-center justify-center shadow-md shadow-[#E50914]/40">
                  <Film className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-extrabold text-base tracking-[0.15em] text-white font-sans uppercase">
                  CINEMA<span className="text-[#E50914]">.</span>STREAM
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 relative ${
                      isActive
                        ? "text-white font-semibold bg-white/[0.08]"
                        : "text-[#92959D] hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#E50914] rounded-full shadow-[0_0_8px_#E50914]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              {/* Quick Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open Search"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#92959D] hover:text-white border border-white/10 transition-all text-xs"
              >
                <Search className="w-3.5 h-3.5 text-[#E50914]" />
                <span className="hidden sm:inline font-medium">Search...</span>
              </button>

              {/* Notifications */}
              <button
                aria-label="Notifications"
                className="relative p-2 rounded-full text-[#92959D] hover:text-white hover:bg-white/[0.08] transition-all border border-transparent hover:border-white/10"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E50914] shadow-[0_0_6px_#E50914]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
