import { cn } from '@/lib/utils';
import type { Phase } from '@/types';
import Link from 'next/link';
import { CheckCircle2, Circle, Lock } from 'lucide-react';

interface RoadmapPhaseProps {
  phase: Phase;
  isLast: boolean;
  completedModules?: Set<string>;
}

function RoadmapPhase({ phase, isLast, completedModules = new Set() }: RoadmapPhaseProps) {
  const colorMap: Record<string, string> = {
    accent: 'bg-accent-subtle border-accent-fg text-accent-fg',
    success: 'bg-success-subtle border-success-fg text-success-fg',
    attention: 'bg-attention-subtle border-attention-fg text-attention-fg',
    done: 'bg-done-muted border-done-fg text-done-fg',
  };
  const dotColor = colorMap[phase.color] ?? colorMap['accent'];

  return (
    <div className="relative flex gap-4 animate-fade-in">
      {/* Vertical line */}
      {!isLast && (
        <div
          className="absolute left-5 top-10 bottom-0 w-0.5 bg-border"
          aria-hidden="true"
        />
      )}

      {/* Phase indicator */}
      <div
        className={cn(
          'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-lg',
          dotColor
        )}
        aria-hidden="true"
      >
        {phase.icon}
      </div>

      <div className="flex-1 pb-10">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="font-semibold text-fg-default">{phase.title}</h3>
          <span className="rounded-full border border-border px-2 py-0 text-xs text-fg-subtle">
            ~{phase.estimatedWeeks} weeks
          </span>
        </div>
        <p className="mb-3 text-sm text-fg-muted">{phase.description}</p>

        <div className="flex flex-wrap gap-2">
          {phase.moduleSlug.map((slug) => {
            const done = completedModules.has(slug);
            return (
              <Link
                key={slug}
                href={`/modules/${slug}`}
                className={cn(
                  'flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all',
                  done
                    ? 'border-success-muted bg-success-subtle text-success-fg'
                    : 'border-border bg-canvas text-fg-muted hover:border-accent-fg hover:text-accent-fg dark:bg-canvas-subtle'
                )}
              >
                {done ? (
                  <CheckCircle2 className="h-3 w-3 text-success-fg" aria-hidden="true" />
                ) : (
                  <Circle className="h-3 w-3 text-fg-subtle" aria-hidden="true" />
                )}
                {slug
                  .split('-')
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(' ')}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface RoadmapTimelineProps {
  phases: Phase[];
  completedModules?: Set<string>;
  className?: string;
}

export function RoadmapTimeline({
  phases,
  completedModules,
  className,
}: RoadmapTimelineProps) {
  const sorted = [...phases].sort((a, b) => a.order - b.order);

  return (
    <div className={cn('relative', className)}>
      {sorted.map((phase, idx) => (
        <RoadmapPhase
          key={phase.id}
          phase={phase}
          isLast={idx === sorted.length - 1}
          completedModules={completedModules}
        />
      ))}
    </div>
  );
}
