/* tailwind-config.js
 *
 * Apple-inspired token mirror of css/global.css (canonical).
 * Every color/font/spacing value here must match the corresponding
 * --color-*, --font-*, --spacing-* value in global.css byte-for-byte.
 * Verified by the token-parity rule in scratch/verify_design_system.js
 * (see docs/specs/DEVELOPMENT_GUIDE.md § 4.4).
 *
 * Do NOT add tokens here that don't exist in global.css. If you need a
 * new token, add it to global.css first, then mirror it here.
 */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            /* ── Canvas Colors ──────────────────────────────── */
            "canvas-white":   "#ffffff",
            "canvas-parchment": "#f5f5f7",
            "canvas-dark":    "#272729",
            "canvas-black":   "#000000",
            "canvas-pearl":   "#fafafc",

            /* ── Text Colors ────────────────────────────────── */
            "ink":           "#1d1d1f",
            "ink-secondary": "#6e6e73",
            "ink-tertiary":  "#86868b",

            /* ── Interactive Colors ─────────────────────────── */
            "accent-blue":   "#0066cc",
            "focus-blue":    "#0071e3",
            "sky-blue":      "#2997ff",
            "green":         "#00a854",

            /* ── Auxiliary canvas / brand tokens ────────────── */
            "canvas-deep":   "#1c1c1e",
            "canvas-fog":    "#ebebeb",
            "outline-soft":  "#d2d2d7",
            "ios-red":       "#ff2d55",
            "search-teal":   "#00a389",
        },
        borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px",
            "utility": "8px",    /* Secondary buttons, thumbnail images */
            "card": "18px",      /* Grid cards, spec tables */
            "tile": "0px"        /* Full-bleed alternating tiles */
        },
        transitionTimingFunction: {
            "apple-spring": "cubic-bezier(0.16, 1, 0.3, 1)",
            "apple-soft":  "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            "apple-pill":  "cubic-bezier(0.32, 0.72, 0, 1)"
        },
        spacing: {
            "section-v-padding-mobile": "60px",
            "margin-base": "32px",
            "headline-max-width": "800px",
            "prose-max-width": "680px",
            "gutter": "24px",
            "section-v-padding": "80px"
        },
        fontFamily: {
            "sans": [
                "SF Pro Text",
                "-apple-system",
                "BlinkMacSystemFont",
                "Helvetica Neue",
                "Arial",
                "sans-serif"
            ],
            "display": [
                "SF Pro Display",
                "-apple-system",
                "BlinkMacSystemFont",
                "Helvetica Neue",
                "Arial",
                "sans-serif"
            ],
            "rounded": [
                "SF Pro Rounded",
                "-apple-system",
                "BlinkMacSystemFont",
                "Helvetica Neue",
                "Arial",
                "sans-serif"
            ],
            "mono": [
                "SF Mono",
                "Fira Code",
                "Consolas",
                "monospace"
            ]
        },
        fontSize: {
            "hero-h1": ["80px", { "lineHeight": "1.1", "letterSpacing": "-0.028em", "fontWeight": "600" }],
            "overline": ["12px", { "lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "600" }],
            "section-h2": ["56px", { "lineHeight": "1.1", "letterSpacing": "-0.028em", "fontWeight": "600" }],
            "section-h3": ["28px", { "lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "400" }],
            "body": ["17px", { "lineHeight": "1.47", "letterSpacing": "-0.374px", "fontWeight": "400" }],
            "label": ["14px", { "lineHeight": "1.2", "fontWeight": "500" }],
            "hero-h1-mobile": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600" }],
            "section-h2-mobile": ["36px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "600" }],
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
};