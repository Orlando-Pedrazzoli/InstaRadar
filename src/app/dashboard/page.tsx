"use client";

import { StatsCard } from "@/components/StatsCard";
import { 
  Users, 
  FileText, 
  Download, 
  CreditCard, 
  ArrowUpRight, 
  Plus,
  Eye,
  Activity,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import Link from "next/link";

const recentActivity = [
  { id: 1, action: "Generated tracking report", target: "@fashion_daily", time: "2 hours ago", icon: FileText, color: "blue" },
  { id: 2, action: "Downloaded reel", target: "Post by @traveler", time: "5 hours ago", icon: Download, color: "orange" },
  { id: 3, action: "Started tracking account", target: "@tech_insights", time: "1 day ago", icon: Eye, color: "purple" },
  { id: 4, action: "Extracted 25 emails", target: "Keyword: 'Marketing'", time: "2 days ago", icon: Users, color: "green" },
];

export default function DashboardOverview() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-zinc-500">Here's what's happening with your tracked accounts and reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Tracked Accounts" 
          value="3/5" 
          icon={Eye} 
          color="purple" 
          change={{ value: 20, isPositive: true }}
        />
        <StatsCard 
          title="Reports Generated" 
          value="12" 
          icon={FileText} 
          color="blue" 
          change={{ value: 15, isPositive: true }}
        />
        <StatsCard 
          title="Total Downloads" 
          value="45" 
          icon={Download} 
          color="orange" 
          change={{ value: 5, isPositive: true }}
        />
        <StatsCard 
          title="Credits Used" 
          value="67/100" 
          icon={CreditCard} 
          color="green" 
          change={{ value: 12, isPositive: false }}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Recent Activity</h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80 text-sm">
              View all
            </Button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((item) => (
              <div key={item.id} className="glass-card p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg bg-${item.color}-500/10`}>
                    <item.icon className={`h-5 w-5 text-${item.color}-500`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{item.action}</div>
                    <div className="text-xs text-zinc-500">{item.target} • {item.time}</div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Quick Actions</h2>
          <div className="grid gap-4">
            <Link href="/instagram-tracker">
              <Button className="w-full h-14 bg-gradient-primary hover:opacity-90 justify-start gap-3 rounded-xl px-4">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Plus className="h-5 w-5" />
                </div>
                <span className="font-semibold">Track New Account</span>
              </Button>
            </Link>
            <Link href="/instagram-email-finder">
              <Button variant="outline" className="w-full h-14 border-white/10 hover:bg-white/5 justify-start gap-3 rounded-xl px-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-zinc-300">Find Emails</span>
              </Button>
            </Link>
          </div>

          <div className="p-6 rounded-2xl glass-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="px-2 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">Plan Status</div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1 capitalize">{user?.plan} Plan</h3>
              <p className="text-xs text-zinc-500 mb-6">Your plan expires in 12 days. Upgrade to unlock more features.</p>
              <Link href="/plan">
                <Button className="w-full bg-white text-black hover:bg-zinc-200 rounded-xl text-xs font-bold">
                  Upgrade Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
