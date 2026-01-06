"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  UserPlus, 
  MapPin, 
  Search, 
  Hash, 
  Sparkles,
  Download,
  Mail,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { DataTable } from "@/components/DataTable";

const methods = [
  { id: 'follower', name: 'By Follower', icon: Users, desc: 'Extract emails from followers of any account' },
  { id: 'following', name: 'By Following', icon: UserPlus, desc: 'Extract emails from accounts they follow' },
  { id: 'location', name: 'By Location', icon: MapPin, desc: 'Find emails by geographic location' },
  { id: 'keyword', name: 'By Keyword', icon: Search, desc: 'Search emails by bio keywords' },
  { id: 'hashtag', name: 'By Hashtag', icon: Hash, desc: 'Find emails from hashtag users' },
  { id: 'ai', name: 'AI Discover', icon: Sparkles, desc: 'AI-powered email discovery' },
];

const mockResults = [
  { id: 1, username: '@fashion_blogger', email: 'contact@fashion.com', followers: '125K', engagement: '4.2%' },
  { id: 2, username: '@travel_daily', email: 'hello@travel.com', followers: '89K', engagement: '3.8%' },
  { id: 3, username: '@tech_guru', email: 'tech@guru.io', followers: '210K', engagement: '5.1%' },
  { id: 4, username: '@fitness_pro', email: 'coach@fitness.com', followers: '45K', engagement: '6.2%' },
  { id: 5, username: '@foodie_adventures', email: 'collab@foodie.net', followers: '78K', engagement: '4.7%' },
];

const columns = [
  { header: 'Username', accessorKey: 'username' as const },
  { header: 'Email', accessorKey: 'email' as const },
  { header: 'Followers', accessorKey: 'followers' as const },
  { header: 'Engagement', accessorKey: 'engagement' as const },
];

export default function EmailFinderPage() {
  const [activeTab, setActiveTab] = useState('follower');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = () => {
    setIsSearching(true);
    // Mock search delay
    setTimeout(() => {
      setResults(mockResults);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-20">
      <PageHero
        title="Instagram Email Finder"
        subtitle="Extract high-quality emails from Instagram profiles for your outreach and marketing campaigns."
        badge="95%+ Accuracy Rate"
      />

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 mb-12">
          <Tabs defaultValue="follower" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
              {methods.map((method) => (
                <TabsTrigger
                  key={method.id}
                  value={method.id}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/5 data-[state=active]:bg-gradient-primary data-[state=active]:text-white data-[state=active]:border-transparent transition-all"
                >
                  <method.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{method.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {methods.map((method) => (
              <TabsContent key={method.id} value={method.id} className="mt-0">
                <div className="flex flex-col md:flex-row gap-6 items-end">
                  <div className="flex-1 space-y-4 w-full">
                    <label className="text-sm font-medium text-zinc-400">
                      {method.desc}
                    </label>
                    <div className="relative">
                      <method.icon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                      <Input
                        placeholder={
                          method.id === 'location' ? 'Enter city or country...' :
                          method.id === 'ai' ? 'Enter niche or industry...' :
                          method.id === 'keyword' ? 'Enter keywords...' :
                          'Enter username or hashtag...'
                        }
                        className="pl-12 h-14 bg-white/5 border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:border-primary/50"
                      />
                    </div>
                  </div>
                  <Button 
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="h-14 px-8 bg-gradient-primary hover:opacity-90 w-full md:w-auto rounded-xl"
                  >
                    {isSearching ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Searching...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        Find Emails
                      </div>
                    )}
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {results.length > 0 && (
          <div className="animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Search Results</h2>
                <p className="text-zinc-500 text-sm">Found {results.length} valid emails for your search</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-zinc-400">
                  <span className="text-primary font-bold">23/100</span> credits used
                </div>
                <Button variant="outline" className="border-white/10 hover:bg-white/5 gap-2 rounded-xl">
                  <Download className="h-4 w-4" />
                  Export All (CSV)
                </Button>
              </div>
            </div>

            <DataTable 
              columns={columns} 
              data={results} 
              selectable 
              className="mb-12"
            />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-8 rounded-3xl glass-card border border-white/5 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Basic</h3>
            <div className="text-4xl font-bold text-white mb-2">$99<span className="text-sm font-normal text-zinc-500">/mo</span></div>
            <p className="text-zinc-500 mb-6">Perfect for small outreaches</p>
            <ul className="space-y-4 text-left mb-8">
              <li className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                3,000 email credits
              </li>
              <li className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                All discovery methods
              </li>
              <li className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                CSV exports
              </li>
            </ul>
            <Button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl">Choose Plan</Button>
          </div>

          <div className="p-8 rounded-3xl glass-card border-primary/30 relative text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-white text-xs font-bold rounded-full">MOST POPULAR</div>
            <h3 className="text-xl font-bold text-white mb-4">Pro</h3>
            <div className="text-4xl font-bold text-white mb-2">$199<span className="text-sm font-normal text-zinc-500">/mo</span></div>
            <p className="text-zinc-500 mb-6">For growing businesses</p>
            <ul className="space-y-4 text-left mb-8">
              <li className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                10,000 email credits
              </li>
              <li className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Priority extraction
              </li>
              <li className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                API access (coming soon)
              </li>
            </ul>
            <Button className="w-full bg-gradient-primary hover:opacity-90 rounded-xl shadow-lg shadow-primary/20">Choose Plan</Button>
          </div>

          <div className="p-8 rounded-3xl glass-card border border-white/5 text-center">
            <h3 className="text-xl font-bold text-white mb-4">Elite</h3>
            <div className="text-4xl font-bold text-white mb-2">$299<span className="text-sm font-normal text-zinc-500">/mo</span></div>
            <p className="text-zinc-500 mb-6">For agencies & large teams</p>
            <ul className="space-y-4 text-left mb-8">
              <li className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                35,000 email credits
              </li>
              <li className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Dedicated manager
              </li>
              <li className="flex items-center gap-3 text-zinc-300 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Custom export formats
              </li>
            </ul>
            <Button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl">Choose Plan</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
