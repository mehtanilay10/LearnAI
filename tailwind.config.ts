import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // GitHub-inspired palette
        canvas: {
          DEFAULT: '#ffffff',
          subtle: '#f6f8fa',
          inset: '#eaeef2',
          overlay: '#ffffff',
        },
        fg: {
          DEFAULT: '#24292f',
          muted: '#57606a',
          subtle: '#6e7781',
          onEmphasis: '#ffffff',
        },
        border: {
          DEFAULT: '#d0d7de',
          muted: '#e7ecf0',
          subtle: '#f0f3f6',
        },
        accent: {
          fg: '#0969da',
          emphasis: '#0550ae',
          muted: '#ddf4ff',
          subtle: '#f0f6ff',
        },
        success: {
          fg: '#1a7f37',
          emphasis: '#2da44e',
          muted: '#d1f3d8',
          subtle: '#f0fff4',
        },
        attention: {
          fg: '#9a6700',
          emphasis: '#bf8700',
          muted: '#fff8c5',
          subtle: '#fffdf0',
        },
        danger: {
          fg: '#cf222e',
          emphasis: '#a40e26',
          muted: '#ffd8d3',
          subtle: '#fff0ee',
        },
        severe: {
          fg: '#bc4c00',
          emphasis: '#d4460f',
          muted: '#ffe1cc',
          subtle: '#fff7f0',
        },
        done: {
          fg: '#8250df',
          emphasis: '#6639ba',
          muted: '#eddff8',
          subtle: '#f8f0ff',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          '"SF Mono"',
          'Menlo',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.25s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
