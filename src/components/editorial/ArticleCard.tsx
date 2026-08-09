import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <div className="group relative rounded-2xl overflow-hidden bg-[#111318] border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-2xl hover:border-[#E50914]/40 transition-all duration-300">
        <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-black">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase font-bold bg-[#E50914] text-white">
              FEATURED STORY
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-[#92959D] font-mono">
              <span>{article.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E50914]" />
                {article.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <Link href={`/hifm/${article.slug}`}>
              <h2 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-white group-hover:text-[#E50914] transition-colors leading-tight">
                {article.title}
              </h2>
            </Link>

            <p className="text-sm sm:text-base text-[#92959D] font-light leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-9 h-9 rounded-full object-cover border border-white/20"
              />
              <div>
                <p className="text-xs font-bold text-white">{article.author.name}</p>
                <p className="text-[10px] text-[#92959D] font-mono">{article.author.role}</p>
              </div>
            </div>

            <Link
              href={`/hifm/${article.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914] text-white font-semibold text-xs hover:bg-[#FF0F1A] transition-colors shadow-lg shadow-[#E50914]/30"
            >
              <span>Read Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative rounded-xl overflow-hidden bg-[#111318] border border-white/10 flex flex-col justify-between hover:border-[#E50914]/40 transition-all duration-300">
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-black/60 backdrop-blur-md text-white border border-white/10">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[11px] text-[#92959D] font-mono">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <Link href={`/hifm/${article.slug}`}>
            <h3 className="text-lg font-serif-editorial font-bold text-white group-hover:text-[#E50914] transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>

          <p className="text-xs text-[#92959D] font-light line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-[#92959D] font-medium">
            By {article.author.name}
          </span>
          <Link
            href={`/hifm/${article.slug}`}
            className="text-xs font-semibold text-[#E50914] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
          >
            <span>Read</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
