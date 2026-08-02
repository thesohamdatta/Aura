const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../website/index.html");
const content = fs.readFileSync(filePath, "utf-8");

// Find all <img> tags
const regex = /<img\s+[^>]*src="([^"]+)"[^>]*>/g;
let match;
const imgTags = [];

while ((match = regex.exec(content)) !== null) {
  const fullTag = match[0];
  const src = match[1];

  // Find surrounding context (50 characters before and after)
  const startIndex = Math.max(0, match.index - 150);
  const endIndex = Math.min(content.length, match.index + fullTag.length + 150);
  const context = content.substring(startIndex, endIndex);

  // Try to find the nearest comment preceding the image tag
  const precedingComments = content
    .substring(0, match.index)
    .match(/<!--[\s\S]*?-->/g);
  const lastComment = precedingComments
    ? precedingComments[precedingComments.length - 1]
    : "None";

  imgTags.push({
    tag: fullTag,
    src: src,
    comment: lastComment,
    line: content.substring(0, match.index).split("\n").length,
  });
}

imgTags.forEach((img, idx) => {
  console.log(`Image ${idx + 1} (Line ${img.line}):`);
  console.log(`  Tag:     ${img.tag}`);
  console.log(`  Src:     ${img.src}`);
  console.log(
    `  Section: ${img.comment.replace(/\n/g, " ").substring(0, 100)}`
  );
  console.log(`-`.repeat(50));
});
