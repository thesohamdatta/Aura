const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../web/index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('index.html not found!');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf-8');
let errors = [];

// Check SEO & Titles
if (!html.includes('<title>')) errors.push('Missing <title> tag');
if (!html.includes('name="description"')) errors.push('Missing description meta tag');

// Check Placeholders
const placeholderRegex = /\[[a-zA-Z0-9\.\-_]+\.(jpg|png|gif|svg)\]/g;
const matches = html.match(placeholderRegex);
if (matches) {
  errors.push(`Found unresolved image placeholders: ${matches.join(', ')}`);
}

// Check layout structures
if (!html.includes('<nav')) errors.push('Missing semantic navigation');
if (!html.includes('<footer')) errors.push('Missing semantic footer');

if (errors.length > 0) {
  console.error('Validation failed with errors:');
  errors.forEach(e => console.error(`- ${e}`));
  process.exit(1);
} else {
  console.log('Site structure check passed successfully.');
  process.exit(0);
}
