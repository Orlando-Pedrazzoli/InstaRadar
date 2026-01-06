"use client";

import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  Download,
  ChevronRight,
  Shield,
  Zap,
  HelpCircle,
  ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DataTable } from "@/components/DataTable";

const mockInvoices = [
  { id: "INV-001", date: "Oct 01, 2023", amount: "$19.99", status: "Paid" },
  { id: "INV-002", date: "Sep 01, 2023", amount: "$19.99", status: "Paid" },
  { id: "INV-003", date: "Aug 01, 2023", amount: "$19.99", status: "Paid" },
];

export default function BillingPage() {
  const { user } = useAuth();

  const columns = [
    { header: "Invoice ID", accessorKey: "id" as const },
    { header: "Date", accessorKey: "date" as const },
    { header: "Amount", accessorKey: "amount" as const },
    { 
      header: "Status", 
      accessorKey: "status" as const,
      cell: (item: any) => (
        <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
          {item.status}
        </Badge>
      )
    },
    { 
      header: "Action", 
      accessorKey: "id" as const,
      cell: () => (
        <Button variant="ghost" size="sm" className="h-8 gap-2 text-zinc-400 hover:text-white">
          <Download className="h-3.5 w-3.5" />
          PDF
        </Button>
      )
    },
  ];

  return (
    <div className="max-w-5xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Billing</h1>
        <p className="text-zinc-500">Manage your subscription, payment methods, and billing history.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Current Plan Card */}
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-white capitalize">{user?.plan} Plan</h3>
                    <Badge className="bg-primary/20 text-primary border-primary/30">Active</Badge>
                  </div>
                  <p className="text-zinc-500 text-sm">Next billing date: Nov 01, 2023</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">$19.99</div>
                  <div className="text-xs text-zinc-500">per month</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Unlimited profile views",
                  "Track up to 5 accounts",
                  "AI Activity insights",
                  "Priority support",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-gradient-primary hover:opacity-90 rounded-xl h-12 font-bold">
                  Upgrade Plan
                </Button>
                <Button variant="outline" className="flex-1 border-white/10 hover:bg-white/5 rounded-xl h-12 gap-2">
                  Manage in Stripe
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Billing History */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6">Billing History</h3>
            <DataTable columns={columns} data={mockInvoices} />
          </div>
        </div>

        <div className="space-y-6">
          {/* Payment Method */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <h3 className="text-lg font-bold text-white mb-6">Payment Method</h3>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 mb-6">
              <div className="w-12 h-8 rounded bg-zinc-800 flex items-center justify-center border border-white/10">
                <div className="flex gap-1">
                  <div className="w-4 h-4 rounded-full bg-red-500/80" />
                  <div className="w-4 h-4 rounded-full bg-amber-500/80 -ml-2" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-white">Mastercard •••• 4242</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Expires 12/26</div>
              </div>
            </div>
            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 rounded-xl h-10 text-xs font-bold">
              Update Method
            </Button>
          </div>

          {/* Billing Help */}
          <div className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <HelpCircle className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Billing Help</h3>
            <p className="text-zinc-500 text-xs leading-relaxed mb-6">
              Need help with your subscription or have questions about your invoices? Our support team is here to assist you.
            </p>
            <div className="space-y-3">
              <Link href="/faq" className="flex items-center justify-between group p-2 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">Billing FAQ</span>
                <ChevronRight className="h-3 w-3 text-zinc-600" />
              </Link>
              <button className="flex items-center justify-between w-full group p-2 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">Contact Support</span>
                <ChevronRight className="h-3 w-3 text-zinc-600" />
              </button>
            </div>
          </div>

          <div className="px-6">
            <button className="text-[10px] text-zinc-600 uppercase font-bold tracking-[0.2em] hover:text-red-400 transition-colors">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
