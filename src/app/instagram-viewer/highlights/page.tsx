import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { Star, Download, Eye, Shield } from "lucide-react";

export const metadata = {
  title: 'Instagram Highlights Viewer | Watch Highlights Anonymously | InstaRadar',
  description: 'View and download Instagram story highlights anonymously. Access saved stories without leaving a trace.',
};

export default function HighlightsViewerPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Highlights Viewer"
        subtitle="Watch and download Instagram highlights anonymously. Access permanently saved stories from any public profile without an account."
      >
        <SearchBox placeholder="Enter Instagram username..." buttonText="View Highlights" size="large" />
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Star, label: "View Highlights", desc: "Watch all saved story highlights on any profile." },
              { icon: Download, label: "Save Media", desc: "Download high-quality photos and videos from highlights." },
              { icon: Eye, label: "Total Anonymity", desc: "View highlights without notifying the account owner." },
              { icon: Shield, label: "Secure Fetch", desc: "Safe and private data retrieval for all content." }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl glass-card border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold mb-2">{feature.label}</h3>
                <p className="text-sm text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 justify-center opacity-30 grayscale pointer-events-none">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-full bg-zinc-800 border-2 border-zinc-700 p-1 animate-pulse" />
                <div className="h-3 w-12 bg-zinc-800 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
