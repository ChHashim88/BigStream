"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Home,
  Compass,
  Clock,
  Bookmark,
  Heart,
  Star,
  Settings,
  HelpCircle,
  Film,
  Search,
  User,
  X,
  Sparkles,
  ChevronRight,
  LogOut,
  LogIn,
  SlidersHorizontal,
  Flame
} from "lucide-react";
import SearchModal from "../search/SearchModal";

interface SidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function Sidebar({ mobileOpen = false, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);

  // Helper to check active routes
  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";

    if (href.includes("?")) {
      const [basePath, queryString] = href.split("?");
      if (pathname !== basePath) return false;
      const targetTab = new URLSearchParams(queryString).get("tab");
      const currentTab = searchParams ? searchParams.get("tab") || "bookmarked" : "bookmarked";
      return currentTab === targetTab;
    }

    const basePath = href.split("?")[0];
    return pathname === basePath || pathname.startsWith(basePath + "/");
  };

  const navGroups = [
    {

      items: [
        { name: "Home", href: "/", icon: Home },
        { name: "Discover", href: "/categories", icon: Compass },
      ],
    },
    {
      title: "LIBRARY",
      items: [
        { name: "Recent", href: "/recently-added", icon: Clock },
        { name: "Bookmarked", href: "/user?tab=bookmarked", icon: Bookmark },
        { name: "Liked", href: "/user?tab=liked", icon: Heart },
        { name: "Top rated", href: "/featured", icon: Star },
      ],
    },
    {
      title: "GENERAL",
      items: [
        { name: "Settings", href: "/user?tab=settings", icon: Settings },
        { name: "Help", href: "/support", icon: HelpCircle },
      ],
    },
  ];

  const handleNavClick = (href: string) => {
    if (onCloseMobile) onCloseMobile();
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#13141B] text-[#F5F5F5] border-l lg:border-r border-white/[0.06] shadow-2xl overflow-y-auto custom-scrollbar select-none rounded-l-2xl lg:rounded-2xl">
      {/* Brand Header */}
      <div className="pt-7 px-6 pb-6 flex items-center justify-between relative">
        <Link
          href="/"
          onClick={() => handleNavClick("/")}
          className="group flex flex-col items-center text-center gap-2 focus:outline-none w-full mx-auto"
        >
          {/* Bigger Logo Image */}
          <img
            src="/logo.png"
            alt="Big Stream Logo"
            className="h-16 sm:h-20 max-h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
          />
        </Link>

        {/* Close Button for Mobile Drawer (Top Right Corner) */}
        {onCloseMobile && (
          <button
            onClick={onCloseMobile}
            className="lg:hidden absolute top-4 right-4 p-2 text-[#8C90A0] hover:text-white rounded-full bg-white/5 border border-white/10 hover:bg-white/15 transition-all shadow-md z-10"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 px-4 py-2 space-y-6">
        {navGroups.map((group, groupIdx) => (
          <div key={group.title} className="space-y-2">
            {/* Section Divider for 2nd and 3rd sections */}
            {groupIdx > 0 && (
              <div className="pt-2 mb-4 border-t border-white/[0.06]" />
            )}

            {/* Section Header */}
            <h3 className="px-3 text-[11px] font-semibold tracking-[0.18em] text-[#717585] uppercase">
              {group.title}
            </h3>

            {/* Nav Items */}
            <div className="space-y-1 mt-2">
              {group.items.map((item) => {
                const active = isLinkActive(item.href);
                const IconComponent = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`group relative flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${active
                      ? "text-[#E50914] bg-[#E50914]/10 font-semibold shadow-[0_0_20px_rgba(229,9,20,0.12)] border border-[#E50914]/20"
                      : "text-[#9B9EAB] hover:text-white hover:bg-white/[0.06]"
                      }`}
                  >
                    {/* Active Left Pill Indicator */}
                    {active && (
                      <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#E50914] rounded-r-full shadow-[0_0_8px_#E50914]" />
                    )}

                    {/* Icon */}
                    <IconComponent
                      className={`w-[19px] h-[19px] transition-colors duration-200 ${active
                        ? "text-[#E50914] fill-[#E50914]/20"
                        : "text-[#8C90A0] group-hover:text-white"
                        }`}
                    />

                    {/* Label */}
                    <span className="flex-1 tracking-wide">{item.name}</span>

                    {/* Optional indicator dots or badges */}
                    {item.name === "Recent" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_6px_#E50914]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Sign In CTA Footer */}
      <div className="p-4 border-t border-white/[0.06] bg-[#0E0F15]/80 mt-auto">
        <Link
          href="/login"
          onClick={() => handleNavClick("/login")}
          className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold bg-[#E50914] text-white hover:bg-[#FF0F1A] shadow-lg shadow-[#E50914]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <LogIn className="w-4 h-4" />
          <span>Sign In</span>
        </Link>
      </div>

      {/* Search Modal overlay component */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );

  return (
    <>
      {/* Desktop Permanent Sticky Left Sidebar (Visible lg: breakpoint and up) */}
      <aside className="hidden lg:block fixed top-0 left-0 bottom-0 w-64 p-3 z-40 pointer-events-auto">
        {sidebarContent}
      </aside>

      {/* Mobile Slide-Over Drawer Overlay (Right Side) */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={onCloseMobile}
          />
          {/* Drawer Content - Right Aligned */}
          <div className="relative w-72 max-w-[85vw] h-full p-2 z-10 animate-in slide-in-from-right duration-300">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
