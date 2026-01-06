"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth-context";
import { 
  User, 
  Mail, 
  Lock, 
  Bell, 
  Shield, 
  Smartphone,
  CheckCircle2,
  Camera,
  ChevronRight
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
  const { user } = useAuth();
  const [isSaving, setIsSaving] = useState(false);

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-zinc-500">Manage your account preferences and security settings.</p>
      </div>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="glass-card p-8 rounded-3xl border border-white/5">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold group-hover:opacity-50 transition-opacity">
                {user?.name?.[0].toUpperCase()}
              </div>
              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="h-6 w-6 text-white" />
              </button>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Profile Information</h3>
              <p className="text-sm text-zinc-500">Update your photo and personal details.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 pl-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <Input defaultValue={user?.name} className="pl-12 h-12 bg-white/5 border-white/10 rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 pl-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                <Input defaultValue={user?.email} readOnly className="pl-12 h-12 bg-white/5 border-white/10 rounded-xl opacity-60 cursor-not-allowed" />
              </div>
            </div>
          </div>
          <Button className="mt-8 bg-gradient-primary hover:opacity-90 rounded-xl px-8 h-12 font-bold">
            Save Changes
          </Button>
        </div>

        {/* Notifications Section */}
        <div className="glass-card p-8 rounded-3xl border border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold text-white">Notifications</h3>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
              <div>
                <div className="font-semibold text-white">Email Notifications</div>
                <div className="text-xs text-zinc-500">Receive weekly reports and account alerts.</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="flex-1">
                <div className="font-semibold text-white">Report Frequency</div>
                <div className="text-xs text-zinc-500">How often should we generate tracking reports?</div>
              </div>
              <Select defaultValue="weekly">
                <SelectTrigger className="w-[140px] bg-black/40 border-white/10 rounded-xl">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent className="bg-[#12121a] border-white/10 text-white">
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="glass-card p-8 rounded-3xl border border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-bold text-white">Security</h3>
          </div>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 pl-1">New Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                  <Input type="password" placeholder="••••••••" className="pl-12 h-12 bg-white/5 border-white/10 rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 pl-1">Confirm New Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
                  <Input type="password" placeholder="••••••••" className="pl-12 h-12 bg-white/5 border-white/10 rounded-xl" />
                </div>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Two-Factor Authentication</div>
                  <div className="text-xs text-zinc-500">Add an extra layer of security to your account.</div>
                </div>
              </div>
              <Button variant="outline" className="border-white/10 hover:bg-white/5 rounded-xl h-10">Enable</Button>
            </div>
          </div>
          <Button className="mt-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-8 h-12 font-bold text-white">
            Update Password
          </Button>
        </div>
      </div>
    </div>
  );
}
