const fs = require('fs');
const path = require('path');

const navCssPath = path.join(__dirname, '../website/css/nav.css');
const docsCssPath = path.join(__dirname, '../website/css/docs.css');
const globalCssPath = path.join(__dirname, '../website/css/global.css');
const styleCssPath = path.join(__dirname, '../website/css/style.css');
const websiteDir = path.join(__dirname, '../website');

const pages = [
  'index.html',
  'about.html',
  'ai.html',
  'docs.html',
  'manifesto.html'
];

let testFailures = 0;

function runTest(name, assertFn) {
  try {
    assertFn();
    console.log(`[PASS] ${name}`);
  } catch (err) {
    console.error(`[FAIL] ${name}`);
    console.error(`       Error: ${err.message}`);
    testFailures++;
  }
}

// ----------------------------------------------------
// TEST CASE 1: Single Unified Navbar in HTML
// ----------------------------------------------------
runTest('All HTML pages have exactly one navbar and no secondary sub-nav', () => {
  pages.forEach(page => {
    const pagePath = path.join(websiteDir, page);
    if (!fs.existsSync(pagePath)) {
      throw new Error(`${page} not found`);
    }
    const html = fs.readFileSync(pagePath, 'utf-8');

    // Should have only one navbar
    const navCount = (html.match(/<nav\s+id="navbar"/g) || []).length;
    if (navCount !== 1) {
      throw new Error(`${page} has ${navCount} <nav id="navbar"> elements instead of exactly 1`);
    }

    // Should NOT have secondary sub-nav class markup
    if (html.includes('class="sub-nav"') || html.includes('class="sub-nav-inner"')) {
      throw new Error(`${page} still contains sub-nav markup ('class="sub-nav"')`);
    }

    // Should contain all 5 core navigation links
    const links = ['index.html', 'about.html', 'manifesto.html', 'docs.html', 'ai.html'];
    links.forEach(link => {
      if (!html.includes(`href="${link}"`)) {
        throw new Error(`${page} is missing navigation link to ${link}`);
      }
    });
  });
});

// ----------------------------------------------------
// TEST CASE 2: Frosted Glass Navbar CSS Specs
// ----------------------------------------------------
runTest('Navbar CSS specifies frosted-glass aesthetics, height of 52px, and 100% width inner container', () => {
  if (!fs.existsSync(navCssPath)) {
    throw new Error('nav.css not found');
  }
  const css = fs.readFileSync(navCssPath, 'utf-8');

  // Verify #navbar has 52px height and frosted-glass blur
  const navbarMatch = css.match(/#navbar\s*\{([^}]*)\}/);
  if (!navbarMatch) {
    throw new Error('Could not find #navbar ruleset in nav.css');
  }
  const navbarRules = navbarMatch[1];
  
  if (!navbarRules.includes('height: 52px')) {
    throw new Error('#navbar is not configured with a premium "height: 52px"');
  }
  if (!navbarRules.includes('backdrop-filter') || !navbarRules.includes('blur')) {
    throw new Error('#navbar is missing frosted-glass backdrop-filter blur style');
  }

  // Verify sub-nav classes are not present
  if (css.includes('.sub-nav ') || css.includes('.sub-nav-inner')) {
    throw new Error('nav.css still contains obsolete .sub-nav styling rules');
  }

  // Verify .nav-inner has width: 100%
  const navInnerMatch = css.match(/\.nav-inner\s*\{([^}]*)\}/);
  if (!navInnerMatch) {
    throw new Error('Could not find .nav-inner ruleset in nav.css');
  }
  const navInnerRules = navInnerMatch[1];
  if (!navInnerRules.includes('width: 100%')) {
    throw new Error('.nav-inner is missing "width: 100%"');
  }
});

// ----------------------------------------------------
// TEST CASE 3: Global CSS has required design tokens
// ----------------------------------------------------
runTest('global.css contains all required CSS custom property tokens', () => {
  if (!fs.existsSync(globalCssPath)) {
    throw new Error('global.css not found');
  }
  const css = fs.readFileSync(globalCssPath, 'utf-8');

  const requiredVars = [
    '--color-ink',
    '--color-canvas-white',
    '--color-canvas-parchment',
    '--color-canvas-dark',
    '--color-action-blue',
    '--font-display',
    '--font-text',
    '--font-mono',
    '--radius-pill',
    '--radius-card',
  ];

  requiredVars.forEach(v => {
    if (!css.includes(v)) {
      throw new Error(`global.css is missing required token: ${v}`);
    }
  });
});

