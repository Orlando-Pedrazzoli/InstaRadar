import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { UserSearch, Info, Users, BarChart } from "lucide-react";

export const metadata = {
  title: 'Instagram Profile Viewer | Anonymous Profile Analyzer | InstaRadar',
  description: 'View any public Instagram profile anonymously. See bio, follower count, and recent posts without logging in.',
};

export default function ProfileViewerPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Profile Viewer"
        subtitle="View full profile information, bio, and analytics anonymously. No account needed to browse public Instagram profiles."
      >
        <SearchBox placeholder="Enter Instagram username..." buttonText="View Profile" size="large" />
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: UserSearch, label: "Full Bio", desc: "View the complete account biography." },
              { icon: Info, label: "Account Info", desc: "See category, website, and business info." },
              { icon: Users, label: "Follower Stats", desc: "Check accurate follower and following counts." },
              { icon: BarChart, label: "Engagement", desc: "Analyze post frequency and engagement rate." }
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

          <div className="glass-card p-8 rounded-3xl border border-white/5 opacity-50 grayscale pointer-events-none">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="w-32 h-32 rounded-full bg-zinc-800 animate-pulse" />
              <div className="flex-1 space-y-4">
                <div className="h-8 w-48 bg-zinc-800 rounded animate-pulse mx-auto md:mx-0" />
                <div className="flex gap-6 justify-center md:justify-start">
                  {[1, 2, 3].map(i => <div key={i} className="h-4 w-16 bg-zinc-800 rounded animate-pulse" />)}
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-zinc-800 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-zinc-800 rounded animate-pulse mx-auto md:mx-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
