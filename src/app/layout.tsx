import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 🔥 IMPORT NAVBAR
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arya Dev",
  description: "Portfolio Website Arya Dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-900 text-white">

        {/* 🔥 NAVBAR MASUK DI SINI */}
        <Navbar />

        {/* 🔥 KONTEN HALAMAN */}
        <main className="flex-1 pt-20">
          {children}
        </main>

      </body>
    </html>
  );
}