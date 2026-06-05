const fs = require('fs');
const contentPath = 'C:\\Users\\Soham\\.gemini\\antigravity-cli\\brain\\12c329da-3d88-41bb-a780-02e42de25223\\.system_generated\\steps\\690\\content.md';
const html = fs.readFileSync(contentPath, 'utf-8');

let idx = 0;
while ((idx = html.indexOf('<style', idx)) !== -1) {
  console.log("Found <style at", idx);
  console.log("Context:", html.substring(idx, idx + 100));
  const endIdx = html.indexOf('</style>', idx);
  console.log("Found </style> at", endIdx);
  if (endIdx !== -1) {
    idx = endIdx + 8;
  } else {
    idx += 6;
  }
}
