const assert = require('assert');
const path = require('path');
const parseJSON = require('./');

describe('json parser', () => {
  describe('when parsing a json file', () => {
    describe('and the file exists', () => {
      describe('and the file is a valid json file', () => {
        let config;
        beforeEach((done) => {
          parseJSON(path.join(__dirname, 'valid.json'))
            .then((json) => {
              config = json;
              done();
            });
        });

        it('resolves with the parsed json data', () => {
          assert.ok(config);
        });
      });

      describe('and the file is not a valid json file', () => {
        let error;
        beforeEach((done) => {
          parseJSON(path.join(__dirname, 'invalid.json'))
            .catch((err) => {
              error = err;
              done();
            });
        });

        it('rejects with an error', () => {
          assert.ok(error);
        });
      });
    });

    describe('and the file does not exist', () => {
      let error;
      beforeEach((done) => {
        parseJSON(path.join(__dirname, 'non-existent.config.json'))
          .catch((err) => {
            error = err;
            done();
          });
      });

      it('rejects with an error', () => {
        assert.ok(error);
      });
    });
  });
});
