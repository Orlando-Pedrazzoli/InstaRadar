import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/lib/auth-context";

export const metadata: Metadata = {
  title: "InstaRadar - Instagram Analytics Platform",
  description: "All-in-One Instagram Tracker and Analyzer. Track followers, view stories anonymously, download content, and discover insights.",
  keywords: ["instagram tracker", "instagram analytics", "follower tracker", "story viewer", "instagram downloader"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background antialiased">
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}