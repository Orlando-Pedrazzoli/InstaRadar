import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { Clock, Shield, Zap, Download } from "lucide-react";

export const metadata = {
  title: 'Instagram Story Downloader | Save Stories Anonymously | InstaRadar',
  description: 'Download Instagram Stories in HD quality. Save 24h stories before they expire anonymously.',
};

export default function StoryDownloaderPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Story Downloader"
        subtitle="Download and save Instagram stories anonymously. Get high-quality photos and videos from any public story before they disappear."
      >
        <SearchBox placeholder="Enter Instagram username..." buttonText="View Stories" size="large" />
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Clock, title: "24h Access", desc: "Download active stories before the 24-hour limit." },
              { icon: Shield, title: "Stay Anonymous", desc: "Download stories without appearing in the viewer list." },
              { icon: Download, title: "Batch Download", desc: "Save multiple stories from a profile at once." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl glass-card border border-white/5 text-center">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-6">
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
