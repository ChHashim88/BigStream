"use client";

import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import { Search, User, Tv, Key, CreditCard, Wrench, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function SupportPage() {
  const [searchTopic, setSearchTopic] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { title: "Account & Profile", icon: User, desc: "Manage usernames, profile avatars, and genre preferences." },
    { title: "Streaming Quality", icon: Tv, desc: "Resolving 4K playback, buffering, or audio sync settings." },
    { title: "Password & Security", icon: Key, desc: "Resetting passwords, two-factor authentication, and active sessions." },
    { title: "Billing & Subscriptions", icon: CreditCard, desc: "Payment methods, invoices, OTC BSEG stock benefits, and cancellations." },
    { title: "Technical Issues", icon: Wrench, desc: "Roku app troubleshooting, browser compatibility, and offline downloads." },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <MainLayout>
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
          {/* Support Hero Search */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#E50914] font-bold">
              Big Stream Support Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              How Can We Help You Today?
            </h1>
            <p className="text-sm sm:text-base text-[#92959D] font-light">
              Search support articles or select a topic below to troubleshoot your Big Stream experience.
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="w-5 h-5 text-[#E50914] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTopic}
                onChange={(e) => setSearchTopic(e.target.value)}
                placeholder="Search error code, streaming issue, or billing..."
                className="w-full bg-[#111318] border border-white/15 rounded-full pl-12 pr-6 py-3.5 text-sm text-white placeholder-[#92959D] focus:outline-none focus:border-[#E50914] shadow-2xl"
              />
            </div>
          </div>

          {/* Topic Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#111318] border border-white/10 rounded-2xl p-6 space-y-3 hover:border-[#E50914]/40 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E50914]/20 border border-[#E50914]/40 flex items-center justify-center text-[#E50914] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  <p className="text-xs text-[#92959D] leading-relaxed">{cat.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Support Form Section */}
          <div className="bg-[#181A20] border border-white/10 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-[#E50914]" />
              <h2 className="text-2xl font-bold text-white">Contact Big Stream Support</h2>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 space-y-2 text-center">
                <CheckCircle className="w-8 h-8 mx-auto" />
                <h4 className="font-bold text-base">Ticket Received</h4>
                <p className="text-xs text-white/80">
                  Our technical support team will contact you at your email address within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#92959D]">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Turner"
                      className="w-full bg-[#08090B] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50914]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#92959D]">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      className="w-full bg-[#08090B] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50914]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#92959D]">Describe Your Problem</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your streaming device, error messages, or account issue..."
                    className="w-full bg-[#08090B] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#E50914]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#E50914] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#FF0F1A] shadow-xl transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Ticket</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </MainLayout>
  );
}
