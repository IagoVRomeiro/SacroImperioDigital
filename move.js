import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'public', 'audios_compressed');
const destDir = path.join(process.cwd(), 'public', 'audios');

if (fs.existsSync(destDir)) {
  fs.rmSync(destDir, { recursive: true, force: true });
}
fs.renameSync(srcDir, destDir);

console.log('Moved successfully!');
