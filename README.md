# hapijs-namespace

Apply namespaced routes in Hapi

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

See [example](./example) for more complete example usage.

Call `namespace` function passing

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
