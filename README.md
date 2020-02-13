# json-parser

[![NPM](https://nodei.co/npm/@haensl%2Fjson-parser.png?downloads=true)](https://nodei.co/npm/@haensl%2Fjson-parser/)

[![npm version](https://badge.fury.io/js/@haensl%2Fjson-parser.svg)](http://badge.fury.io/js/@haensl%2Fjson-parser)

[![CircleCI](https://circleci.com/gh/haensl/json-parser.svg?style=svg)](https://circleci.com/gh/haensl/json-parser)

Minimal JSON file parser for node.js

## Installation

```bash
# via npm
npm i --save @haensl/json-parser

# or yarn
yarn add @haensl/json-parser
```

## Usage

```javascript
const parseJSON = require('@haensl/json-parser');

parseJson('path/to/my.json')
  .then((json) => {
    console.info(json);
  });
```

### [Changelog](CHANGELOG.md)

### [License](LICENSE)
