"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LegalLayout from "@/components/legal/LegalLayout";
import { PRIVACY_POLICY } from "@/data/privacy";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F5] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <LegalLayout
          title="Privacy Policy"
          subtitle="This Privacy Policy describes how Big Stream Entertainment and Big Screen Entertainment Group Inc. (Stock: BSEG) collect, use, and protect your personal information."
          lastUpdated="January 15, 2026"
          sections={PRIVACY_POLICY}
        />
      </main>

      <Footer />
    </div>
  );
}
