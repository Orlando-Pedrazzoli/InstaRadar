interface PageHeroProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  badge?: string;
}

export function PageHero({ title, subtitle, children, badge }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 border border-white/5">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">{badge}</span>
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title.includes("|") ? (
            <>
              {title.split("|")[0]}
              <span className="text-gradient block md:inline">{title.split("|")[1]}</span>
            </>
          ) : (
            title
          )}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>
        {children && <div className="animate-fade-in-up">{children}</div>}
      </div>
    </section>
  );
}
