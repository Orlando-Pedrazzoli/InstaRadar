import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { User, Shield, Zap, Download, Eye } from "lucide-react";

export const metadata = {
  title: 'Instagram Profile Picture Downloader | Save HD Avatars | InstaRadar',
  description: 'Download any Instagram profile picture in full HD resolution. Fast, free and anonymous.',
};

export default function ProfilePictureDownloaderPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Profile Picture Downloader"
        subtitle="Download any Instagram profile picture in its original full HD resolution. View and save high-quality avatars anonymously."
      >
        <SearchBox placeholder="Enter Instagram username..." buttonText="Download HD" size="large" />
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: User, title: "Full Size HD", desc: "Get the profile picture in the largest size available on Instagram." },
              { icon: Shield, title: "100% Private", desc: "Download avatars without the user ever knowing." },
              { icon: Zap, title: "Instant Link", desc: "No waiting. Get your direct download link immediately." }
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

          <div className="p-12 rounded-3xl border border-dashed border-white/10 text-center flex flex-col items-center">
            <div className="w-48 h-48 rounded-full bg-zinc-800 border-4 border-zinc-700 p-2 mb-8 animate-pulse grayscale opacity-30">
              <div className="w-full h-full rounded-full bg-zinc-700 flex items-center justify-center">
                <Eye className="h-12 w-12 text-zinc-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-zinc-300">Profile Preview</h3>
            <p className="text-zinc-500 max-w-sm mx-auto">
              Enter a username above to fetch and download the profile picture in HD quality.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
