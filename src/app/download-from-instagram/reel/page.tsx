import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { Video, Shield, Zap, Film } from "lucide-react";

export const metadata = {
  title: 'Instagram Reel Downloader | Save Videos & Reels | InstaRadar',
  description: 'Download Instagram Reels and Videos in HD quality. Free, fast and no watermark.',
};

export default function ReelDownloaderPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Reel Downloader"
        subtitle="Download any Instagram Reel or video in full HD quality. Save your favorite short videos directly to your gallery for free."
      >
        <SearchBox placeholder="Paste Instagram Reel URL here..." buttonText="Download Reel" size="large" />
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Film, title: "HD Quality", desc: "Download reels in the highest available resolution." },
              { icon: Shield, title: "Private Downloads", desc: "No login needed. We don't track what you download." },
              { icon: Zap, title: "Super Fast", desc: "Get your download link in seconds after pasting the URL." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl glass-card border border-white/5 text-center">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mx-auto mb-6">
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
