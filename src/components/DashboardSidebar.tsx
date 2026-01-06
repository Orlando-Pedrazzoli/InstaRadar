"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Download, 
  Settings, 
  CreditCard,
  LogOut,
  ChevronRight
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Tracked Accounts', href: '/dashboard/tracked', icon: Users },
  { name: 'Reports', href: '/dashboard/reports', icon: FileText },
  { name: 'Downloads', href: '/dashboard/downloads', icon: Download },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Billing', href: '/dashboard/billing', icon: CreditCard },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside className="w-64 border-r border-white/5 bg-[#08080c] flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold">R</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">InstaRadar</span>
        </Link>
      </div>

      <div className="p-4 border-b border-white/5">
        <div className="flex items-center gap-3 p-2 rounded-xl glass">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            {user?.name?.[0].toUpperCase() || "U"}
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="text-sm font-semibold text-white truncate">{user?.name}</div>
            <div className="text-xs text-zinc-500 capitalize">{user?.plan} Plan</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-zinc-500 group-hover:text-zinc-300")} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <Button 
          variant="ghost" 
          className="w-full justify-start gap-3 text-zinc-400 hover:text-red-400 hover:bg-red-400/5 rounded-xl"
          onClick={logout}
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-medium">Logout</span>
        </Button>
      </div>
    </aside>
  );
}
