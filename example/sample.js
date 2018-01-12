const Hapi = require('hapi');
const Config = require('config');
const { HealthcheckApi } = require('./api');
const appPackage = require('../package.json');

(async () => {
  const server = new Hapi.server(JSON.parse(JSON.stringify(Config.server.connection)));

  await server.events.on('route', (route) => {
    console.log(`Added route: ${route.method.toUpperCase()} ${route.path}`);
  });

  HealthcheckApi(server, '/healthcheck');

  await server.start();
  console.log('%s %s started on port %s', appPackage.name, appPackage.version, server.info.port);
})();
