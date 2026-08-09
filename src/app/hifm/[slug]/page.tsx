"use client";

import React, { use } from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import { HIFM_ARTICLES } from "@/data/articles";
import { ArrowLeft, Clock, Calendar, Share2, BookOpen } from "lucide-react";

export default function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const article = HIFM_ARTICLES.find((a) => a.slug === slug) || HIFM_ARTICLES[0];

  return (
    <MainLayout>
      <main className="flex-1 pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          <Link
            href="/hifm"
            className="inline-flex items-center gap-1.5 text-xs text-[#92959D] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to HIFM Magazine</span>
          </Link>

          {/* Article Header */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-xs font-mono font-bold uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{article.category}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif-editorial font-bold text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="text-xs font-bold text-white">{article.author.name}</p>
                  <p className="text-[10px] text-[#92959D] font-mono">{article.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-[#92959D] font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#E50914]" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Article Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover filter brightness-95"
            />
          </div>

          {/* Body Article Text */}
          <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-[#92959D] font-light leading-relaxed font-serif">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="first-letter:text-4xl first-letter:font-bold first-letter:text-white first-letter:mr-2 first-letter:float-left">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share Footer */}
          <div className="pt-8 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/hifm"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>More Magazine Stories</span>
            </Link>

            <button
              onClick={() => alert("Story link copied to clipboard!")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-xs text-[#92959D] hover:text-white transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>
        </article>
      </main>

      <Footer />
    </MainLayout>
  );
}
