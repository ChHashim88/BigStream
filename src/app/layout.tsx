import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIG STREAM — Premium Cinematic Streaming Platform",
  description:
    "Experience the next generation of cinema, independent filmmaking, and premium digital media on BIG STREAM.",
  keywords: [
    "BIG STREAM",
    "Cinema",
    "Streaming",
    "Movies",
    "Documentary",
    "HIFM",
    "Big Screen Entertainment Group",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark`}>
      <body className="bg-[#08090B] text-[#F5F5F5] font-sans antialiased min-h-screen flex flex-col selection:bg-[#E50914] selection:text-white film-grain">
        {children}
      </body>
    </html>
  );
}
