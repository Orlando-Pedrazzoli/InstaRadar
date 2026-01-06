import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  href?: string;
}

export function FeatureCard({ icon, title, description, badge, href }: FeatureCardProps) {
  const content = (
    <div className="group relative p-6 rounded-2xl glass-card hover:border-white/10 transition-all duration-300 h-full">
      <div className="inline-flex p-3 rounded-xl bg-gradient-primary mb-4">
        {icon}
      </div>
      {badge && (
        <span className="absolute top-6 right-6 px-2 py-1 rounded-md bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      {href && (
        <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
          Learn more <ArrowRight className="h-4 w-4 ml-1" />
        </div>
      )}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
