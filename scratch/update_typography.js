const fs = require("fs");
const path = require("path");

const websiteDir = path.join(__dirname, "../website");

const pages = [
  "index.html",
  "about.html",
  "ai.html",
  "docs.html",
  "manifesto.html",
];

pages.forEach((page) => {
  const filePath = path.join(websiteDir, page);
  if (!fs.existsSync(filePath)) {
    console.log(`Error: File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, "utf-8");
  let originalContent = content;

  // 1. Global Regex Replacements for standard classes

  // Section h2 (mobile 36px, desktop 56px) -> display-md (34px) / display-lg (40px) or hero-display (56px)
  // Let's standardise section headers to: font-display text-display-md md:text-hero-display
  content = content.replace(
    /font-section-h2-mobile md:font-section-h2 text-section-h2-mobile md:text-section-h2/g,
    "font-display text-display-md md:text-hero-display"
  );
  content = content.replace(
    /font-section-h2 text-section-h2-mobile md:text-section-h2/g,
    "font-display text-display-md md:text-hero-display"
  );

  // Hero h1 (mobile 48px, desktop 80px) -> display-lg (40px) md:hero-display (56px)
  content = content.replace(
    /font-hero-h1-mobile md:font-hero-h1 text-hero-h1-mobile md:text-hero-h1/g,
    "font-display text-display-lg md:text-hero-display"
  );
  content = content.replace(
    /font-hero-h1-mobile md:font-hero-h1 text-hero-h1-mobile md:text-\[56px\]/g,
    "font-display text-display-lg md:text-hero-display"
  );
  content = content.replace(
    /font-hero-h1 text-hero-h1-mobile md:text-hero-h1/g,
    "font-display text-display-lg md:text-hero-display"
  );

  // Section h3 (28px) -> font-display text-lead
  content = content.replace(
    /font-section-h3 text-section-h3/g,
    "font-display text-lead"
  );

  // Large Stat text-[56px] md:text-[72px] font-extrabold text-on-surface
  content = content.replace(
    /text-\[56px\] md:text-\[72px\] font-extrabold text-on-surface/g,
    "font-display text-display-lg md:text-hero-display font-extrabold text-ink"
  );

  // Text colors and backgrounds
  content = content.replace(/text-text-secondary/g, "text-ink-secondary");
  content = content.replace(/bg-bg-parchment/g, "bg-canvas-parchment");

  // 2. Specific Page Replacements for remaining outliers
  if (page === "index.html") {
    // Brand link style double quotes
    content = content.replace(
      'class="font-display text-tagline style="color: #ffffff;"',
      'class="font-display text-tagline" style="color: #ffffff;"'
    );
  }

  if (page === "about.html") {
    // CAD labels on thumbnails
    content = content.replace(
      /text-on-surface font-label bg-surface\/90 px-3 py-1 rounded-full/g,
      "text-ink font-body bg-canvas-white/90 px-3 py-1 rounded-full text-fine-print"
    );
  }

  if (page === "ai.html") {
    // frontiers hero subtitle
    content = content.replace(
      'class="font-hero-h1 text-hero-h1-mobile md:text-hero-h1 max-w-headline-md mx-auto mb-6 text-white"',
      'class="font-display text-display-lg md:text-hero-display max-w-headline-md mx-auto mb-6 text-white"'
    );
    // Latency note footer sizing
    content = content.replace(
      /text-\[11px\] text-ink-secondary max-w-\[800px\]/g,
      "text-fine-print text-ink-secondary max-w-[800px]"
    );
  }

  if (page === "docs.html") {
    // Left-aligned system architecture hero title
    content = content.replace(
      'class="font-hero-h1-mobile md:font-hero-h1 text-hero-h1-mobile md:text-[56px] leading-tight tracking-tight text-on-surface text-left mb-6"',
      'class="font-display text-display-lg md:text-hero-display leading-tight tracking-tight text-ink text-left mb-6"'
    );
  }

  // Write changes
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Successfully refined and wrote: ${page}`);
  } else {
    console.log(`No updates needed for: ${page}`);
  }
});

console.log("\nTypography regex refinements complete!");
