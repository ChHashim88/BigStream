"use client";

import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import Footer from "@/components/layout/Footer";
import LegalLayout from "@/components/legal/LegalLayout";
import { TERMS_OF_SERVICE } from "@/data/terms";

export default function TermsPage() {
  return (
    <MainLayout>
      <main className="flex-1 pt-20">
        <LegalLayout
          title="Terms of Service"
          subtitle="Please read these Terms of Use carefully before using Big Stream Entertainment. The platform is owned and operated by Big Screen Entertainment Group Inc. (Stock: BSEG)."
          lastUpdated="February 1, 2026"
          sections={TERMS_OF_SERVICE}
        />
      </main>

      <Footer />
    </MainLayout>
  );
}
