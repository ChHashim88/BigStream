"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalLayout from "@/components/legal/LegalLayout";
import { TERMS_OF_SERVICE } from "@/data/terms";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <LegalLayout
          title="Terms of Service"
          subtitle="Please read these Terms of Use carefully before using Big Stream Entertainment. The platform is owned and operated by Big Screen Entertainment Group Inc. (Stock: BSEG)."
          lastUpdated="February 1, 2026"
          sections={TERMS_OF_SERVICE}
        />
      </main>

      <Footer />
    </div>
  );
}
