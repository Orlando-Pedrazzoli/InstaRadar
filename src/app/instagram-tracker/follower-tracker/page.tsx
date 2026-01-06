"use client";

import { PageHero } from "@/components/PageHero";
import { SearchBox } from "@/components/SearchBox";
import { TrendingUp, TrendingDown, Users, UserPlus, UserMinus, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Mon', followers: 12400 },
  { name: 'Tue', followers: 12450 },
  { name: 'Wed', followers: 12600 },
  { name: 'Thu', followers: 12580 },
  { name: 'Fri', followers: 12750 },
  { name: 'Sat', followers: 12900 },
  { name: 'Sun', followers: 13100 },
];

const stats = [
  { label: 'Total Followers', value: '13,100', trend: '+5.2%', icon: Users, color: 'text-primary' },
  { label: 'New Followers', value: '700', trend: '+12%', icon: UserPlus, color: 'text-green-500' },
  { label: 'Unfollowers', value: '42', trend: '-8%', icon: UserMinus, color: 'text-red-500' },
  { label: 'Growth Rate', value: '2.4%', trend: '+0.5%', icon: TrendingUp, color: 'text-cyan-500' },
];

const mockChanges = [
  { username: '@tech_lover', type: 'new', time: '1 hour ago', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop' },
  { username: '@travel_guru', type: 'lost', time: '3 hours ago', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop' },
  { username: '@foodie_adventures', type: 'new', time: '5 hours ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop' },
  { username: '@fitness_pro', type: 'new', time: '8 hours ago', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop' },
];

export default function FollowerTrackerPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Instagram | Follower Tracker"
        subtitle="Monitor follower growth and detect unfollowers instantly. Get real-time data on who's following and leaving."
      >
        <SearchBox placeholder="Enter username to track followers..." buttonText="Analyze Growth" />
      </PageHero>

      <section className="py-12 bg-[#08080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6 rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-xl bg-white/5 ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${stat.trend.startsWith('+') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                    {stat.trend}
                  </span>
                </div>
                <p className="text-sm text-zinc-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glass-card p-6 rounded-3xl border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold">Follower Growth</h3>
                  <p className="text-sm text-zinc-500">Last 7 days performance</p>
                </div>
                <div className="flex gap-2">
                  {['7D', '30D', '90D'].map(period => (
                    <Button key={period} variant="ghost" size="sm" className={`h-8 px-3 rounded-lg text-xs ${period === '7D' ? 'bg-primary/20 text-primary' : 'text-zinc-500'}`}>
                      {period}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value/1000}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#12121a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                      itemStyle={{ color: '#8b5cf6' }}
                    />
                    <Area type="monotone" dataKey="followers" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorFollowers)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Recent Changes</h3>
              <div className="space-y-6">
                {mockChanges.map((change, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <img src={change.avatar} alt="" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">{change.username}</p>
                        <p className="text-xs text-zinc-500">{change.time}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${change.type === 'new' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                      {change.type === 'new' ? 'Followed' : 'Unfollowed'}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-8 border-white/5 hover:bg-white/5 text-zinc-400">
                View All Changes
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
