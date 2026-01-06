"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  Eye, 
  Shield, 
  CreditCard, 
  Settings, 
  Search,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: 'general', name: 'General Inquiries', icon: HelpCircle },
  { id: 'tracking', name: 'Tracking Features', icon: Eye },
  { id: 'privacy', name: 'Privacy & Security', icon: Shield },
  { id: 'billing', name: 'Billing & Plans', icon: CreditCard },
  { id: 'technical', name: 'Technical Issues', icon: Settings },
];

const faqItems = {
  general: [
    { q: 'What is InstaRadar?', a: 'InstaRadar is an all-in-one Instagram analytics platform designed to provide deep insights into public account activity, anonymous viewing, and content discovery.' },
    { q: 'Is it safe to use?', a: 'Yes, InstaRadar is 100% safe. We only access publicly available Instagram data and do not require your account login credentials.' },
    { q: 'Do I need an Instagram account?', a: 'No, our tools are designed to work independently of your own Instagram account. You can track and view content without even having an Instagram profile.' },
  ],
  tracking: [
    { q: 'How does tracking work?', a: 'Our system monitors public activity of the target account 24/7, detecting changes in follows, likes, and comments which are then aggregated into reports.' },
    { q: 'How accurate is the data?', a: 'We typically capture 85-95% of public activities. Some activities may be missed depending on Instagram\'s temporary API limitations or account privacy shifts.' },
    { q: 'Can I track private accounts?', a: 'No, we respect Instagram\'s privacy controls. We can only track and analyze accounts that are set to Public.' },
  ],
  privacy: [
    { q: 'Is my data stored?', a: 'We prioritize privacy. Search history is stored locally in your browser (unless logged in) and we do not sell your personal information to third parties.' },
    { q: 'Will they know I\'m tracking them?', a: 'Absolutely not. Our methods are completely anonymous. We do not interact with the target account in any way that reveals your identity.' },
    { q: 'Are you GDPR compliant?', a: 'Yes, we follow strict GDPR and CCPA guidelines regarding data processing and user privacy rights.' },
  ],
  billing: [
    { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and Apple Pay through our secure Stripe payment gateway.' },
    { q: 'Can I cancel anytime?', a: 'Yes, subscriptions are flexible. You can cancel your plan at any time through your dashboard settings with no hidden fees.' },
    { q: 'Do you offer refunds?', a: 'We offer a 7-day money-back guarantee if you are not satisfied with the pro features, provided the credit usage is within a reasonable limit.' },
  ],
  technical: [
    { q: 'Why is the data delayed?', a: 'Data processing usually has a delay of 2-10 minutes as our system verifies and aggregates the latest public activities.' },
    { q: 'The tool isn\'t working', a: 'If you encounter issues, try clearing your browser cache or switching to a different browser. If problems persist, contact our support team.' },
    { q: 'How do I export data?', a: 'On any results or report page, you\'ll find an "Export" button that allows you to download the data in CSV or PDF format.' },
  ],
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = searchQuery 
    ? Object.values(faqItems).flat().filter(f => 
        f.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        f.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqItems[activeCategory as keyof typeof faqItems];

  return (
    <main className="min-h-screen pt-20">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about InstaRadar. Find answers to common questions about our features, privacy, and billing."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-24">
        <div className="relative max-w-2xl mx-auto mb-16">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
          <Input
            placeholder="Search for questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 bg-white/5 border-white/10 rounded-2xl text-white placeholder:text-zinc-500 focus:border-primary/50 text-lg shadow-2xl shadow-primary/5"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          {!searchQuery && (
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group",
                      activeCategory === cat.id 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon className={cn("h-5 w-5", activeCategory === cat.id ? "text-primary" : "text-zinc-500 group-hover:text-zinc-300")} />
                      <span className="text-sm font-semibold">{cat.name}</span>
                    </div>
                    {activeCategory === cat.id && <ChevronRight className="h-4 w-4" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-8">
              {searchQuery ? `Search results for "${searchQuery}"` : categories.find(c => c.id === activeCategory)?.name}
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card rounded-2xl border-0 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-6 text-left text-lg font-semibold text-white hover:no-underline transition-colors data-[state=open]:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-zinc-400 leading-relaxed text-base">
                      <div className="space-y-6">
                        <p>{faq.a}</p>
                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                          <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Was this helpful?</span>
                          <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-green-500/10 hover:text-green-400 transition-colors text-xs font-bold text-zinc-400">
                              <ThumbsUp className="h-3.5 w-3.5" />
                              Yes
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-red-500/10 hover:text-red-400 transition-colors text-xs font-bold text-zinc-400">
                              <ThumbsDown className="h-3.5 w-3.5" />
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))
              ) : (
                <div className="text-center py-20 glass-card rounded-3xl">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-zinc-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">No questions found</h3>
                  <p className="text-zinc-500">Try adjusting your search query or browse categories.</p>
                </div>
              )}
            </Accordion>

            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center glow-sm">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Still have questions?</h3>
                  <p className="text-zinc-400">Our support team is ready to help you 24/7.</p>
                </div>
              </div>
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 px-8 rounded-xl font-bold">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
