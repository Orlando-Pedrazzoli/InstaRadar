import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { LayoutGrid, Image as ImageIcon, MessageSquare, Heart } from "lucide-react";

export const metadata = {
  title: 'Instagram Post Viewer | View Posts Anonymously | InstaRadar',
  description: 'View any public Instagram post, photo, or carousel anonymously. No account needed, 100% private.',
};

export default function PostViewerPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Post Viewer"
        subtitle="Browse and view any public Instagram post, carousel, or photo anonymously. No login required to see full-sized images and captions."
      >
        <SearchBox placeholder="Enter username or paste post URL..." buttonText="View Posts" size="large" />
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: ImageIcon, label: "Full HD Photos", desc: "View posts in their original high-resolution quality." },
              { icon: LayoutGrid, label: "Carousel Support", desc: "Browse through all images in a carousel post." },
              { icon: MessageSquare, label: "Read Captions", desc: "View full captions and hashtags without logging in." },
              { icon: Heart, label: "Like Count", desc: "Check accurate like and comment counts for any post." }
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 opacity-30 grayscale pointer-events-none">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="aspect-square bg-zinc-800 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
