"use client";

import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { EmptyState } from "@/components/EmptyState";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download, 
  Search, 
  Filter,
  Eye,
  Trash2,
  Calendar,
  FileDown
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const mockReports = [
  { id: 1, account: "@fashion_daily", type: "Full Activity Report", date: "Oct 24, 2023", size: "2.4 MB" },
  { id: 2, account: "@tech_insider", type: "Follower Growth Analysis", date: "Oct 22, 2023", size: "1.8 MB" },
  { id: 3, account: "@travel_junkie", type: "Engagement Audit", date: "Oct 20, 2023", size: "3.1 MB" },
  { id: 4, account: "@fashion_daily", type: "Weekly Summary", date: "Oct 17, 2023", size: "1.2 MB" },
];

export default function ReportsPage() {
  const [data, setData] = useState(mockReports);

  const columns = [
    { 
      header: 'Report Type', 
      accessorKey: 'type' as const,
      cell: (item: any) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
            <FileText className="h-4 w-4" />
          </div>
          <span className="font-semibold text-white">{item.type}</span>
        </div>
      )
    },
    { header: 'Account', accessorKey: 'account' as const },
    { 
      header: 'Date Generated', 
      accessorKey: 'date' as const,
      cell: (item: any) => (
        <div className="flex items-center gap-2 text-zinc-400">
          <Calendar className="h-3.5 w-3.5" />
          {item.date}
        </div>
      )
    },
    { header: 'Size', accessorKey: 'size' as const },
    { 
      header: 'Actions', 
      accessorKey: 'id' as const,
      cell: (item: any) => (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-white/5">
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-primary hover:bg-primary/5">
            <FileDown className="h-4 w-4" />
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
          <h1 className="text-3xl font-bold text-white mb-2">Reports</h1>
          <p className="text-zinc-500">View and download generated analytics reports.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-white/10 hover:bg-white/5 gap-2 rounded-xl">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 gap-2 rounded-xl">
            <FileText className="h-4 w-4" />
            Generate New
          </Button>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input 
              placeholder="Search reports..." 
              className="pl-10 h-10 bg-white/5 border-white/10 rounded-xl"
            />
          </div>
          <div className="flex-1" />
        </div>

        {data.length > 0 ? (
          <DataTable columns={columns} data={data} />
        ) : (
          <EmptyState 
            icon={FileText}
            title="No reports found"
            description="You haven't generated any reports yet. Track an account and click 'Generate Report' to see analysis here."
          />
        )}
      </div>
    </div>
  );
}
