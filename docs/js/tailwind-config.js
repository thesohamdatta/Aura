/* tailwind-config.js */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-tertiary-fixed-variant": "#00458e",
                "surface-bright": "#fcf8fb",
                "secondary-container": "#dfdfe1",
                "tertiary-container": "#ffffff",
                "tertiary": "#005cba",
                "on-surface": "#1b1b1d",
                "on-error-container": "#93000a",
                "surface-container-highest": "#e4e2e4",
                "tertiary-fixed": "#d7e3ff",
                "on-secondary-fixed-variant": "#454749",
                "secondary-fixed-dim": "#c6c6c8",
                "secondary-fixed": "#e2e2e4",
                "outline": "#747878",
                "tertiary-fixed-dim": "#aac7ff",
                "surface-container-high": "#eae7ea",
                "on-primary-container": "#747676",
                "on-surface-variant": "#444748",
                "primary-container": "#ffffff",
                "surface-container-low": "#f6f3f5",
                "primary-fixed": "#e2e2e2",
                "on-background": "#1b1b1d",
                "error-container": "#ffdad6",
                "surface": "#fcf8fb",
                "surface-dim": "#dcd9dc",
                "background": "#fcf8fb",
                "on-primary-fixed": "#1a1c1c",
                "surface-tint": "#5d5f5f",
                "inverse-surface": "#303032",
                "surface-container-lowest": "#ffffff",
                "surface-variant": "#e4e2e4",
                "inverse-primary": "#c6c6c7",
                "primary-fixed-dim": "#c6c6c7",
                "on-tertiary-fixed": "#001b3e",
                "error": "#ba1a1a",
                "on-error": "#ffffff",
                "on-tertiary": "#ffffff",
                "inverse-on-surface": "#f3f0f2",
                "on-tertiary-container": "#2474db",
                "surface-container": "#f0edef",
                "secondary": "#5d5e60",
                "primary": "#5d5f5f",
                "on-secondary-fixed": "#1a1c1d",
                "on-primary-fixed-variant": "#454747",
                "on-secondary-container": "#616365",
                "on-secondary": "#ffffff",
                "on-primary": "#ffffff",
                "outline-variant": "#c4c7c8",
                /* ── Apple Design System Tokens ── */
                "accent-blue":   "#0066cc",   /* Action Blue — universal interactive */
                "focus-blue":    "#0071e3",   /* Focus rings */
                "sky-blue":      "#2997ff",   /* In-copy links on dark surfaces */
                "canvas-white":  "#ffffff",
                "canvas-parchment": "#f5f5f7",
                "canvas-dark":   "#272729",   /* Apple Near-Black Tile */
                "canvas-black":  "#000000",
                "canvas-pearl":  "#fafafc",   /* Ghost button bg */
                "ink":           "#1d1d1f",   /* Body text on light */
                "ink-secondary": "#6e6e73",  /* Captions, meta */
                "ink-tertiary":  "#86868b",  /* Eyebrows, overlines */
                /* legacy aliases kept for backward compat */
                "bg-parchment": "#f5f5f7",
                "text-secondary": "#6e6e73"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px",
                "utility": "8px",    /* Secondary buttons, thumbnail images */
                "card": "18px",      /* Grid cards, spec tables */
                "tile": "0px"        /* Full-bleed alternating tiles */
            },
            "spacing": {
                "section-v-padding-mobile": "80px",
                "margin-base": "32px",
                "headline-max-width": "800px",
                "prose-max-width": "680px",
                "gutter": "24px",
                "section-v-padding": "140px"
            },
            "fontFamily": {
                "display": ["'SF Pro Display'", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
                "body":    ["'SF Pro Text'",    "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
                "mono":    ["SFMono-Regular", "Consolas", "Monaco", "monospace"],
                /* legacy aliases — keep for backward compat */
                "hero-h1": ["'SF Pro Display'", "Inter"],
                "overline": ["'SF Pro Text'", "Inter"],
                "section-h2": ["'SF Pro Display'", "Inter"],
                "section-h3": ["'SF Pro Display'", "Inter"],
                "label": ["'SF Pro Text'", "Inter"],
                "hero-h1-mobile": ["'SF Pro Display'", "Inter"],
                "section-h2-mobile": ["'SF Pro Display'", "Inter"]
            },
            "fontSize": {
                "hero-h1": ["80px", { "lineHeight": "1.1", "letterSpacing": "-0.028em", "fontWeight": "600" }],
                "overline": ["12px", { "lineHeight": "1.5", "letterSpacing": "0.08em", "fontWeight": "600" }],
                "section-h2": ["56px", { "lineHeight": "1.1", "letterSpacing": "-0.028em", "fontWeight": "600" }],
                "section-h3": ["28px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "400" }],
                "body": ["17px", { "lineHeight": "1.47", "letterSpacing": "-0.374px", "fontWeight": "400" }],
                "label": ["14px", { "lineHeight": "1.2", "fontWeight": "500" }],
                "hero-h1-mobile": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600" }],
                "section-h2-mobile": ["36px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600" }],
                
                /* ── Apple HIG Typography Tokens ── */
                "hero-display": ["56px", { "lineHeight": "1.07", "letterSpacing": "-0.28px", "fontWeight": "600" }],
                "display-lg": ["40px", { "lineHeight": "1.10", "letterSpacing": "0px", "fontWeight": "600" }],
                "display-md": ["34px", { "lineHeight": "1.47", "letterSpacing": "-0.374px", "fontWeight": "600" }],
                "lead": ["28px", { "lineHeight": "1.14", "letterSpacing": "0.196px", "fontWeight": "400" }],
                "lead-airy": ["24px", { "lineHeight": "1.50", "letterSpacing": "0px", "fontWeight": "300" }],
                "tagline": ["21px", { "lineHeight": "1.19", "letterSpacing": "0.231px", "fontWeight": "600" }],
                "body-strong": ["17px", { "lineHeight": "1.24", "letterSpacing": "-0.374px", "fontWeight": "600" }],
                "dense-link": ["17px", { "lineHeight": "2.41", "letterSpacing": "0px", "fontWeight": "400" }],
                "caption": ["14px", { "lineHeight": "1.43", "letterSpacing": "-0.224px", "fontWeight": "400" }],
                "caption-strong": ["14px", { "lineHeight": "1.29", "letterSpacing": "-0.224px", "fontWeight": "600" }],
                "button-large": ["18px", { "lineHeight": "1.0", "letterSpacing": "0px", "fontWeight": "300" }],
                "button-utility": ["14px", { "lineHeight": "1.29", "letterSpacing": "-0.224px", "fontWeight": "400" }],
                "fine-print": ["12px", { "lineHeight": "1.0", "letterSpacing": "-0.12px", "fontWeight": "400" }],
                "micro-legal": ["10px", { "lineHeight": "1.3", "letterSpacing": "-0.08px", "fontWeight": "400" }],
                "nav-link": ["12px", { "lineHeight": "1.0", "letterSpacing": "-0.12px", "fontWeight": "400" }]
            }
        },
    },
};
