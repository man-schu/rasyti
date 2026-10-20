// Writes docs/version.js from package.json so the web page and the
// desktop app show the same version. Runs on `npm version`.
const fs = require('fs');
const path = require('path');

const { version } = require('../package.json');
const target = path.join(__dirname, '..', 'docs', 'version.js');
fs.writeFileSync(target, `window.RASYTI_VERSION = "${version}";\n`);
console.log(`docs/version.js -> ${version}`);
