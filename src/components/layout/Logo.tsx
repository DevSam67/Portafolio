import { Link } from "react-router-dom";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className ?? ""}`} aria-label="Dev Sam, ir al inicio">
      <span className="flex size-8 items-center justify-center rounded-md border border-white/15 font-display text-xs font-bold tracking-tight text-foreground transition-colors group-hover:border-white/40">
        DS
      </span>
      <span className="font-display text-sm font-bold tracking-[0.22em] text-foreground">DEV SAM</span>
    </Link>
  );
}
