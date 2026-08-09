import React from "react";
import Link from "next/link";
import { Film, ShieldCheck, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#08090B] border-t border-white/[0.08] text-[#92959D] relative overflow-hidden">
      {/* Subtle top crimson glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#E50914] flex items-center justify-center shadow-lg shadow-[#E50914]/30">
                <Film className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-2xl tracking-[0.2em] text-white">
                BIG<span className="text-[#E50914]">.</span>STREAM
              </span>
            </Link>
            <p className="text-sm text-[#92959D] max-w-sm font-light leading-relaxed">
              Entertainment beyond the screen. Delivering Big Screen Entertainment Group (Stock: BSEG) originals, independent festival cinema, and digital media worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/[0.05] border border-white/10 text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                OTC: BSEG
              </span>
              <span className="text-xs text-[#92959D]">Roku & Web Platform</span>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/featured" className="hover:text-white transition-colors">
                  Featured Films
                </Link>
              </li>
              <li>
                <Link href="/recently-added" className="hover:text-white transition-colors">
                  Recently Added
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/hifm" className="hover:text-white transition-colors">
                  HIFM Magazine
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Big Stream
                </Link>
              </li>
              <li>
                <Link href="/about/bseg" className="hover:text-white transition-colors">
                  BSEG Corporate
                </Link>
              </li>
              <li>
                <Link href="/about/bseg#leadership" className="hover:text-white transition-colors">
                  Executive Team
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  Support & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Account */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold">
              Legal & Account
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/user" className="hover:text-white transition-colors">
                  User Portal
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Account Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-white transition-colors">
                  Register Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#92959D]">
          <p>© 2026 Big Stream Entertainment. All rights reserved. Owned by Big Screen Entertainment Group Inc.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/support" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
