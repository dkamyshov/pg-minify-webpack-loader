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

### Configuring the loader

The following options are available:

Name | Type | Accepts | Default value | Comment
- | - | - | - | -
compress | `boolean` | `true`, `false` | `true` | If `true`, the SQL file is minified, i.e. all the comments and unnecessary whitespaces are removed. If `false`, the SQL file is loaded as-is.
module | `string` | `'es6'`, `'commonjs'` | `'es6'` | Specifies how the module will be compiled: as ES6 or commonjs module.

The easiest way to pass options to the loader is to use the query string:

```javascript
{
  test: /\.sql$/,
  use: 'pg-minify-webpack-loader?compress=false'
}
```

`options` object may also be specified:

```javascript
{
  test: /\.sql$/,
  loader: 'pg-minify-webpack-loader', // 'loader' instead of 'use'!
  options: {
    compress: false
  }
}
```

## Usage

```javascript
// in ES6+ environments
import pgsqlQuery from './pgsqlQuery.sql';

// in commonjs environments (module = 'es6')
var pgsqlQuery = require('./pgsqlQuery.sql').default;

// in commonjs environments (module = 'commonjs')
var pgsqlQuery = require('./pgsqlQuery.sql');


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
