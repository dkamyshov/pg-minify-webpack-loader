# PostgreSQL loader for webpack

[![Build Status](https://travis-ci.org/dkamyshov/pg-minify-webpack-loader.svg?branch=master)](https://travis-ci.org/dkamyshov/pg-minify-webpack-loader)
[![npm](https://img.shields.io/npm/dt/pg-minify-webpack-loader.svg)](https://www.npmjs.com/package/pg-minify-webpack-loader)
[![GitHub issues](https://img.shields.io/github/issues-raw/dkamyshov/pg-minify-webpack-loader.svg)](https://github.com/dkamyshov/pg-minify-webpack-loader)

You definitely need this loader if:

* You use webpack to build your nodejs projects
* You include SQL-files into the release
* You are tired of using `raw-loader`

## Features

1. Loads your SQL-files into the bundle
2. Minifies them 🔥

## Installing

`npm i --save-dev pg-minify-webpack-loader`

## Webpack configuration

Add this to your webpack config:

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.sql$/,
        use: 'pg-minify-webpack-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.sql'] // remember to add this!
  }
}
```

## Usage

```javascript
// in ES6+ environments
import pgsqlQuery from './pgsqlQuery.sql';

// in commonjs environments
var pgsqlQuery = require('./pgsqlQuery.sql').default;

runTheQuery(pgsqlQuery);
```

## Usage with TypeScript

Create (if you haven't already) a separate file called `declarations.d.ts` in the root directory of your project and add the following code snippet:

```typescript
declare module "*.sql" {
  var _: string;
  export default _;
}
```

## Dependencies

Uses [pg-minify](https://github.com/vitaly-t/pg-minify) by Vitaly Tomilov.

## License

Danil Kamyshov, 2018. Released under MIT.
