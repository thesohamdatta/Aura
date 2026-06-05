const fs = require('fs');

const indexContentPath = 'C:\\Users\\Soham\\.gemini\\antigravity-cli\\brain\\12c329da-3d88-41bb-a780-02e42de25223\\.system_generated\\steps\\694\\content.md';
const content = fs.readFileSync(indexContentPath, 'utf-8');

// Find the start of the JSON
const jsonStart = content.indexOf('{"/docs/privacy-and-data"');
if (jsonStart === -1) {
  console.error("JSON start not found");
  process.exit(1);
}

const jsonText = content.substring(jsonStart).trim();
const indexData = JSON.parse(jsonText);

// Print keys
console.log("Pages found in search index:");
Object.keys(indexData).forEach(key => {
  console.log(`- ${key}`);
});

// Let's dump each page detail to a markdown file inside scratch
let md = "";
Object.keys(indexData).forEach(key => {
  const page = indexData[key];
  md += `# Page: ${key}\n`;
  md += `**Title**: ${page.title}\n`;
  md += `**Description**: ${page.description}\n\n`;
  
  if (page.h1 && page.h1.length > 0) {
    md += `### H1:\n` + page.h1.map(h => `- ${h}`).join('\n') + `\n\n`;
  }
  if (page.h2 && page.h2.length > 0) {
    md += `### H2:\n` + page.h2.map(h => `- ${h}`).join('\n') + `\n\n`;
  }
  if (page.h3 && page.h3.length > 0) {
    md += `### H3:\n` + page.h3.map(h => `- ${h}`).join('\n') + `\n\n`;
  }
  if (page.h4 && page.h4.length > 0) {
    md += `### H4:\n` + page.h4.map(h => `- ${h}`).join('\n') + `\n\n`;
  }
  if (page.h5 && page.h5.length > 0) {
    md += `### H5:\n` + page.h5.map(h => `- ${h}`).join('\n') + `\n\n`;
  }
  if (page.h6 && page.h6.length > 0) {
    md += `### H6:\n` + page.h6.map(h => `- ${h}`).join('\n') + `\n\n`;
  }
  if (page.p && page.p.length > 0) {
    md += `### Paragraph text:\n` + page.p.map(p => `  ${p}`).join('\n\n') + `\n\n`;
  }
  md += `--------------------------------------------------\n\n`;
});

fs.writeFileSync('scratch/framer_extracted_content.md', md);
console.log("Wrote clean extracted content to scratch/framer_extracted_content.md");
