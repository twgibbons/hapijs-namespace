"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const hapi_1 = tslib_1.__importDefault(require("@hapi/hapi"));
const healthcheck_api_1 = require("./api/healthcheck.api");
const serverConfig = {
    "port": 8080,
    "host": "localhost",
    "routes": {
        "cors": true
    }
};
(async () => {
    const server = hapi_1.default.server(serverConfig);
    await server.events.on('route', (route) => {
        console.log(`Added route: ${route.method} ${route.path}`);
    });
    (0, healthcheck_api_1.HealthcheckApi)(server, '/healthcheck');
    await server.start();
    console.log('hapijs-namespace started on port %s', server.info.port);
})();
