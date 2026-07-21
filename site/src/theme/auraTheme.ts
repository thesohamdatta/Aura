/**
 * Aura Theme
 *
 * Refined, minimal design system for a premium open-source hardware product.
 * Neutral canvas with one warm accent. Product photography carries the visual weight.
 * Typography: Inter for body/headings, JetBrains Mono for code.
 */

import {defineTheme, defineSyntaxTheme} from '@astryxdesign/core/theme';
import {y2kIconRegistry} from './icons';

const auraSyntax = defineSyntaxTheme({
  name: 'xds-aura',
  tokens: {
    keyword: ['#1e40af', '#93c5fd'],
    string: ['#166534', '#86efac'],
    comment: ['#6b7280', '#9ca3af'],
    number: ['#9a3412', '#fdba74'],
    function: ['#0e7490', '#67e8f9'],
    type: ['#1e40af', '#93c5fd'],
    variable: ['#374151', '#d1d5db'],
    operator: ['#374151', '#d1d5db'],
    constant: ['#9a3412', '#fdba74'],
    tag: ['#be123c', '#fda4af'],
    attribute: ['#92400e', '#fcd34d'],
    property: ['#047857', '#6ee7b7'],
    punctuation: ['#6b7280', '#9ca3af'],
    background: ['#FAFAF9', '#0A0A0A'],
  },
});

