import Link from 'next/link';
import { GraduationCap, Github, ExternalLink } from 'lucide-react';

const FOOTER_LINKS = [
  {
    heading: 'Learn',
    links: [
      { href: '/courses', label: 'All Courses' },
      { href: '/modules', label: 'All Modules' },
      { href: '/roadmap', label: 'Learning Roadmap' },
      { href: '/plan', label: '90-Day Plan' },
      { href: '/projects', label: 'Mini Projects' },
    ],
  },
  {
    heading: 'Reference',
    links: [
      { href: '/glossary', label: 'AI Glossary' },
      { href: '/tools', label: 'Tool Comparisons' },
      { href: '/prompts', label: 'Prompt Library' },
      { href: '/advanced', label: 'Advanced Concepts' },
    ],
  },
  {
    heading: 'Course',
    links: [
      { href: '/about', label: 'About This Course' },
      { href: '/faq', label: 'FAQ' },
      { href: '/safety', label: 'Safety & Ethics' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas-subtle transition-theme">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-fg-default"
            >
              <GraduationCap className="h-5 w-5 text-accent-fg" aria-hidden="true" />
              LearnAI
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              Practical AI literacy for everyday users. Learn AI tools, prompting, automation, and modern workflows — no coding required.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-muted transition-colors hover:text-accent-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-fg-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} LearnAI. Open knowledge for everyone.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mehtanilay10/LearnAI/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-fg-default"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
