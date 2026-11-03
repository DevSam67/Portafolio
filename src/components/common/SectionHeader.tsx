import type { ReactNode } from "react";
import { Reveal } from "@/components/common/Reveal";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  action?: ReactNode;
}

export function SectionHeader({ label, title, description, action }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <Reveal className="max-w-2xl">
        <p className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
          <span className="h-px w-8 bg-muted-foreground/60" />
          {label}
        </p>
        <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h2>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        )}
      </Reveal>
      {action && <Reveal delay={150}>{action}</Reveal>}
    </div>
  );
}