export const auraTheme = defineTheme({
  name: 'aura',

  typography: {
    scale: {base: 16, ratio: 1.25},
    body: {
      family: 'Inter',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    heading: {
      family: 'Inter',
      fallbacks:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    code: {
      family: 'JetBrains Mono',
      fallbacks: '"SF Mono", Monaco, Consolas, monospace',
    },
  },

  radius: {base: 8, multiplier: 1},

  motion: {fast: 100, medium: 200, slow: 400, ratio: 0.8},

  syntax: auraSyntax,

  tokens: {
    '--spacing-0-5': '2px',
    '--spacing-1': '4px',
    '--spacing-1-5': '6px',
    '--spacing-2': '8px',
    '--spacing-3': '12px',
    '--spacing-4': '16px',
    '--spacing-5': '20px',
    '--spacing-6': '24px',
    '--spacing-7': '32px',
    '--spacing-8': '40px',
    '--size-element-sm': '32px',
    '--size-element-md': '40px',
    '--size-element-lg': '48px',
    '--color-accent': ['#2563EB', '#60A5FA'],
    '--color-accent-muted': ['#2563EB14', '#60A5FA20'],
    '--color-neutral': ['#17171710', '#F5F5F51A'],
    '--color-background-surface': ['#FFFFFF', '#141414'],
    '--color-background-body': ['#FFFFFF', '#0A0A0A'],
    '--color-overlay': ['#17171780', '#000000CC'],
    '--color-overlay-hover': ['#1717170D', '#FFFFFF0D'],
    '--color-overlay-pressed': ['#1717171A', '#FFFFFF1A'],
    '--color-background-muted': ['#F7F7F5', '#1A1A1A'],
    '--color-text-primary': ['#171717', '#F5F5F5'],
    '--color-text-secondary': ['#6B7280', '#A1A1AA'],
    '--color-text-disabled': ['#D1D5DB', '#525252'],
    '--color-text-accent': ['#2563EB', '#60A5FA'],
    '--color-on-dark': '#F5F5F5',
    '--color-on-light': '#171717',
    '--color-on-accent': ['#FFFFFF', '#0A0A0A'],
    '--color-on-success': ['#166534', '#4ade80'],
    '--color-on-error': ['#991B1B', '#fca5a5'],
    '--color-on-warning': ['#92400E', '#fcd34d'],
    '--color-icon-accent': ['#2563EB', '#60A5FA'],
    '--color-icon-primary': ['#171717', '#F5F5F5'],
    '--color-icon-secondary': ['#6B7280', '#A1A1AA'],
    '--color-icon-disabled': ['#D1D5DB', '#525252'],
    '--color-background-card': ['#FFFFFF', '#141414'],
    '--color-background-popover': ['#FFFFFF', '#1A1A1A'],
    '--color-background-inverted': ['#171717', '#F5F5F5'],
    '--color-success': ['#22C55E', '#22C55E'],
    '--color-success-muted': ['#DCFCE7', '#DCFCE7'],
    '--color-error': ['#EF4444', '#EF4444'],
    '--color-error-muted': ['#FEE2E2', '#FEE2E2'],
    '--color-warning': ['#F59E0B', '#F59E0B'],
    '--color-warning-muted': ['#FEF3C7', '#FEF3C7'],
    '--color-border': ['#E5E5E5', '#262626'],
    '--color-border-emphasized': ['#D4D4D4', '#404040'],
    '--color-skeleton': ['#E5E5E5', '#262626'],
    '--color-shadow': ['#1717171A', '#0000004D'],
    '--color-tint-hover': ['#171717', '#F5F5F5'],
    '--text-supporting-size': '12px',
    '--color-background-green': ['#DCFCE7', '#DCFCE7'],
    '--color-border-green': ['#BBF7D0', '#BBF7D0'],
    '--color-icon-green': ['#166534', '#166534'],
    '--color-text-green': ['#166534', '#166534'],
    '--color-background-red': ['#FEE2E2', '#FEE2E2'],
    '--color-border-red': ['#FECACA', '#FECACA'],
    '--color-icon-red': ['#991B1B', '#991B1B'],
    '--color-text-red': ['#991B1B', '#991B1B'],
    '--color-background-yellow': ['#FEF3C7', '#FEF3C7'],
    '--color-border-yellow': ['#FDE68A', '#FDE68A'],
    '--color-icon-yellow': ['#92400E', '#92400E'],
    '--color-text-yellow': ['#92400E', '#92400E'],
    '--color-background-blue': ['#DBEAFE', '#DBEAFE'],
    '--color-border-blue': ['#BFDBFE', '#BFDBFE'],
    '--color-icon-blue': ['#1E40AF', '#1E40AF'],
    '--color-text-blue': ['#1E40AF', '#1E40AF'],
    '--color-background-pink': ['#FCE7F3', '#FCE7F3'],
    '--color-border-pink': ['#FBCFE8', '#FBCFE8'],
    '--color-icon-pink': ['#9D174D', '#9D174D'],
    '--color-text-pink': ['#9D174D', '#9D174D'],
    '--color-background-purple': ['#EDE9FE', '#EDE9FE'],
    '--color-border-purple': ['#DDD6FE', '#DDD6FE'],
    '--color-icon-purple': ['#5B21B6', '#5B21B6'],
    '--color-text-purple': ['#5B21B6', '#5B21B6'],
    '--color-background-cyan': ['#CFFAFE', '#CFFAFE'],
    '--color-border-cyan': ['#A5F3FC', '#A5F3FC'],
    '--color-icon-cyan': ['#0E7490', '#0E7490'],
    '--color-text-cyan': ['#0E7490', '#0E7490'],
    '--color-background-orange': ['#FFEDD5', '#FFEDD5'],
    '--color-border-orange': ['#FED7AA', '#FED7AA'],
    '--color-icon-orange': ['#9A3412', '#9A3412'],
    '--color-text-orange': ['#9A3412', '#9A3412'],
    '--color-background-teal': ['#CCFBF1', '#CCFBF1'],
    '--color-border-teal': ['#99F6E4', '#99F6E4'],
    '--color-icon-teal': ['#0F766E', '#0F766E'],
    '--color-text-teal': ['#0F766E', '#0F766E'],
    '--color-background-gray': ['#F3F4F6', '#F3F4F6'],
    '--color-border-gray': ['#E5E7EB', '#E5E7EB'],
    '--color-icon-gray': ['#374151', '#374151'],
    '--color-text-gray': ['#374151', '#374151'],
    '--radius-none': '0px',
    '--radius-inner': '4px',
    '--radius-element': '8px',
    '--radius-container': '12px',
    '--radius-page': '16px',
    '--radius-full': '9999px',
    '--shadow-low': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
    '--shadow-med': '0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04)',
    '--shadow-high': '0 10px 15px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.04)',
    '--shadow-inset-hover': 'inset 0px 0px 0px 2px #2563EB30',
    '--shadow-inset-selected': 'inset 0px 0px 0px 2px #2563EB50',
    '--shadow-inset-success': 'inset 0px 0px 0px 2px #22C55E50',
    '--shadow-inset-warning': 'inset 0px 0px 0px 2px #F59E0B50',
    '--shadow-inset-error': 'inset 0px 0px 0px 2px #EF444450',
  },

  components: {
    text: {
      'type:display-1': {
        fontFamily: 'Inter',
        fontWeight: '700',
        letterSpacing: '-0.03em',
        lineHeight: '1.05',
      },
      'type:display-2': {
        fontFamily: 'Inter',
        fontWeight: '700',
        letterSpacing: '-0.025em',
        lineHeight: '1.1',
      },
      'type:display-3': {
        fontFamily: 'Inter',
        fontWeight: '600',
        letterSpacing: '-0.02em',
        lineHeight: '1.2',
      },
    },
    'top-nav-item': {
      selected: {
        backgroundColor: 'transparent',
        fontWeight: '500',
        ':hover': {
          backgroundColor: 'var(--color-overlay-hover)',
        },
        ':active': {
          backgroundColor: 'var(--color-overlay-pressed)',
        },
      },
    },
    button: {
      base: {
        borderRadius: '8px',
        fontWeight: '500',
      },
      'variant:primary': {
        backgroundColor: 'var(--color-accent)',
        color: '#FFFFFF',
        borderColor: 'transparent',
        ':hover': {
          backgroundColor: 'var(--color-accent-hover)',
        },
      },
      'variant:secondary': {
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--color-border-emphasized)',
        color: 'var(--color-text-primary)',
        ':hover': {
          backgroundColor: 'var(--color-overlay-hover)',
        },
      },
      'variant:ghost': {
        borderColor: 'transparent',
      },
      'variant:destructive': {
        backgroundColor: 'var(--color-background-red)',
        color: 'var(--color-text-red)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'var(--color-border-red)',
      },
    },
    badge: {
      base: {
        borderRadius: '9999px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'color-mix(in srgb, currentColor 20%, transparent)',
        fontWeight: '500',
      },
    },
    card: {
      base: {
        borderRadius: '12px',
        padding: 'var(--spacing-6)',
      },
    },
    section: {
      base: {
        padding: 'var(--spacing-3)',
      },
    },
  },

  icons: y2kIconRegistry,
});
