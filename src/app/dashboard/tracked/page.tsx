"use client";

import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { EmptyState } from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Plus, 
  Eye, 
  Pause, 
  Trash2, 
  ExternalLink,
  Search,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const mockTracked = [
  { id: 1, username: "@fashion_daily", status: "Active", lastChecked: "10 mins ago", followers: "1.2M" },
  { id: 2, username: "@tech_insider", status: "Active", lastChecked: "2 hours ago", followers: "450K" },
  { id: 3, username: "@travel_junkie", status: "Paused", lastChecked: "1 day ago", followers: "89K" },
];

export default function TrackedAccountsPage() {
  const [data, setData] = useState(mockTracked);
  const [search, setSearch] = useState("");

  const columns = [
    { 
      header: 'Username', 
      accessorKey: 'username' as const,
      cell: (item: any) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold">
            {item.username[1].toUpperCase()}
          </div>
          <span className="font-semibold text-white">{item.username}</span>
        </div>
      )
    },
    { 
      header: 'Status', 
      accessorKey: 'status' as const,
      cell: (item: any) => (
        <Badge className={
          item.status === 'Active' 
            ? 'bg-green-500/10 text-green-400 border-green-500/20' 
            : 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
        }>
          {item.status}
        </Badge>
      )
    },
    { header: 'Followers', accessorKey: 'followers' as const },
    { header: 'Last Checked', accessorKey: 'lastChecked' as const },
    { 
      header: 'Actions', 
      accessorKey: 'id' as const,
      cell: (item: any) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-white/5">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-white/5">
            <Pause className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-red-400 hover:bg-red-400/5">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Tracked Accounts</h1>
          <p className="text-zinc-500">Manage and monitor the accounts you're currently tracking.</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 gap-2 rounded-xl">
          <Plus className="h-4 w-4" />
          Track New Account
        </Button>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input 
              placeholder="Search accounts..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-10 bg-white/5 border-white/10 rounded-xl"
            />
          </div>
          <div className="flex-1" />
          <div className="text-sm text-zinc-500">
            Showing <span className="text-white font-medium">{data.length}</span> accounts
          </div>
        </div>

        {data.length > 0 ? (
          <DataTable columns={columns} data={data} />
        ) : (
          <EmptyState 
            icon={Users}
            title="No accounts tracked"
            description="You haven't started tracking any accounts yet. Enter a username to begin monitoring activity."
            action={{ label: "Start Tracking", href: "/instagram-tracker" }}
          />
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl glass-card border-green-500/20 bg-green-500/5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Daily Summary</h3>
              <p className="text-zinc-500 text-sm">All tracked accounts are active and updating.</p>
            </div>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Your daily summary report will be generated and sent to your email at 9:00 AM UTC. You've had 12 new activities detected across your tracked accounts in the last 24 hours.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-card border-primary/20 bg-primary/5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Increase Limit</h3>
              <p className="text-zinc-500 text-sm">Unlock more tracking slots.</p>
            </div>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            You are currently using 3 out of your 5 tracking slots. Upgrade to the Pro plan to track up to 25 accounts simultaneously.
          </p>
          <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-bold gap-2">
            View Upgrade Options <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
