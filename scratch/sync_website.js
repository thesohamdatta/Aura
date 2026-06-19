const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../website');
const destDir = path.join(__dirname, '../docs');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    // Skip internal metadata folders if any, or .git files
    if (src.includes('.agents') || src.includes('.system_generated')) return;
    
    // Copy file
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

console.log('Syncing website/ to docs/...');
try {
  copyRecursiveSync(srcDir, destDir);
  console.log('Synchronization complete!');
} catch (err) {
  console.error('Synchronization failed:', err.message);
  process.exit(1);
}
