import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090B",
};

export const metadata: Metadata = {
  title: {
    default: "BIG STREAM — Premium Cinematic Streaming Platform",
    template: "%s | BIG STREAM Cinema",
  },
  description:
    "Experience the next generation of cinema, independent filmmaking, and premium 4K digital media on BIG STREAM.",
  keywords: [
    "BIG STREAM",
    "Cinema Platform",
    "4K Streaming",
    "Independent Movies",
    "Documentary",
    "HIFM Magazine",
    "Big Screen Entertainment Group",
    "OTC BSEG",
  ],
  authors: [{ name: "Big Screen Entertainment Group" }],
  creator: "Big Screen Entertainment Group",
  publisher: "BIG STREAM",
  metadataBase: new URL("https://bigstream.com"),
  openGraph: {
    title: "BIG STREAM — Premium Cinematic Streaming Platform",
    description:
      "Stream festival premieres, independent feature films, and exclusive Hollywood International Filmmaker Magazine archives.",
    url: "https://bigstream.com",
    siteName: "BIG STREAM",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "BIG STREAM Cinema Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BIG STREAM — Premium Cinematic Streaming Platform",
    description:
      "Stream festival premieres, independent feature films, and exclusive Hollywood International Filmmaker Magazine archives.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favi.png?v=2",
    shortcut: "/favi.png?v=2",
    apple: "/favi.png?v=2",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark`}>
      <head>
        <link rel="icon" href="/favi.png?v=2" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/favi.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/favi.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#08090B] text-[#F5F5F5] font-sans antialiased min-h-screen flex flex-col selection:bg-[#E50914] selection:text-white film-grain">
        {children}
      </body>
    </html>
  );
}
