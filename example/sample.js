const Hapi = require('hapi');
const Config = require('config');
const namespace = require('hapijs-namespace');
const appPackage = require('../package.json');

(async () => {
  const server = new Hapi.server(JSON.parse(JSON.stringify(Config.server.connection)));

  namespace(server, '/healthcheck', [
    {
      method: 'GET',
      path: '/ping',
      config: {
        description: 'Simple healthcheck route',
        notes: ['Should return status 200 with a simple object'],
        tags: ['api', 'healthcheck'],
        handler: function() {
          return {
            ping: 'PONG!',
          }
        },
      },
    },
  ]);

  await server.start();
  console.log('%s %s started on port %s', appPackage.name, appPackage.version, server.info.port);
})();
