import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  icon: string;
  href: string;
  isPro?: boolean;
}

export function ToolCard({ name, description, icon, href, isPro }: ToolCardProps) {
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Wrench;

  return (
    <Link href={href} className="group">
      <div className="p-5 rounded-2xl glass-card border border-white/5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <IconComponent className="h-6 w-6" />
          </div>
          {isPro && (
            <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider border border-amber-500/20 flex items-center gap-1">
              <Star className="h-2.5 w-2.5 fill-amber-500" />
              Pro
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-zinc-400 text-sm mb-4 flex-1">{description}</p>
        <div className="flex items-center text-xs font-medium text-zinc-500 group-hover:text-white transition-colors">
          Open Tool <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
