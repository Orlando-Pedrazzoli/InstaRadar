"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, X, Sparkles, Zap, Crown, Star } from "lucide-react";

type BillingPeriod = "monthly" | "quarterly" | "yearly";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out InstaRadar",
    icon: Star,
    monthlyPrice: 0,
    quarterlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { text: "1 profile view per day", included: true },
      { text: "Basic profile information", included: true },
      { text: "Limited activity tracking", included: true },
      { text: "Ads between actions", included: true },
      { text: "Full tracking features", included: false },
      { text: "CSV exports", included: false },
      { text: "Email finder", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-zinc-500 to-zinc-600",
  },
  {
    name: "Basic",
    description: "Great for personal use",
    icon: Zap,
    monthlyPrice: 9.99,
    quarterlyPrice: 24.99,
    yearlyPrice: 79.99,
    features: [
      { text: "10 profile views per day", included: true },
      { text: "Full tracking for 1 account", included: true },
      { text: "Basic activity reports", included: true },
      { text: "Ad-free experience", included: true },
      { text: "Email support", included: true },
      { text: "CSV exports", included: false },
      { text: "Email finder (50 credits/mo)", included: false },
      { text: "API access", included: false },
    ],
    cta: "Start Basic",
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Standard",
    description: "Best for professionals",
    icon: Sparkles,
    monthlyPrice: 19.99,
    quarterlyPrice: 49.99,
    yearlyPrice: 159.99,
    features: [
      { text: "Unlimited profile views", included: true },
      { text: "Track up to 3 accounts", included: true },
      { text: "AI-powered Interest Tags", included: true },
      { text: "Detailed activity reports", included: true },
      { text: "CSV & PDF exports", included: true },
      { text: "Email finder (200 credits/mo)", included: true },
      { text: "Priority email support", included: true },
      { text: "API access", included: false },
    ],
    cta: "Start Standard",
    popular: true,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Premium",
    description: "For power users & agencies",
    icon: Crown,
    monthlyPrice: 29.99,
    quarterlyPrice: 74.99,
    yearlyPrice: 249.99,
    features: [
      { text: "Everything in Standard", included: true },
      { text: "Track up to 10 accounts", included: true },
      { text: "Multi-platform discovery", included: true },
      { text: "Monthly/Quarterly reports", included: true },
      { text: "Email finder (1000 credits/mo)", included: true },
      { text: "Full API access", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom integrations", included: true },
    ],
    cta: "Start Premium",
    popular: false,
    gradient: "from-amber-500 to-orange-500",
  },
];

const billingOptions: { value: BillingPeriod; label: string; discount?: string }[] = [
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly", discount: "Save 15%" },
  { value: "yearly", label: "Yearly", discount: "Save 35%" },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  const getPrice = (plan: typeof plans[0]) => {
    switch (billing) {
      case "quarterly":
        return plan.quarterlyPrice;
      case "yearly":
        return plan.yearlyPrice;
      default:
        return plan.monthlyPrice;
    }
  };

  const getPeriodLabel = () => {
    switch (billing) {
      case "quarterly":
        return "/quarter";
      case "yearly":
        return "/year";
      default:
        return "/month";
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Pricing Plans
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Perfect Plan</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Start free and upgrade as you grow. All plans include a 7-day money-back guarantee.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#12121a] border border-white/10">
            {billingOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setBilling(option.value)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  billing === option.value
                    ? "bg-gradient-primary text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {option.label}
                {option.discount && billing === option.value && (
                  <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-bold bg-green-500 text-white rounded-full">
                    {option.discount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? "glass-card border-primary/50 ring-2 ring-primary/20"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white border-0">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.gradient} mb-4`}>
                <plan.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-zinc-400 mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  ${getPrice(plan).toFixed(2)}
                </span>
                <span className="text-zinc-400">{getPeriodLabel()}</span>
              </div>

              <Link href={plan.name === "Free" ? "/register" : "/register?plan=" + plan.name.toLowerCase()}>
                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-gradient-primary hover:opacity-90"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-zinc-600 shrink-0" />
                    )}
                    <span className={feature.included ? "text-zinc-300" : "text-zinc-500"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-400 mb-4">
            Need a custom plan for your team or enterprise?
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </Link>
        </div>

        <div className="mt-20 glass-card rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                All Plans Include
              </h2>
              <ul className="space-y-3">
                {[
                  "100% anonymous tracking",
                  "No Instagram login required",
                  "Real-time activity updates",
                  "Mobile-friendly dashboard",
                  "Secure data encryption",
                  "7-day money-back guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20">
                <div className="text-5xl font-bold text-gradient mb-2">50K+</div>
                <div className="text-zinc-400">Happy customers worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
