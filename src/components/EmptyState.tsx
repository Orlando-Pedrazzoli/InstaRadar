"use client";

import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center glass-card rounded-2xl border-dashed border-white/10">
      <div className="p-4 rounded-full bg-white/5 mb-4">
        <Icon className="h-8 w-8 text-zinc-500" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 max-w-sm mb-6">{description}</p>
      {action && (
        <Link href={action.href}>
          <Button className="bg-gradient-primary hover:opacity-90">
            {action.label}
          </Button>
        </Link>
      )}
    </div>
  );
}
