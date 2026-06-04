const fs = require('fs');
const path = require('path');

const navCssPath = path.join(__dirname, '../web/css/nav.css');
const docsCssPath = path.join(__dirname, '../web/css/docs.css');

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
// TEST CASE 1: Navbar Width Alignment (Tracer Bullet)
// ----------------------------------------------------
runTest('Navbar inner alignment has width: 100%', () => {
  if (!fs.existsSync(navCssPath)) {
    throw new Error('nav.css not found');
  }
  const css = fs.readFileSync(navCssPath, 'utf-8');
  
  // Extract .nav-inner rules
  const navInnerMatch = css.match(/\.nav-inner\s*\{([^}]*)\}/);
  if (!navInnerMatch) {
    throw new Error('Could not find .nav-inner selector in nav.css');
  }
  const rules = navInnerMatch[1];
  
  if (!rules.includes('width: 100%')) {
    throw new Error('.nav-inner block is missing "width: 100%" declaration');
  }
});

// ----------------------------------------------------
// TEST CASE 2: Navbar Links Distribution
// ----------------------------------------------------
runTest('Navbar links have flex-grow and justify-content: space-between on desktop', () => {
  const css = fs.readFileSync(navCssPath, 'utf-8');
  const match = css.match(/\.nav-links\s*\{([^}]*)\}/);
  if (!match) {
    throw new Error('Could not find .nav-links selector in nav.css');
  }
  const rules = match[1];
  if (!rules.includes('justify-content: space-between')) {
    throw new Error('.nav-links is missing "justify-content: space-between"');
  }
  if (!rules.includes('flex-grow: 1')) {
    throw new Error('.nav-links is missing "flex-grow: 1"');
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

  // Verify .docs-sidebar .sidebar-section
  const sectionMatch = css.match(/\.docs-sidebar\s+\.sidebar-section\s*\{([^}]*)\}/);
  if (sectionMatch && sectionMatch[1].includes('var(--font-mono)')) {
    throw new Error('.docs-sidebar .sidebar-section is using var(--font-mono)');
  }

  // Verify .docs-table th
  const tableThMatch = css.match(/\.docs-table\s+th\s*\{([^}]*)\}/);
  if (tableThMatch && tableThMatch[1].includes('var(--font-mono)')) {
    throw new Error('.docs-table th is using var(--font-mono)');
  }

  // Verify .mobile-docs-nav select
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
