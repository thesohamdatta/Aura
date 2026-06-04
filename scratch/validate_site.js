const fs = require('fs');
const path = require('path');

const pages = [
  'index.html',
  'about.html',
  'ai.html',
  'docs.html',
  'manifesto.html'
];

let globalErrors = 0;

pages.forEach(page => {
  const htmlPath = path.join(__dirname, '../web', page);
  if (!fs.existsSync(htmlPath)) {
    console.error(`ERROR: ${page} not found at ${htmlPath}!`);
    globalErrors++;
    return;
  }

  const html = fs.readFileSync(htmlPath, 'utf-8');
  let errors = [];

  // Check SEO & Titles
  if (!html.includes('<title>')) errors.push('Missing <title> tag');
  if (!html.includes('name="description"')) errors.push('Missing description meta tag');

  // Check Placeholders (e.g. [image.png])
  const placeholderRegex = /\[[a-zA-Z0-9\.\-_]+\.(jpg|png|gif|svg)\]/g;
  const matches = html.match(placeholderRegex);
  if (matches) {
    errors.push(`Found unresolved image placeholders: ${matches.join(', ')}`);
  }

  // Check layout structures
  if (!html.includes('<nav')) errors.push('Missing semantic navigation');
  if (!html.includes('<footer')) errors.push('Missing semantic footer');

  if (errors.length > 0) {
    console.error(`Validation FAILED for ${page}:`);
    errors.forEach(e => console.error(`  - ${e}`));
    globalErrors += errors.length;
  } else {
    console.log(`Validation PASSED for ${page}.`);
  }
});

if (globalErrors > 0) {
  console.error(`\nValidation failed with a total of ${globalErrors} error(s).`);
  process.exit(1);
} else {
  console.log('\nAll 5 pages checked and validation passed successfully.');
  process.exit(0);
}
