"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F5] flex flex-col relative selection:bg-[#E50914] selection:text-white">
      {/* Permanent Desktop Left Sidebar & Mobile Drawer */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content Body - Offset on Desktop for Left Sidebar */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0 transition-all duration-300">
        <Navbar onOpenMobileSidebar={() => setMobileSidebarOpen(true)} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
