import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { FeatureCard } from "@/components/FeatureCard";
import { StepCard } from "@/components/StepCard";
import { Activity, BarChart3, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'Instagram Tracker | See Who They Follow & Like Secretly | InstaRadar',
  description: 'Track any public Instagram account activity without them knowing. Monitor follows, unfollows, likes and comments anonymously.',
};

const trackerFeatures = [
  {
    icon: <Activity className="h-6 w-6 text-white" />,
    title: "Activity Monitoring",
    description: "Track follows, unfollows, and likes in real-time. Get notified immediately when activity occurs.",
    badge: "Real-time"
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    title: "Interest Analysis",
    description: "AI-powered interest tags based on engagement patterns and accounts followed.",
    badge: "AI Powered"
  },
  {
    icon: <Mail className="h-6 w-6 text-white" />,
    title: "Weekly Reports",
    description: "Automated activity reports delivered straight to your email every week.",
    badge: "Pro"
  }
];

const trackerSteps = [
  {
    number: "01",
    title: "Enter Username",
    description: "Enter the Instagram username you want to track."
  },
  {
    number: "02",
    title: "System Monitors",
    description: "Our system monitors their public activity 24/7 anonymously."
  },
  {
    number: "03",
    title: "Get Reports",
    description: "Get detailed reports on follows, likes & interest patterns."
  }
];

export default function InstagramTrackerPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="100% Anonymous Tracking"
        title="Instagram Tracker | See Activity Secretly"
        subtitle="Track any public Instagram account's activity without them knowing. Monitor follows, unfollows, likes and comments in real-time."
      >
        <SearchBox 
          placeholder="Enter Instagram username..." 
          buttonText="Start Tracking" 
          size="large"
          className="mb-8"
        />
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            No login required
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            100% Undetectable
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" />
            Works 24/7
          </div>
        </div>
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {trackerFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It <span className="text-gradient">Works</span>
              </h2>
              <div className="space-y-10">
                {trackerSteps.map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-zinc-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="glass-card p-6 rounded-3xl border border-white/10 glow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-lg font-bold">Sample Report</h4>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold">Live</span>
                </div>
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-sm text-zinc-400 mb-1">Recent Follows</p>
                    <p className="text-xl font-bold text-white">12 new accounts this week</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-sm text-zinc-400 mb-1">Top Interests</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["Fashion", "Travel", "Fitness", "Tech"].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-lg bg-primary/20 text-primary text-xs font-medium border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-sm text-zinc-400 mb-1">Activity Peak</p>
                    <p className="text-xl font-bold text-white">9PM - 11PM (UTC)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Tracking Now - <span className="text-gradient">First Report Free</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Join thousands of users who monitor Instagram accounts accurately and anonymously.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white px-8 py-7 text-lg rounded-xl">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/plan">
              <Button size="lg" variant="outline" className="px-8 py-7 text-lg rounded-xl">
                View Pro Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
