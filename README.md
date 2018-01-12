# hapijs-namespace

[![Build Status](https://travis-ci.org/twgibbons/hapijs-namespace.svg?branch=master)](https://travis-ci.org/twgibbons/hapijs-namespace)
[![Coverage Status](https://coveralls.io/repos/github/twgibbons/hapijs-namespace/badge.svg?branch=master)](https://coveralls.io/github/twgibbons/hapijs-namespace?branch=master) 

This library makes it easy to namespace your routes with a set prefix. It takes in an array of 
native hapi routes and once prefixed they are applied directly to the server object removing the
need to write any additional code.

## Install

Install through npm:

    npm install --save hapijs-namespace

## Usage

### `namespace(server, prefix, routes)`

`server` is a hapi server object to which you want to add the routes

`prefix` is the namespace prefix

`routes` is an array of hapi routes

The routes are namespaced and applied to the server object.

## Quick Start

See [example](./example) for more complete example usage including multiple routes, recommended
file structure, and an index route.

Call `namespace` function passing the server object, prefix, and routes and the routes will be
prefixed and added to the server object.

```js
const namespace = require('namespace');

const server = new Hapi.Server(...);

namespace(server, '/healthcheck', [
    {
        method: 'GET',
        path: '/ping',
        config: {
            description: 'Simple healthcheck route',
            notes: ['Should return status 200 with a simple object'],
            tags: ['api', 'healthcheck'],
            handler: HealthCheckController.ping,
        },
    },
]);
```

## Testing

Simply run `npm test` to run the tests
