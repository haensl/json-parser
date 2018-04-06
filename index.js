const fs = require('@haensl/pfs');
const path = require('path');

module.exports = (file) =>
  fs.readFile(file, 'utf-8')
    .then((contents) => {
        const config = JSON.parse(contents);
        return config;
    });

