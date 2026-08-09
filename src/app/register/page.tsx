"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Film, UserPlus, Lock, Mail, User, ArrowLeft, Check, AlertCircle } from "lucide-react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Password requirements calculation
  const hasMinLength = password.length >= 8;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!_\-\.\*]/.test(password);

  const passedRequirements = [hasMinLength, hasLetter, hasNumber, hasSymbol].filter(Boolean).length;

  const getStrengthLabel = () => {
    if (!password) return { label: "None", color: "text-[#92959D]", bar: "w-0 bg-transparent" };
    if (passedRequirements <= 2) return { label: "Weak", color: "text-red-400", bar: "w-1/3 bg-red-500" };
    if (passedRequirements === 3) return { label: "Medium", color: "text-amber-400", bar: "w-2/3 bg-amber-500" };
    return { label: "Strong", color: "text-emerald-400", bar: "w-full bg-emerald-500" };
  };

  const strength = getStrengthLabel();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!acceptedTerms) {
      alert("Please accept the Terms of Service.");
      return;
    }
    window.location.href = "/user";
  };

  return (
    <div className="min-h-screen bg-[#08090B] flex flex-col lg:flex-row text-[#F5F5F5]">
      {/* Left Artwork */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black overflow-hidden items-center justify-center p-12">
        <img
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80"
          alt="Cinematic Register Backdrop"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-[#08090B]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#08090B]" />

        <div className="relative z-10 max-w-lg space-y-6">
          <Link href="/" className="inline-flex flex-col items-start gap-2 group">
            <img
              src="/logo.png"
              alt="Big Stream Logo"
              className="h-16 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-[0.2em] text-white group-hover:text-[#E50914] transition-colors">
                BIG<span className="text-[#E50914]">.</span>STREAM
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#7A7E8D] font-mono font-medium uppercase mt-0.5">
                Cinema Platform
              </span>
            </div>
          </Link>
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Build Your Personal Cinema Library.
          </h2>
          <p className="text-sm text-[#92959D] font-light leading-relaxed">
            Create an account to save custom watchlists, track movie progress across devices, and receive curated festival alerts.
          </p>
        </div>
      </div>

      {/* Form Interface */}
      <div className="flex-1 flex flex-col justify-between p-6 sm:p-12 lg:p-16 max-w-xl mx-auto w-full">
        <div>
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#92959D] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link href="/" className="lg:hidden flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Big Stream Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-extrabold text-white">Join Big Stream</h1>
            <p className="text-sm text-[#92959D] font-light">
              Start streaming world-class independent cinema today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-[#92959D]">Username</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#92959D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="CinemaFan2026"
                  className="w-full bg-[#111318] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#92959D]">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#92959D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#111318] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#92959D]">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#92959D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#111318] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>

              {/* Password Strength Meter */}
              {password && (
                <div className="pt-2 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-[#92959D]">Password Strength:</span>
                    <span className={`font-bold ${strength.color}`}>{strength.label}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-300 ${strength.bar}`} />
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-[11px] text-[#92959D] pt-1 font-mono">
                    <span className={hasMinLength ? "text-emerald-400" : ""}>✓ Min 8 characters</span>
                    <span className={hasLetter ? "text-emerald-400" : ""}>✓ Includes letters</span>
                    <span className={hasNumber ? "text-emerald-400" : ""}>✓ One number</span>
                    <span className={hasSymbol ? "text-emerald-400" : ""}>✓ Symbol (! _ - . *)</span>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#92959D]">Confirm Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#92959D] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#111318] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50914]"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2.5 pt-2">
              <input
                type="checkbox"
                id="terms"
                required
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 rounded bg-[#111318] border-white/20 text-[#E50914] focus:ring-[#E50914]"
              />
              <label htmlFor="terms" className="text-xs text-[#92959D] leading-normal">
                I agree to Big Stream's{" "}
                <Link href="/terms" className="text-white underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-white underline">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#E50914] hover:bg-[#FF0F1A] text-white font-semibold text-sm shadow-xl shadow-[#E50914]/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>Create Account</span>
            </button>
          </form>

          <p className="text-xs text-center text-[#92959D] mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#E50914] font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>

        <div className="pt-6 text-center text-xs text-[#92959D] font-mono">
          © 2026 Big Stream Entertainment · BSEG Inc.
        </div>
      </div>
    </div>
  );
}
