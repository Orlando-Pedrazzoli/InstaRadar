import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { Eye, Download, Shield, Clock } from "lucide-react";

export const metadata = {
  title: 'Instagram Story Viewer | Watch Anonymously | InstaRadar',
  description: 'View and download Instagram stories and highlights anonymously. Watch without appearing in the viewers list.',
};

export default function StoryViewerPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Story Viewer"
        subtitle="Watch and download Instagram stories anonymously. Stay invisible while viewing any public story or highlight."
      >
        <SearchBox placeholder="Enter Instagram username..." buttonText="View Stories" size="large" />
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl glass-card border border-white/5 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">100% Invisible</h3>
              <p className="text-sm text-zinc-400">The user will never know you watched their stories.</p>
            </div>
            <div className="p-6 rounded-2xl glass-card border border-white/5 text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">HD Downloads</h3>
              <p className="text-sm text-zinc-400">Save stories and highlights in their original quality.</p>
            </div>
            <div className="p-6 rounded-2xl glass-card border border-white/5 text-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">24h Access</h3>
              <p className="text-sm text-zinc-400">View any active story before it disappears.</p>
            </div>
          </div>

          <div className="p-12 rounded-3xl border border-dashed border-white/10 text-center">
            <div className="max-w-sm mx-auto">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-zinc-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-300">No Stories to Show</h3>
              <p className="text-zinc-500 mb-8">Enter a username above to fetch and view active stories anonymously.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 opacity-20 grayscale pointer-events-none">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="aspect-[9/16] rounded-xl bg-zinc-800 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
