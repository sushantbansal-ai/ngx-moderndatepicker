const fs = require('fs');
const path = require('path');

const packagePath = path.resolve(__dirname, '..', 'dist', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

const fieldsToFix = ['main', 'module', 'es2015', 'typings'];
let changed = false;

fieldsToFix.forEach((field) => {
  if (typeof packageJson[field] === 'string' && packageJson[field].startsWith('./dist/')) {
    packageJson[field] = packageJson[field].replace('./dist/', './');
    changed = true;
  }
});

if (changed) {
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');
  console.log('Patched dist/package.json fields to use paths relative to dist root.');
} else {
  console.log('No dist package fields required patching.');
}
