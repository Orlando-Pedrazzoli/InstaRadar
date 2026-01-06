"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  Activity,
  Eye,
  Download,
  Mail,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Activity Tracking",
    description: "Monitor follows, unfollows, likes, and comments in real-time with AI-powered insights.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Eye,
    title: "Anonymous Viewing",
    description: "View profiles, stories, and highlights without leaving a trace or logging in.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Download,
    title: "Content Download",
    description: "Download posts, reels, stories, and profile pictures in HD quality instantly.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Mail,
    title: "Email Finder",
    description: "Extract contact emails from Instagram profiles for outreach and marketing.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "Your searches are completely anonymous. No Instagram login required.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Get instant notifications when tracked accounts have new activity.",
    color: "from-amber-500 to-yellow-500",
  },
];

const steps = [
  {
    number: "01",
    title: "Enter Username",
    description: "Simply type the Instagram username you want to track or analyze.",
  },
  {
    number: "02",
    title: "Choose Your Tool",
    description: "Select from our suite of tracking, viewing, and download tools.",
  },
  {
    number: "03",
    title: "Get Insights",
    description: "Receive detailed analytics, activity reports, and downloadable content.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Social Media Manager",
    content: "InstaRadar has completely transformed how I track competitor activity. The AI insights are incredibly accurate!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "James K.",
    role: "Digital Marketer",
    content: "The email finder alone has generated thousands of leads for my agency. Best investment I've made this year.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emily R.",
    role: "Influencer",
    content: "I use InstaRadar daily to monitor my growth and see who's engaging with my content. Super intuitive!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const faqs = [
  {
    question: "Is InstaRadar safe to use?",
    answer: "Yes, InstaRadar is completely safe. We don't require your Instagram login credentials and all tracking is done through publicly available data. Your identity remains anonymous at all times.",
  },
  {
    question: "Can the person I'm tracking see that I'm monitoring them?",
    answer: "No, our tracking is 100% undetectable. The person you're tracking will never know they're being monitored. We don't interact with their account in any way.",
  },
  {
    question: "How accurate is the activity tracking?",
    answer: "Our AI-powered tracking system detects approximately 85-95% of all public activities including follows, unfollows, likes, and comments. Detection rates depend on the target account's privacy settings.",
  },
  {
    question: "Do I need to create an account?",
    answer: "You can use basic features without an account, but creating a free account unlocks more views per day and the ability to save tracked accounts for continuous monitoring.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrency payments through our secure Stripe integration.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time from your dashboard. You'll continue to have access until the end of your billing period with no additional charges.",
  },
];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "10M+", label: "Profiles Tracked" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export default function HomePage() {
  const [username, setUsername] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      window.location.href = `/instagram-tracker?username=${encodeURIComponent(username.trim())}`;
    }
  };

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-zinc-300">Trusted by 50,000+ users worldwide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            All-in-One{" "}
            <span className="text-gradient">Instagram</span>
            <br />
            Tracker & Analyzer
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Monitor activity, view profiles anonymously, download content, and find emails — all without logging into Instagram.
          </p>

          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative flex items-center gap-2 bg-[#12121a] rounded-xl p-2 border border-white/10">
                <div className="flex items-center gap-2 flex-1 px-4">
                  <Search className="h-5 w-5 text-zinc-500" />
                  <Input
                    type="text"
                    placeholder="Enter Instagram username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-zinc-500"
                  />
                </div>
                <Button type="submit" className="bg-gradient-primary hover:opacity-90 text-white px-6 py-5 rounded-lg">
                  Track Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              No login required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              100% anonymous
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              Free to start
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-white/5 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="text-gradient">Analyze Instagram</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Powerful tools designed to give you complete visibility into any public Instagram account.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative p-6 rounded-2xl glass-card hover:border-white/10 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Get started in seconds with our simple three-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center group">
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 glow-sm group-hover:glow transition-all">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              See what our users are saying about InstaRadar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 rounded-2xl glass-card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-zinc-400">
              Everything you need to know about InstaRadar.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="glass-card rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start <span className="text-gradient">Tracking?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Join 50,000+ users who trust InstaRadar for their Instagram analytics needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white px-8 py-6 text-lg">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/plan">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
