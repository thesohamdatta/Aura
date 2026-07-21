import {defineTheme} from '@astryxdesign/core/theme';
import {neutralTheme} from '@astryxdesign/theme-neutral';

export const appleTheme = defineTheme({
  name: 'aura-apple',
  extends: neutralTheme,
  color: {
    accent: '#0066cc',
    neutralStyle: 'neutral',
  },
  typography: {
    body: {
      family: 'Figtree, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    heading: {
      family: 'Figtree, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
  },
  tokens: {
    // Apple canvas colors
    '--color-background-body': ['#f5f5f7', '#161618'],
    '--color-background-surface': ['#ffffff', '#1d1d1f'],
    '--color-background-card': ['#ffffff', '#272729'],

    // Apple ink/text colors
    '--color-text-primary': ['#1d1d1f', '#f5f5f7'],
    '--color-text-secondary': ['#6e6e73', '#a1a1a6'],
    '--color-text-disabled': ['#86868b', '#6e6e73'],

    // Apple accent/interactive
    '--color-accent': ['#0066cc', '#2997ff'],
    '--color-accent-muted': ['rgba(0,102,204,0.08)', 'rgba(41,151,255,0.15)'],

    // Apple borders
    '--color-border': ['rgba(0,0,0,0.08)', 'rgba(255,255,255,0.1)'],
    '--color-border-emphasized': ['rgba(0,0,0,0.15)', 'rgba(255,255,255,0.2)'],

    // Apple overlays
    '--color-overlay': ['rgba(255,255,255,0.72)', 'rgba(29,29,31,0.72)'],
  },
  components: {
    card: {
      base: {
        borderRadius: '18px',
      },
    },
    button: {
      base: {
        borderRadius: '9999px',
      },
    },
  },
});
