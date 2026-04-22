import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Target, Lightbulb } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { weeklyPlan } from '@/content/weekly-plan';

export const metadata: Metadata = {
  title: '90-Day AI Learning Plan',
  description: 'A structured 90-day plan to go from AI beginner to confident AI user. Week-by-week goals, modules, and tips.',
};

const PHASE_COLORS = [
  'border-accent-muted bg-accent-subtle',
  'border-success-muted bg-success-subtle',
  'border-attention-muted bg-attention-subtle',
] as const;

export default function PlanPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="90-Day Plan"
        title="Your AI Learning Journey"
        description="A realistic, structured plan to go from beginner to confident AI user in 90 days — at your own pace, with no coding required."
        titleAs="h1"
      />

      <CalloutBox
        variant="info"
        title="This is a guide, not a contract"
        text="Life happens. If a week takes two weeks, that's fine. The order matters more than the timeline. Come back to this plan whenever you need a reset."
        className="mb-8"
      />

      {/* Overview metrics */}
      <div className="mb-8 grid grid-cols-3 gap-4 rounded-xl border border-border bg-canvas-subtle p-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-fg-default">12</p>
          <p className="text-xs text-fg-muted">Weeks</p>
        </div>
        <div className="border-x border-border text-center">
          <p className="text-2xl font-bold text-fg-default">3–5</p>
          <p className="text-xs text-fg-muted">Hrs/week</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-fg-default">∞</p>
          <p className="text-xs text-fg-muted">Your pace</p>
        </div>
      </div>

      {/* Weeks */}
      <div className="space-y-6">
        {weeklyPlan.map((week, idx) => (
          <div
            key={week.id}
            className={`rounded-xl border-2 p-5 ${PHASE_COLORS[idx % PHASE_COLORS.length]}`}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <div className="mb-0.5 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-fg-subtle" aria-hidden="true" />
                  <span className="text-xs font-medium text-fg-subtle">Week {week.week}</span>
                </div>
                <h2 className="text-lg font-bold text-fg-default">{week.title}</h2>
              </div>
              <span className="rounded-full border border-border bg-canvas/60 px-2 py-0.5 text-xs font-medium text-fg-muted capitalize">
                {week.focus}
              </span>
            </div>

            <p className="mb-4 text-sm text-fg-muted">{week.description}</p>

            {/* Goals */}
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-fg-subtle">
                <Target className="h-3.5 w-3.5" aria-hidden="true" />
                GOALS THIS WEEK
              </div>
              <ul className="space-y-1.5">
                {week.goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-fg-default">
                    <span className="mt-0.5 shrink-0 text-accent-fg">→</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3">
              {week.moduleSlugs?.map((slug) => (
                <Link
                  key={slug}
                  href={`/modules/${slug}`}
                  className="flex items-center gap-1 text-xs font-medium text-accent-fg hover:underline"
                >
                  View module
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              ))}
              {week.tools && (
                <Link
                  href="/tools"
                  className="text-xs text-fg-muted hover:text-accent-fg transition-colors"
                >
                  Tools: {week.tools.join(', ')}
                </Link>
              )}
            </div>

            {/* Tip */}
            {week.tip && (
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-canvas/60 px-3 py-2 border border-border/50">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-attention-fg" aria-hidden="true" />
                <p className="text-xs text-fg-muted italic">{week.tip}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
