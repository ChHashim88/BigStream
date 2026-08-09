"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import HIFMHeader from "@/components/editorial/HIFMHeader";
import ArticleCard from "@/components/editorial/ArticleCard";
import { HIFM_ARTICLES } from "@/data/articles";

export default function HIFMPage() {
  const featuredArticle = HIFM_ARTICLES[0];
  const gridArticles = HIFM_ARTICLES.slice(1);

  return (
    <MainLayout>
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Magazine Header */}
          <HIFMHeader />

          {/* Featured Main Article */}
          {featuredArticle && (
            <ArticleCard article={featuredArticle} featured={true} />
          )}

          {/* Secondary Grid */}
          <div className="space-y-6 pt-6">
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#E50914] font-bold">
              Latest Editorial Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gridArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </MainLayout>
  );
}
