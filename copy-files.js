const fs = require('fs');
const path = require('path');

const sourceDir = '/vercel/share/v0-project/Downloads/Giga Fiber - Next-Gen Speed, Next-Level Service';
const destDir = '/vercel/share/v0-project';

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  files.forEach(file => {
    if (file === 'node_modules' || file === '.git' || file === 'Downloads' || file === 'dist' || file === '.next') {
      return; // Skip these directories
    }

    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${file}`);
    }
  });
}

try {
  copyDirRecursive(sourceDir, destDir);
  console.log('Files copied successfully!');
} catch (error) {
  console.error('Error copying files:', error.message);
}
