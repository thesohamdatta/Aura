/**
 * run_tests.js — Aura Website TDD Entry Point
 * Runs all test suites sequentially and exits 1 if any fail.
 */
const { execSync } = require('child_process');
const path = require('path');

const tests = [
  { name: 'Validate Site (5 pages structure)', file: 'validate_site.js' },
  { name: 'Layout & Design System Tests',      file: 'test_layout.js'  },
];

let totalFailures = 0;

for (const test of tests) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Running: ${test.name}`);
  console.log('='.repeat(60));

  try {
    execSync(`node "${path.join(__dirname, test.file)}"`, { stdio: 'inherit' });
    console.log(`\n✓ ${test.name} — PASSED`);
  } catch (err) {
    console.error(`\n✗ ${test.name} — FAILED`);
    totalFailures++;
  }
}

console.log(`\n${'='.repeat(60)}`);
if (totalFailures > 0) {
  console.error(`OVERALL: ${totalFailures} suite(s) FAILED. Fix errors above.`);
  process.exit(1);
} else {
  console.log('OVERALL: All test suites PASSED. ✓');
  process.exit(0);
}
