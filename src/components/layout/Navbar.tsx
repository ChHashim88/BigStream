"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, Film, Bell, Check, Sparkles, Clapperboard, Newspaper, ShieldCheck } from "lucide-react";
import SearchModal from "../search/SearchModal";

interface NavbarProps {
  onOpenMobileSidebar?: () => void;
}

export default function Navbar({ onOpenMobileSidebar }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const [notifications, setNotifications] = useState([
    {
      id: "1",
      title: "New 4K Release",
      message: "Dirty Love (2025) is now streaming in 4K Ultra HD & Lossless Audio.",
      time: "10m ago",
      read: false,
      href: "/movie/dirty-love",
      icon: Clapperboard,
      color: "text-[#E50914]",
    },
    {
      id: "2",
      title: "Featured Update",
      message: "Exclusive Director Retrospective added for A Mosquito-Man.",
      time: "1h ago",
      read: false,
      href: "/movie/a-mosquito-man",
      icon: Sparkles,
      color: "text-amber-400",
    },
    {
      id: "3",
      title: "HIFM Spotlight",
      message: "Hollywood International Filmmaker Magazine Issue #42 is live.",
      time: "3h ago",
      read: true,
      href: "/hifm",
      icon: Newspaper,
      color: "text-cyan-400",
    },
    {
      id: "4",
      title: "VIP Account Active",
      message: "Your Ultra 4K Cinema Pass is active. Enjoy ad-free streaming.",
      time: "1d ago",
      read: true,
      href: "/user?tab=settings",
      icon: ShieldCheck,
      color: "text-emerald-400",
    },
  ]);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  const markSingleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            {/* Mobile Brand Logo & Drawer Toggle (Left Balance) */}
            <div className="flex items-center gap-3 lg:flex-1">
              <div className="lg:hidden flex items-center gap-3">
                <button
                  onClick={onOpenMobileSidebar}
                  className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors border border-white/10"
                  aria-label="Open sidebar menu"
                >
                  <Menu className="w-5 h-5 text-[#E50914]" />
                </button>

                <Link href="/" className="flex flex-col items-center justify-center gap-0.5 focus:outline-none">
                  <img
                    src="/logo.png"
                    alt="Big Stream Logo"
                    className="h-10 sm:h-14 w-auto object-contain"
                  />
                  <span className="font-extrabold text-[10px] sm:text-xs tracking-[0.18em] text-white font-sans uppercase">
                    CINEMA<span className="text-[#E50914]">.</span>STREAM
                  </span>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation Links (Centered) */}
            <nav className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 relative ${
                      isActive
                        ? "text-white font-semibold bg-white/[0.08]"
                        : "text-[#92959D] hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#E50914] rounded-full shadow-[0_0_8px_#E50914]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions (Right Balance & Notifications Dropdown) */}
            <div className="flex items-center justify-end space-x-2.5 sm:space-x-3 lg:flex-1 relative" ref={dropdownRef}>
              {/* Quick Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open Search"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#92959D] hover:text-white border border-white/10 transition-all text-xs"
              >
                <Search className="w-3.5 h-3.5 text-[#E50914]" />
                <span className="hidden sm:inline font-medium">Search...</span>
              </button>

              {/* Notifications Button & Popover Menu */}
              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  aria-label="Notifications"
                  className="relative p-2 rounded-full text-[#92959D] hover:text-white hover:bg-white/[0.08] transition-all border border-transparent hover:border-white/10"
                >
                  <Bell className="w-4 h-4" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E50914] shadow-[0_0_6px_#E50914]" />
                  )}
                </button>

                {/* Notifications Dropdown Panel */}
                {notificationsOpen && (
                  <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-[#111318]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Panel Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#08090B] border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-[#E50914]" />
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                          Notifications
                        </h4>
                        {unreadCount > 0 && (
                          <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-[#E50914] text-white">
                            {unreadCount}
                          </span>
                        )}
                      </div>
                      {unreadCount > 0 && (
                        <button
                          onClick={markAllRead}
                          className="text-[11px] text-[#92959D] hover:text-white font-mono flex items-center gap-1 transition-colors"
                        >
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Mark all read</span>
                        </button>
                      )}
                    </div>

                    {/* Notification Items List */}
                    <div className="max-h-80 overflow-y-auto divide-y divide-white/5 custom-scrollbar">
                      {notifications.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            onClick={() => {
                              markSingleRead(item.id);
                              setNotificationsOpen(false);
                            }}
                            className={`flex items-start gap-3 p-3.5 transition-colors hover:bg-white/[0.04] ${
                              !item.read ? "bg-[#E50914]/[0.04]" : ""
                            }`}
                          >
                            <div className={`p-2 rounded-xl bg-white/5 border border-white/10 shrink-0 ${item.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0 space-y-0.5">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white truncate">
                                  {item.title}
                                </span>
                                <span className="text-[10px] font-mono text-[#7A7E8D]">
                                  {item.time}
                                </span>
                              </div>
                              <p className="text-xs text-[#92959D] font-light leading-snug line-clamp-2">
                                {item.message}
                              </p>
                            </div>
                            {!item.read && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shrink-0 mt-1.5 shadow-[0_0_6px_#E50914]" />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
