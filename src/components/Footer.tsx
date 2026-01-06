"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Radar, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Instagram Tracker", href: "/instagram-tracker" },
      { label: "Profile Viewer", href: "/instagram-viewer" },
      { label: "Content Downloader", href: "/download-from-instagram" },
      { label: "Email Finder", href: "/instagram-email-finder" },
      { label: "Pricing", href: "/plan" },
    ],
  },
  tools: {
    title: "Tools",
    links: [
      { label: "Story Viewer", href: "/instagram-viewer/story" },
      { label: "Profile Picture Download", href: "/download-from-instagram/profile-picture" },
      { label: "Reel Downloader", href: "/download-from-instagram/reel" },
      { label: "Post Downloader", href: "/download-from-instagram/post" },
      { label: "View Anonymously", href: "/view-instagram-anonymously" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Toolkit", href: "/toolkit" },
      { label: "FAQ", href: "/faq" },
      { label: "Catch Cheaters", href: "/catch-instagram-cheaters" },
      { label: "Support", href: "/faq" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "About Us", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
};

export function Footer() {
  const pathname = usePathname();

  // Hide Footer on dashboard routes
  if (pathname?.startsWith('/dashboard')) return null;

  return (
    <footer className="bg-[#08080c] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Radar className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Insta<span className="text-gradient">Radar</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 mb-6">
              The all-in-one Instagram analytics and tracking platform trusted by 50,000+ users worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} InstaRadar. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
