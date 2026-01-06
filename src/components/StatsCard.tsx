"use client";

import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon: LucideIcon;
  color?: string;
}

export function StatsCard({ title, value, change, icon: Icon, color = "primary" }: StatsCardProps) {
  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-xl bg-${color}/10`}>
          <Icon className={`h-6 w-6 text-${color}`} />
        </div>
        {change && (
          <div className={`text-sm font-medium ${change.isPositive ? "text-green-500" : "text-red-500"}`}>
            {change.isPositive ? "+" : "-"}{Math.abs(change.value)}%
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-zinc-500">{title}</div>
    </div>
  );
}
