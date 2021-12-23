const fs = require('fs');
const contents = fs.readFileSync('.env', { encoding: 'base64' });

console.log(contents);
