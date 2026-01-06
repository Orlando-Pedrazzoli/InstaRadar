import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { Star, Shield, Zap, Download } from "lucide-react";

export const metadata = {
  title: 'Instagram Highlights Downloader | Save Highlights | InstaRadar',
  description: 'Download Instagram story highlights in HD quality. Save saved stories from any public profile permanently.',
};

export default function HighlightsDownloaderPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Highlights Downloader"
        subtitle="Download any public Instagram story highlight in original HD quality. Save your favorite collections of stories directly to your device."
      >
        <SearchBox placeholder="Enter Instagram username..." buttonText="View Highlights" size="large" />
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Star, title: "Permanent Access", desc: "Download highlights even if the original story is over 24h old." },
              { icon: Shield, title: "Private Fetch", desc: "Access and save highlights without leaving any trace." },
              { icon: Download, title: "Full Collection", desc: "Save all media from a specific highlight category at once." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl glass-card border border-white/5 text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
