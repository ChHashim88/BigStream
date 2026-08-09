"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import LegalLayout from "@/components/legal/LegalLayout";
import { PRIVACY_POLICY } from "@/data/privacy";

export default function PrivacyPage() {
  return (
    <MainLayout>
      <main className="flex-1 pt-20">
        <LegalLayout
          title="Privacy Policy"
          subtitle="This Privacy Policy describes how Big Stream Entertainment and Big Screen Entertainment Group Inc. (Stock: BSEG) collect, use, and protect your personal information."
          lastUpdated="January 15, 2026"
          sections={PRIVACY_POLICY}
        />
      </main>

      <Footer />
    </MainLayout>
  );
}
