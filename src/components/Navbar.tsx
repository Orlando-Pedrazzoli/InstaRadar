"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Radar,
  Menu,
  ChevronDown,
  Activity,
  Eye,
  Download,
  Mail,
  Heart,
  Wrench,
  HelpCircle,
  UserSearch,
  LayoutDashboard,
  User,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";

const navItems = [
  {
    name: 'Tracker',
    href: '/instagram-tracker',
    icon: Activity,
    children: [
      { name: 'Activity Tracker', href: '/instagram-tracker/activity-tracker', icon: Activity },
      { name: 'Follower Tracker', href: '/instagram-tracker/follower-tracker', icon: Radar },
    ]
  },
  {
    name: 'Viewer',
    href: '/instagram-viewer',
    icon: Eye,
    children: [
      { name: 'Anonymous View', href: '/view-instagram-anonymously', icon: UserSearch },
      { name: 'Story Viewer', href: '/instagram-viewer/story', icon: Eye },
      { name: 'Profile Viewer', href: '/instagram-viewer/profile', icon: UserSearch },
      { name: 'Post Viewer', href: '/instagram-viewer/post', icon: Eye },
    ]
  },
  {
    name: 'Download',
    href: '/download-from-instagram',
    icon: Download,
    children: [
      { name: 'Post Downloader', href: '/download-from-instagram/post', icon: Download },
      { name: 'Reel Downloader', href: '/download-from-instagram/reel', icon: Download },
      { name: 'Story Downloader', href: '/download-from-instagram/story', icon: Download },
      { name: 'Highlights', href: '/download-from-instagram/highlights', icon: Download },
      { name: 'Profile Picture', href: '/download-from-instagram/profile-picture', icon: Download },
    ]
  },
];

const moreItems = [
  { name: 'Email Finder', href: '/instagram-email-finder', icon: Mail },
  { name: 'Catch Cheaters', href: '/catch-instagram-cheaters', icon: Heart },
  { name: 'Toolkit', href: '/toolkit', icon: Wrench },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user, isLoggedIn, logout } = useAuth();

  // Hide Navbar on dashboard routes
  if (pathname?.startsWith('/dashboard')) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-primary p-2 rounded-lg">
                <Radar className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">
              Insta<span className="text-gradient">Radar</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                    {item.name}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-[#12121a] border-white/10 p-2">
                  <DropdownMenuItem asChild>
                    <Link href={item.href} className="flex items-center gap-2 cursor-pointer p-2 mb-1 text-primary font-semibold">
                      <item.icon className="h-4 w-4" />
                      Main {item.name} Page
                    </Link>
                  </DropdownMenuItem>
                  <div className="h-px bg-white/5 my-1" />
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link href={child.href} className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-white/5 transition-colors">
                        <child.icon className="h-4 w-4 text-zinc-500" />
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  More Tools
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-[#12121a] border-white/10 p-2">
                {moreItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-white/5 transition-colors">
                      <item.icon className="h-4 w-4 text-zinc-500" />
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/plan">
              <Button variant="ghost" className="text-zinc-300 hover:text-white">
                Pricing
              </Button>
            </Link>
            
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-primary font-semibold gap-2 hover:bg-primary/5">
                    <User className="h-4 w-4" />
                    Account
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-[#12121a] border-white/10 p-2">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center gap-2 cursor-pointer p-2">
                      <LayoutDashboard className="h-4 w-4 text-zinc-500" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/settings" className="flex items-center gap-2 cursor-pointer p-2">
                      <Wrench className="h-4 w-4 text-zinc-500" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <div className="h-px bg-white/5 my-1" />
                  <DropdownMenuItem onClick={logout} className="flex items-center gap-2 cursor-pointer p-2 text-red-400 hover:text-red-300 focus:text-red-300">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="text-zinc-300 hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="bg-gradient-primary hover:opacity-90 text-white shadow-lg shadow-primary/20">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[#0a0a0f] border-white/10">
              <div className="flex flex-col gap-6 mt-8">
                {isLoggedIn && (
                  <div className="px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 mb-2">
                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Welcome back</p>
                    <p className="text-sm font-bold text-white">{user?.name}</p>
                    <Link href="/dashboard" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white mt-2 transition-colors">
                      Go to Dashboard <ChevronDown className="h-3 w-3 -rotate-90" />
                    </Link>
                  </div>
                )}

                {navItems.map((item) => (
                  <div key={item.name} className="flex flex-col gap-2">
                    <p className="px-4 text-xs font-semibold text-zinc-500 uppercase">
                      {item.name}
                    </p>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      Main {item.name}
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-8 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        <child.icon className="h-4 w-4 text-zinc-600" />
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ))}

                <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
                  <p className="px-4 text-xs font-semibold text-zinc-500 uppercase mb-2">
                    Tools & Resources
                  </p>
                  {moreItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
                  {!isLoggedIn ? (
                    <>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full">
                          Login
                        </Button>
                      </Link>
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-gradient-primary">
                          Get Started Free
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Button onClick={() => { logout(); setIsOpen(false); }} variant="outline" className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10">
                      Logout
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
