import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MovieFinder - Your Mobile Movie Discovery App",
  description: "Discover, track, and share your favorite movies with MovieFinder. A mobile app designed to help your movie-watching experience.",
  keywords: ["movie app", "mobile app", "movie discovery", "film tracker"],
  authors: [{ name: "MovieFinder Team" }],
  openGraph: {
    title: "MovieFinder - Your Mobile Movie Discovery App",
    description: "Discover, track, and share your favorite movies with MovieFinder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
