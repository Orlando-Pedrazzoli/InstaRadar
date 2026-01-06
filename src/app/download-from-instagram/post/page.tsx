import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { Image as ImageIcon, CheckCircle2, Shield, Zap } from "lucide-react";

export const metadata = {
  title: 'Instagram Post Downloader | Save Photos & Carousels | InstaRadar',
  description: 'Download any Instagram photo or carousel in original HD quality. Fast, free and no registration required.',
};

export default function PostDownloaderPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Post Downloader"
        subtitle="Save any Instagram photo or carousel in its original high-definition quality. Simply paste the link below to start your download."
      >
        <SearchBox placeholder="Paste Instagram post URL here..." buttonText="Download HD" size="large" />
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: ImageIcon, title: "Original Quality", desc: "No compression. Get the highest resolution available." },
              { icon: Shield, title: "Safe & Private", desc: "Your downloads are private and never stored on our servers." },
              { icon: Zap, title: "Instant Access", desc: "Fast processing and direct download links for all content." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl glass-card border border-white/5 text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto glass-card p-8 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold mb-8">How to Copy Post Link?</h2>
            <div className="space-y-6">
              {[
                "Open the Instagram app or website.",
                "Find the post you want to download.",
                "Tap the three dots (⋮) or the share icon.",
                "Select 'Copy Link' from the menu options."
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-zinc-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
