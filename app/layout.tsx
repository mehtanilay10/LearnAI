import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { PWARegistration } from '@/components/ui/PWARegistration';
import { ContinuePrompt } from '@/components/ui/ContinuePrompt';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'LearnAI — Practical AI Literacy Course',
    template: '%s | LearnAI',
  },
  description:
    'Learn AI tools, prompting, automation, agents, and modern workflows — no coding required. A practical AI literacy course for everyday users.',
  keywords: ['AI', 'artificial intelligence', 'prompting', 'ChatGPT', 'learning', 'course', 'automation'],
  authors: [{ name: 'LearnAI' }],
  robots: { index: true, follow: true },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/logo-light.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo-light.svg',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'LearnAI',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'LearnAI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex min-h-screen flex-col bg-canvas text-fg-default antialiased transition-theme">
        <PWARegistration />
        <ContinuePrompt />
        <ThemeProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent-fg focus:px-4 focus:py-2 focus:text-white">
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
