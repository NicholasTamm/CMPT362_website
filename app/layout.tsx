import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
  variable: "--font-jetbrains",
  display: "swap",
  src: [
    {
      path: "../public/fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "MovieFinder - Your Mobile Movie Discovery App",
  description:
    "Discover, track, and share your favorite movies with MovieFinder. A mobile app designed to help your movie-watching experience.",
  keywords: ["movie app", "mobile app", "movie discovery", "film tracker"],
  authors: [{ name: "MovieFinder Team" }],
  openGraph: {
    title: "MovieFinder - Your Mobile Movie Discovery App",
    description:
      "Discover, track, and share your favorite movies with MovieFinder.",
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
      <body className={`${jetBrainsMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
