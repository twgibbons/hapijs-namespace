import Hapi from '@hapi/hapi'
import {ServerRoute, Server} from "@hapi/hapi";
import {HealthcheckApi} from './api/healthcheck.api'

const serverConfig = {
    "port": 8080,
    "host": "localhost",
    "routes": {
        "cors": true
    }
};

(async () => {
    const server:Server = Hapi.server(serverConfig);

    await server.events.on('route', (route:ServerRoute) => {
        console.log(`Added route: ${route.method} ${route.path}`);
    });

    HealthcheckApi(server, '/healthcheck');

    await server.start();
    console.log('hapijs-namespace started on port %s', server.info.port);
})();
