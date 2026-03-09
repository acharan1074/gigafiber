import fs from 'fs-extra';
import path from 'path';

const sourceDir = path.join(process.cwd(), 'Downloads/Giga Fiber - Next-Gen Speed, Next-Level Service');
const targetDir = process.cwd();

async function copyFiles() {
  try {
    // Copy src directory
    const srcPath = path.join(sourceDir, 'src');
    const targetSrcPath = path.join(targetDir, 'src');
    if (fs.existsSync(srcPath)) {
      await fs.copy(srcPath, targetSrcPath, { overwrite: true });
      console.log('Copied src directory');
    }

    // Copy public directory
    const publicPath = path.join(sourceDir, 'public');
    const targetPublicPath = path.join(targetDir, 'public');
    if (fs.existsSync(publicPath)) {
      await fs.copy(publicPath, targetPublicPath, { overwrite: true });
      console.log('Copied public directory');
    }

    console.log('Setup complete!');
  } catch (error) {
    console.error('Error copying files:', error);
  }
}

copyFiles();
