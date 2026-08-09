"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Film, LogIn, Lock, Mail, ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }
    window.location.href = "/user";
  };

  return (
    <div className="min-h-screen bg-[#08090B] flex flex-col lg:flex-row text-[#F5F5F5]">
      {/* Left Artwork Column (Desktop) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black overflow-hidden items-center justify-center p-12">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80"
          alt="Cinematic Poster"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-[#08090B]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#08090B]" />
        <div className="absolute inset-0 cinematic-vignette" />

        <div className="relative z-10 max-w-lg space-y-6 text-left">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#E50914] flex items-center justify-center shadow-xl shadow-[#E50914]/50">
              <Film className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-[0.2em] text-white">
              BIG<span className="text-[#E50914]">.</span>STREAM
            </span>
          </Link>

          <h2 className="text-4xl font-extrabold text-white leading-tight font-sans">
            Stream Thousands of Cinematic Originals in 4K HDR.
          </h2>
          <p className="text-sm text-[#92959D] font-light leading-relaxed">
            Experience independent storytelling, film festival premieres, and exclusive HIFM editorial archives.
          </p>
        </div>
      </div>

      {/* Right Login Interface Form */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-12 lg:p-16 max-w-xl mx-auto w-full">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#92959D] hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-extrabold text-white">Welcome Back</h1>
            <p className="text-sm text-[#92959D] font-light">
              Your next story is waiting. Sign in to your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#92959D]">Username or Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#92959D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#111318] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-[#92959D]">Password</label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Password reset instructions sent to your email.");
                  }}
                  className="text-xs text-[#E50914] hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#92959D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#111318] border border-white/10 rounded-xl pl-10 pr-10 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#92959D] hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#E50914] hover:bg-[#FF0F1A] text-white font-semibold text-sm shadow-xl shadow-[#E50914]/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </button>
          </form>

          <p className="text-xs text-center text-[#92959D] mt-6">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#E50914] font-semibold hover:underline">
              Create one now
            </Link>
          </p>
        </div>

        <div className="pt-8 text-center text-xs text-[#92959D] font-mono">
          © 2026 Big Stream Entertainment · BSEG Inc.
        </div>
      </div>
    </div>
  );
}
