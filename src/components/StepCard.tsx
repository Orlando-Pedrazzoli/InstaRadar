interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative text-center group">
      <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6 glow-sm group-hover:glow transition-all">
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}