// ----------------------------------------------------
// TEST CASE 4: style.css has component patterns
// ----------------------------------------------------
runTest('style.css contains required component patterns (.btn-primary, .btn-ghost, .spec-card)', () => {
  if (!fs.existsSync(styleCssPath)) {
    throw new Error('style.css not found');
  }
  const css = fs.readFileSync(styleCssPath, 'utf-8');

  const requiredClasses = ['.btn-primary', '.btn-ghost', '.spec-card', '.section-white', '.section-parchment', '.section-dark'];
  requiredClasses.forEach(cls => {
    if (!css.includes(cls)) {
      throw new Error(`style.css is missing required class: ${cls}`);
    }
  });
});

// ----------------------------------------------------
// TEST CASE 5: Docs Typography (No Monospace on Headers)
// ----------------------------------------------------
runTest('Docs section headers, table headers, and mobile select do not use monospace', () => {
  if (!fs.existsSync(docsCssPath)) {
    throw new Error('docs.css not found');
  }
  const css = fs.readFileSync(docsCssPath, 'utf-8');

  const sectionMatch = css.match(/\.docs-sidebar\s+\.sidebar-section\s*\{([^}]*)\}/);
  if (sectionMatch && sectionMatch[1].includes('var(--font-mono)')) {
    throw new Error('.docs-sidebar .sidebar-section is using var(--font-mono)');
  }

  const tableThMatch = css.match(/\.docs-table\s+th\s*\{([^}]*)\}/);
  if (tableThMatch && tableThMatch[1].includes('var(--font-mono)')) {
    throw new Error('.docs-table th is using var(--font-mono)');
  }

  const selectMatch = css.match(/\.mobile-docs-nav\s+select\s*\{([^}]*)\}/);
  if (selectMatch && selectMatch[1].includes('var(--font-mono)')) {
    throw new Error('.mobile-docs-nav select is using var(--font-mono)');
  }
});

// ----------------------------------------------------
// TEST CASE 6: Bento Grid Gallery Specs
// ----------------------------------------------------
runTest('Take a Closer Look gallery uses Bento Grid rounded cards and zoom hover transitions', () => {
  const indexPath = path.join(websiteDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error('index.html not found');
  }
  const html = fs.readFileSync(indexPath, 'utf-8');

  // Extract content between "TAKE A CLOSER LOOK" and the next section (VOICE STORY)
  const galleryStart = html.indexOf('<!-- 3. TAKE A CLOSER LOOK -->');
  const galleryEnd = html.indexOf('<!-- 4. VOICE STORY -->');
  if (galleryStart === -1 || galleryEnd === -1 || galleryStart >= galleryEnd) {
    throw new Error('Could not isolate Take a Closer Look gallery section in index.html');
  }
  const sectionHtml = html.substring(galleryStart, galleryEnd);

  // Count bento card wrappers with rounded-[28px] and group class
  const cardCount = (sectionHtml.match(/rounded-\[28px\]/g) || []).length;
  if (cardCount !== 5) {
    throw new Error(`Expected exactly 5 rounded cards, found ${cardCount}`);
  }

  const groupCount = (sectionHtml.match(/\bgroup\b(?!-)/g) || []).length;
  if (groupCount !== 5) {
    throw new Error(`Expected exactly 5 bento card wrappers with 'group' class, found ${groupCount}`);
  }

  // Count image hover scales
  const hoverCount = (sectionHtml.match(/group-hover:scale-\[1\.03\]/g) || []).length;
  if (hoverCount !== 5) {
    throw new Error(`Expected exactly 5 images with hover-scale transition, found ${hoverCount}`);
  }
});

// Final check
if (testFailures > 0) {
  console.error(`\nTest suite failed with ${testFailures} failure(s).`);
  process.exit(1);
} else {
  console.log('\nAll layout tests passed successfully.');
  process.exit(0);
}
