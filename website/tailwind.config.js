/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Legacy compat tokens
        void: 'var(--void)',
        aura: 'var(--aura)',
        'aura-light': 'var(--aura-light)',
        plasma: 'var(--plasma)',
        ghost: 'var(--ghost)',
        graphite: 'var(--graphite)',
        mist: 'var(--mist)',
        // Apple Design System tokens (from DESIGN.md)
        'apple-blue':     '#0066cc',
        'apple-blue-focus': '#0071e3',
        'apple-blue-dark': '#2997ff',
        'apple-ink':      '#1d1d1f',
        'apple-canvas':   '#ffffff',
        'apple-parchment':'#f5f5f7',
        'apple-pearl':    '#fafafc',
        'apple-tile-1':   '#272729',
        'apple-tile-2':   '#2a2a2c',
        'apple-tile-3':   '#252527',
        'apple-black':    '#000000',
        'apple-hairline': '#e0e0e0',
        'apple-divider':  '#f0f0f0',
        'apple-chip':     '#d2d2d7',
        'apple-muted-80': '#333333',
        'apple-muted-48': '#7a7a7a',
        'apple-muted-body':'#cccccc',
      },
      fontFamily: {
        sans:    ['Inter', 'SF Pro Text', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'SF Pro Display', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['Fira Code', 'monospace'],
        serif:   ['Georgia', 'serif'],
      },
      borderRadius: {
        'apple-xs':  '5px',
        'apple-sm':  '8px',
        'apple-md':  '11px',
        'apple-lg':  '18px',
        'apple-pill':'9999px',
      },
      boxShadow: {
        'apple-product': 'rgba(0,0,0,0.22) 3px 5px 30px 0px',
        'apple-hairline':'0 1px 0 rgba(0,0,0,0.08)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
        'blink':      'blink 1.2s step-end infinite',
        'shimmer':    'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
