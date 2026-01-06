import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { FeatureCard } from "@/components/FeatureCard";
import { Shield, Eye, Download, Lock, CheckCircle2, Star, Users, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  title: 'View Instagram Anonymously | Story & Profile Viewer | InstaRadar',
  description: 'Browse any public Instagram profile, stories, and posts without leaving a trace. 100% anonymous, no login required.',
};

const benefits = [
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "100% Anonymous",
    description: "Your identity stays completely hidden. The account owner will never know you viewed their profile or stories."
  },
  {
    icon: <Lock className="h-6 w-6 text-white" />,
    title: "No Login Required",
    description: "You don't need an Instagram account or to log in to our platform to view public profiles."
  },
  {
    icon: <Eye className="h-6 w-6 text-white" />,
    title: "View Stories",
    description: "Watch Instagram stories and highlights without appearing in the viewers list."
  },
  {
    icon: <Download className="h-6 w-6 text-white" />,
    title: "Save Content",
    description: "Download any post, reel, or story while you view them anonymously."
  }
];

const faqs = [
  {
    question: "Is it really anonymous?",
    answer: "Yes. When you use InstaRadar to view a profile or story, we fetch the data on our servers and display it to you. Your personal information or Instagram account is never used or revealed."
  },
  {
    question: "Can I view private accounts?",
    answer: "No. InstaRadar only works with public Instagram accounts. We respect Instagram's privacy settings and do not provide access to private content."
  },
  {
    question: "Do I need to install anything?",
    answer: "No installation is required. InstaRadar is a web-based tool that works on any browser, whether on desktop or mobile."
  },
  {
    question: "Is there a limit to how many profiles I can view?",
    answer: "Free users have a daily limit of views. Pro users enjoy unlimited anonymous viewing and additional features like HD downloads."
  }
];

export default function ViewAnonymouslyPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        badge="Private & Secure"
        title="View Instagram | Anonymously"
        subtitle="Browse any public Instagram profile, stories, and posts without leaving a trace. No account needed, 100% undetectable."
      >
        <SearchBox placeholder="Enter Instagram username..." buttonText="View Now" size="large" className="mb-8" />
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            50,000+ Daily Users
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            Fast & Free
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            GDPR Compliant
          </div>
        </div>
      </PageHero>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Use Our <span className="text-gradient">Anonymous Viewer?</span></h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">The safest way to browse Instagram without compromises.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <FeatureCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.05),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How It <span className="text-gradient">Works</span></h2>
              <div className="space-y-8">
                {[
                  { n: "1", t: "Enter Username", d: "Type the username of the public account you want to view." },
                  { n: "2", t: "Fetching Data", d: "Our system safely retrieves the profile data anonymously." },
                  { n: "3", t: "Browse Freely", d: "View posts, stories, and highlights without any trace." }
                ].map(step => (
                  <div key={step.n} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold border border-primary/20">{step.n}</div>
                    <div>
                      <h3 className="font-bold mb-1">{step.t}</h3>
                      <p className="text-sm text-zinc-400">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="glass-card p-4 rounded-3xl border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse" />
                      <div className="h-3 w-16 bg-zinc-800 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="aspect-square bg-zinc-800 rounded-lg animate-pulse" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-bold shadow-lg">View Profile Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#08080c]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common <span className="text-gradient">Questions</span></h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-xl px-6 border-0">
                <AccordionTrigger className="text-white hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-zinc-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
