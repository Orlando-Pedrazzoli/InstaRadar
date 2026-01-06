"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  AlertTriangle, 
  Search, 
  Zap, 
  Eye, 
  Shield, 
  Clock, 
  TrendingUp,
  ChevronRight,
  Star,
  Lock,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const redFlags = [
  {
    icon: Clock,
    title: "Late Night Activity",
    description: "Unusual engagement and follows between 12 AM and 5 AM.",
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: TrendingUp,
    title: "New Connections",
    description: "Sudden increase in following specific types of accounts.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Eye,
    title: "Hidden Interactions",
    description: "Repeated likes and comments on accounts not in mutual circles.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Zap,
    title: "Pattern Changes",
    description: "Significant shifts in normal posting and interaction behavior.",
    color: "from-rose-500/20 to-rose-500/5",
  },
];

const sampleRedFlags = [
  { flag: 'Increased late-night activity', severity: 'medium', detail: 'Active 2AM-4AM, 3 times this week' },
  { flag: 'New attractive followers', severity: 'high', detail: '5 new follows matching suspicious pattern' },
  { flag: 'Repeated likes on same profile', severity: 'low', detail: '@username received 12 likes in 2 days' },
];

const testimonials = [
  {
    name: "Anonymous",
    content: "InstaRadar helped me discover patterns I would have never noticed myself. The detail in the activity reports is incredible.",
    rating: 5,
  },
  {
    name: "J.M.",
    content: "Discreet and accurate. It gave me the peace of mind I needed during a very uncertain time in my relationship.",
    rating: 5,
  },
];

export default function CatchCheatersPage() {
  const [username, setUsername] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleStartTracking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    // Simulation
    setTimeout(() => {
      setIsAnalyzing(false);
      window.location.href = `/login?redirect=/catch-instagram-cheaters&target=${username}`;
    }, 2000);
  };

  return (
    <main className="min-h-screen pt-20">
      <PageHero
        title="Catch Instagram Cheaters"
        subtitle="Monitor suspicious Instagram activity and discover the truth with AI-powered behavioral analysis."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-24">
        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <p className="text-sm text-amber-200/80">
                This tool is for informational purposes only. Please use responsibly and respect privacy boundaries.
              </p>
            </div>

            <form onSubmit={handleStartTracking} className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <Input
                  placeholder="Enter their Instagram username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-12 h-14 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-zinc-500"
                />
              </div>
              <Button 
                type="submit"
                disabled={isAnalyzing}
                className="h-14 px-8 bg-gradient-primary hover:opacity-90 rounded-xl text-white font-bold text-lg"
              >
                {isAnalyzing ? "Analyzing..." : "Start Monitoring"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#08080c]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Signs We Detect</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our AI analyzes public data points to identify behavioral shifts that often correlate with suspicious activity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {redFlags.map((flag) => (
              <div key={flag.title} className="p-6 rounded-2xl glass-card relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${flag.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <flag.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{flag.title}</h3>
                  <p className="text-zinc-400 text-sm">{flag.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How It Works</h2>
              <div className="space-y-8">
                {[
                  { title: "Identify Target", desc: "Enter the Instagram username of the person you want to monitor." },
                  { title: "AI Analysis", desc: "Our system gathers and analyzes public interaction data over time." },
                  { title: "Real-time Alerts", desc: "Receive instant notifications when suspicious patterns are detected." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xl font-bold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-zinc-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Lock className="h-5 w-5 text-zinc-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Sample Report Preview</h3>
              <div className="space-y-4">
                {sampleRedFlags.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">{item.flag}</span>
                      <Badge className={
                        item.severity === 'high' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                        item.severity === 'medium' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                        'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      }>
                        {item.severity.toUpperCase()} SEVERITY
                      </Badge>
                    </div>
                    <p className="text-xs text-zinc-500">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 rounded-2xl bg-gradient-primary/20 border border-primary/30 text-center blur-[2px] hover:blur-none transition-all cursor-pointer group">
                <p className="text-white font-bold mb-4">Upgrade to see full report</p>
                <Button className="w-full bg-gradient-primary">
                  View Full Insights
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 text-white font-bold shadow-2xl">
                  PRO FEATURE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-zinc-400">Discover how InstaRadar has helped others uncover the truth.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl glass-card">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-6">"{t.content}"</p>
                <div className="text-white font-bold text-sm">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Clarity in Your Relationship?</h2>
          <p className="text-zinc-400 mb-10">
            Join thousands of users who use InstaRadar to gain peace of mind and discover hidden patterns.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-12 h-16 rounded-2xl text-lg font-bold">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-8 text-xs text-zinc-600 uppercase tracking-widest">
            Discreet • Anonymous • No Login Required
          </p>
        </div>
      </section>
    </main>
  );
}
