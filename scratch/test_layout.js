const fs = require('fs');
const path = require('path');

const navCssPath = path.join(__dirname, '../web/css/nav.css');
const docsCssPath = path.join(__dirname, '../web/css/docs.css');
const webDir = path.join(__dirname, '../web');

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
    const pagePath = path.join(webDir, page);
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

  // Verify sub-nav classes are deleted from CSS
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
// TEST CASE 3: Docs Typography (No Monospace on Headers)
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
// TEST CASE 4: Docs Active Link Color (Action Blue, not Cyan)
// ----------------------------------------------------
runTest('Docs active sidebar link uses Action Blue, not Cyan', () => {
  const css = fs.readFileSync(docsCssPath, 'utf-8');
  const match = css.match(/\.docs-sidebar\s+a\.active\s*\{([^}]*)\}/);
  if (!match) {
    throw new Error('Could not find .docs-sidebar a.active in docs.css');
  }
  const rules = match[1];
  if (rules.includes('var(--cyan)')) {
    throw new Error('.docs-sidebar a.active is using var(--cyan)');
  }
  if (!rules.includes('var(--primary)')) {
    throw new Error('.docs-sidebar a.active is missing var(--primary)');
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
