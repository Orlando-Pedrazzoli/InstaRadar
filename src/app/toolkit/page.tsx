"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Download,
  Activity,
  Mail,
  UserSearch,
  Image,
  Film,
  CircleDot,
  Bookmark,
  User,
  Hash,
  Search,
  AlertTriangle,
  Database,
  Calculator,
  UserMinus,
  Sparkles,
} from "lucide-react";

const toolCategories = [
  {
    title: "Viewers",
    description: "View Instagram content anonymously",
    tools: [
      {
        name: "Story Viewer",
        description: "Watch stories without being seen",
        href: "/instagram-viewer/story-viewer",
        icon: CircleDot,
        badge: "Free",
      },
      {
        name: "Profile Viewer",
        description: "View complete profiles anonymously",
        href: "/instagram-viewer/profile-viewer",
        icon: User,
        badge: "Free",
      },
      {
        name: "Post Viewer",
        description: "Browse posts without logging in",
        href: "/instagram-viewer",
        icon: Image,
        badge: "Free",
      },
      {
        name: "Highlights Viewer",
        description: "View story highlights privately",
        href: "/instagram-viewer",
        icon: Bookmark,
        badge: "Free",
      },
    ],
  },
  {
    title: "Downloaders",
    description: "Download Instagram content in HD",
    tools: [
      {
        name: "Post Downloader",
        description: "Download photos and carousels",
        href: "/download-from-instagram/post",
        icon: Image,
        badge: "Free",
      },
      {
        name: "Reel Downloader",
        description: "Save reels and videos",
        href: "/download-from-instagram/reel",
        icon: Film,
        badge: "Free",
      },
      {
        name: "Story Downloader",
        description: "Download stories before they expire",
        href: "/download-from-instagram/story",
        icon: CircleDot,
        badge: "Free",
      },
      {
        name: "Highlights Downloader",
        description: "Save story highlights",
        href: "/download-from-instagram/highlights",
        icon: Bookmark,
        badge: "Free",
      },
      {
        name: "Profile Picture",
        description: "Download profile pics in HD",
        href: "/download-from-instagram/profile-picture",
        icon: User,
        badge: "Free",
      },
    ],
  },
  {
    title: "Analytics",
    description: "Track and analyze Instagram activity",
    tools: [
      {
        name: "Follower Tracker",
        description: "Monitor follower changes",
        href: "/instagram-tracker/follower-tracker",
        icon: Activity,
        badge: "Pro",
      },
      {
        name: "Unfollower Tracker",
        description: "See who unfollowed you",
        href: "/instagram-tracker",
        icon: UserMinus,
        badge: "Pro",
      },
      {
        name: "Activity Tracker",
        description: "Track likes, comments & follows",
        href: "/instagram-tracker/activity-tracker",
        icon: Eye,
        badge: "Pro",
      },
      {
        name: "Engagement Calculator",
        description: "Calculate engagement rates",
        href: "/toolkit/engagement-calculator",
        icon: Calculator,
        badge: "Free",
      },
    ],
  },
  {
    title: "Discovery",
    description: "Find and extract valuable data",
    tools: [
      {
        name: "Email Finder",
        description: "Extract emails from profiles",
        href: "/instagram-email-finder",
        icon: Mail,
        badge: "Pro",
      },
      {
        name: "Hashtag Generator",
        description: "Find trending hashtags",
        href: "/toolkit/hashtag-generator",
        icon: Hash,
        badge: "Free",
      },
      {
        name: "Shadowban Checker",
        description: "Check if account is shadowbanned",
        href: "/toolkit/shadowban-checker",
        icon: AlertTriangle,
        badge: "Free",
      },
      {
        name: "Celebrity Database",
        description: "Browse verified accounts",
        href: "/toolkit/celebrity-database",
        icon: Database,
        badge: "Free",
      },
      {
        name: "AI Discover",
        description: "AI-powered account discovery",
        href: "/instagram-email-finder",
        icon: Sparkles,
        badge: "Pro",
      },
    ],
  },
];

export default function ToolkitPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Toolkit
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Instagram <span className="text-gradient">Tools & Utilities</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A comprehensive collection of tools to view, download, track, and analyze Instagram content.
          </p>
        </div>

        <div className="space-y-16">
          {toolCategories.map((category) => (
            <section key={category.title}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
                <p className="text-zinc-400">{category.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="group relative p-5 rounded-xl glass-card hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-500/20 group-hover:from-primary/30 group-hover:to-cyan-500/30 transition-colors">
                        <tool.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge
                        variant={tool.badge === "Pro" ? "default" : "secondary"}
                        className={tool.badge === "Pro" ? "bg-gradient-primary border-0" : ""}
                      >
                        {tool.badge}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-zinc-400">{tool.description}</p>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 glass-card rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need More <span className="text-gradient">Features?</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Upgrade to a Pro plan to unlock advanced tracking, AI-powered insights, email extraction, and priority support.
          </p>
          <Link href="/plan">
            <button className="px-8 py-3 rounded-xl bg-gradient-primary text-white font-semibold hover:opacity-90 transition-opacity">
              View Pricing Plans
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
