"use client";

import React, { useState, Suspense } from "react";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import UserDashboard from "@/components/user/UserDashboard";
import TrailerModal from "@/components/movie/TrailerModal";
import { Movie } from "@/data/movies";

export default function UserPortalPage() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const handlePlayMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsTrailerOpen(true);
  };

  return (
    <MainLayout>
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Suspense fallback={<div className="text-white p-8 text-center">Loading User Portal...</div>}>
            <UserDashboard onPlayMovie={handlePlayMovie} />
          </Suspense>
        </div>
      </main>

      <Footer />

      <TrailerModal
        movie={selectedMovie}
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />
    </MainLayout>
  );
}
