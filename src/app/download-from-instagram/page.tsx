import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { ToolCard } from "@/components/ToolCard";
import { Download, Image, Video, Clock, Star, User } from "lucide-react";

export const metadata = {
  title: 'Instagram Downloader | Save Videos, Reels & Posts | InstaRadar',
  description: 'Download Instagram Videos, Reels, Stories and Posts in HD quality. Free, fast and no watermark.',
};

const downloadTools = [
  { name: 'Posts', description: 'Save photos and carousels in high resolution.', icon: 'Image', href: '/download-from-instagram/post' },
  { name: 'Reels', description: 'Download short videos and reels in HD.', icon: 'Video', href: '/download-from-instagram/reel' },
  { name: 'Stories', description: 'Save 24h stories before they expire.', icon: 'Clock', href: '/download-from-instagram/story' },
  { name: 'Highlights', description: 'Download saved highlights from any profile.', icon: 'Star', href: '/download-from-instagram/highlights' },
  { name: 'Profile Picture', description: 'Get HD version of any profile picture.', icon: 'User', href: '/download-from-instagram/profile-picture' },
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Downloader"
        subtitle="Download Videos, Reels, Stories & Posts in HD Quality. Save any content from Instagram directly to your device for free."
      >
        <SearchBox placeholder="Paste Instagram URL here..." buttonText="Download" size="large" className="mb-8" />
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Download className="h-4 w-4 text-primary" />
            Unlimited Downloads
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            Fast & Reliable
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-primary" />
            HD Quality
          </div>
        </div>
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Supported <span className="text-gradient">Content Types</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Choose what you want to download from Instagram today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {downloadTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-12">How to <span className="text-gradient">Download</span></h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: "1", t: "Copy URL", d: "Find the content you want on Instagram and copy its link." },
              { n: "2", t: "Paste Link", d: "Paste the URL into our search box above." },
              { n: "3", t: "Save Content", d: "Click Download and choose the quality to save." }
            ].map(step => (
              <div key={step.n} className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold mx-auto glow-sm">
                  {step.n}
                </div>
                <h3 className="text-xl font-bold">{step.t}</h3>
                <p className="text-zinc-400">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
