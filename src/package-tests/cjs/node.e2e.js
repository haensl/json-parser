const parseJSON = require('@haensl/json-parser');
const join = require('path').join;

parseJSON(join(__dirname, './package.json'))
  .then((contents) => {
    console.info(contents); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.error(err); // eslint-disable-line no-console
    process.exit(1);
  });
