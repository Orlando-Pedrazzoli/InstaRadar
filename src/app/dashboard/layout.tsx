"use client";

import { ReactNode } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#08080c] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!isLoggedIn) return null;

  return (
    <div className="flex min-h-screen bg-[#08080c]">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 bg-[#08080c]/80 backdrop-blur-md z-40">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <Input 
                placeholder="Search dashboard..." 
                className="pl-10 h-10 bg-white/5 border-white/10 rounded-xl text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-xl hover:bg-white/5 text-zinc-400 transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-[#08080c]" />
            </button>
            <div className="w-px h-6 bg-white/5 mx-2" />
            <button className="flex items-center gap-3 p-1.5 pr-3 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs font-bold">
                U
              </div>
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Profile</span>
            </button>
          </div>
        </header>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
