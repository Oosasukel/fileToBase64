const fs = require('fs');

const base64ToDecode = 'QUxPPVBlc3NvYWw=';

fs.writeFile(
  'development.env',
  base64ToDecode,
  { encoding: 'base64' },
  function (err) {
    console.log('File created');
  }
);
