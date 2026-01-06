import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { ToolCard } from "@/components/ToolCard";
import { Eye, UserSearch, Film, LayoutGrid, Star, History } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Anonymous Instagram Viewer | Stories, Posts & Profiles | InstaRadar',
  description: 'View Instagram Stories, Highlights, Posts and Profiles anonymously. No login required, 100% undetectable.',
};

const viewerTools = [
  {
    name: "Story Viewer",
    description: "Watch Instagram stories and highlights without appearing in the viewers list.",
    icon: "Eye",
    href: "/instagram-viewer/story"
  },
  {
    name: "Profile Viewer",
    description: "View full profile information, bio, and follower counts anonymously.",
    icon: "UserSearch",
    href: "/instagram-viewer/profile"
  },
  {
    name: "Post Viewer",
    description: "Browse posts, carousels and captions without an Instagram account.",
    icon: "LayoutGrid",
    href: "/instagram-viewer/post"
  },
  {
    name: "Highlights Viewer",
    description: "Watch saved story highlights anonymously and download them in HD.",
    icon: "Star",
    href: "/instagram-viewer/highlights"
  }
];

const popularSearches = ["cristiano", "leomessi", "selenagomez", "kyliejenner", "therock", "arianagrande"];

export default function InstagramViewerPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Anonymous | Instagram Viewer"
        subtitle="View Stories, Highlights, Posts & Profiles without logging in. Stay 100% invisible while browsing any public account."
      >
        <SearchBox placeholder="Enter username or paste Instagram URL..." buttonText="View Anonymously" size="large" className="mb-8" />
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm text-zinc-500">Popular:</span>
          {popularSearches.map(user => (
            <Link key={user} href={`/instagram-viewer/profile?u=${user}`} className="text-sm text-primary hover:underline">
              @{user}
            </Link>
          ))}
        </div>
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {viewerTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful <span className="text-gradient">Viewing Features</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Explore Instagram content like never before with our advanced viewing tools.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl glass-card border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <History className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Viewing History</h3>
              <p className="text-zinc-400">Keep track of the profiles you've visited recently for quick access later.</p>
            </div>
            <div className="p-8 rounded-3xl glass-card border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6">
                <Film className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">HD Media Preview</h3>
              <p className="text-zinc-400">View photos and videos in their original high-definition quality without compression.</p>
            </div>
            <div className="p-8 rounded-3xl glass-card border border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Stealth Mode</h3>
              <p className="text-zinc-400">Watch stories without triggering the 'seen' receipt or appearing in viewer lists.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
