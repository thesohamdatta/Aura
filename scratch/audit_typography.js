const fs = require("fs");
const path = require("path");

const pages = [
  "index.html",
  "about.html",
  "ai.html",
  "docs.html",
  "manifesto.html",
];

const websiteDir = path.join(__dirname, "../website");

pages.forEach((page) => {
  const filePath = path.join(websiteDir, page);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${page}`);
    return;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  console.log(`\n============================================================`);
  console.log(`AUDITING: ${page}`);
  console.log(`============================================================`);

  // Find hardcoded text-[ sizes
  lines.forEach((line, index) => {
    // Check for text-[...]
    const textPatternMatch = line.match(/text-\[[^\]]+\]/g);
    if (textPatternMatch) {
      console.log(
        `Line ${index + 1}: Sizing match: ${textPatternMatch.join(", ")} -> Line content snippet: "${line.trim().substring(0, 100)}..."`
      );
    }

    // Check for inline style="..." with font-size or font-family
    const styleFontMatch = line.match(/style="[^"]*font-[^"]*"/g);
    if (styleFontMatch) {
      console.log(
        `Line ${index + 1}: Style font match: ${styleFontMatch.join(", ")} -> Line content snippet: "${line.trim().substring(0, 100)}..."`
      );
    }

    // Check for any legacy font- classes
    const legacyFontMatch = line.match(
      /font-(hero-h1|section-h2|section-h3|overline|label|hero-h1-mobile|section-h2-mobile)/g
    );
    if (legacyFontMatch) {
      console.log(
        `Line ${index + 1}: Legacy font family class: ${legacyFontMatch.join(", ")} -> Line content snippet: "${line.trim().substring(0, 100)}..."`
      );
    }
  });
});
