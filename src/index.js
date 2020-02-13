const fs = require('@haensl/pfs');

module.exports = (file, encoding = 'utf8') =>
  fs.readFile(file, encoding)
    .then((contents) => {
      return JSON.parse(contents);
    });

