# Icon Migration: Material Symbols → Lucide

## Current state

- **Material Symbols**: 47 occurrences across 5 pages
- **Inline SVGs**: 25 occurrences (custom, inconsistent)
- **Goal**: Single icon system — Lucide (vanilla JS for v1, lucide-react for v2)

## Migration mapping

| Material Symbol | Lucide Icon | Pages |
|---|---|---|
| `menu` | `menu` | All 5 |
| `mic` | `mic` | index, ai |
| `photo_camera` | `camera` | index |
| `memory` | `cpu` | index |
| `chevron_right` | `chevron-right` | index, about, docs |
| `desk` | `monitor` | index |
| `smartphone` | `smartphone` | index, about |
| `ecg_heart` | `heart-pulse` | index |
| `lock_open` | `lock-open` | index |
| `payments` | `credit-card` | index |
| `dns` | `server` | index |
| `school` | `graduation-cap` | index |
| `security` | `shield` | about, ai |
| `account_tree` | `git-branch` | about |
| `lock_reset` | `lock` | about |
| `language` | `globe` | about |
| `hive` | `hexagon` | about |
| `auto_awesome` | `sparkles` | about |
| `bolt` | `zap` | about, ai |
| `code` | `code` | index |
| `battery_charging_full` | `battery-charging` | index |
| `mail` | `mail` | ai |
| `calendar_today` | `calendar` | ai |
| `favorite` | `heart` | ai |
| `search` | `search` | ai |
| `psychology` | `brain` | ai |
| `database` | `database` | ai |
| `list` | `list` | docs |

## Installation

### Vanilla JS (current website)

```html
<!-- Add to <head> -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Initialize in <body> -->
<script>
  lucide.createIcons();
</script>
```

### Usage

```html
<!-- Before (Material Symbols) -->
<span class="material-symbols-outlined">menu</span>

<!-- After (Lucide) -->
<i data-lucide="menu"></i>
```

### Styling

Lucide icons inherit text color by default. To customize:

```css
/* Size */
i[data-lucide] {
  width: 24px;
  height: 24px;
}

/* Color */
i[data-lucide] {
  color: var(--color-ink);
}
```

## Inline SVGs

Replace all inline SVGs with Lucide equivalents where possible. Keep custom SVGs only for:
- Brand marks (Aura logo)
- Decorative illustrations
- Icons not available in Lucide

## Pages to update

1. `index.html` — 28 Material Symbols, 8 inline SVGs
2. `about.html` — 12 Material Symbols
3. `ai.html` — 10 Material Symbols, 2 inline SVGs
4. `docs.html` — 2 Material Symbols, 15 inline SVGs (sidebar)
5. `manifesto.html` — 1 Material Symbol
