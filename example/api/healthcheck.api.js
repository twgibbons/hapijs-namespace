const namespace = require('hapijs-namespace');
const { HealthcheckController } = require('../controllers');

const HealthcheckApi = (server, prefix) => {
  namespace(server, prefix, [
    {
      method: 'GET',
      path: '/',
      config: {
        description: 'Outputs package name and version',
        notes: ['Should return status 200 with a simple object giving app info'],
        tags: ['api', 'healthcheck'],
        handler: HealthcheckController.index,
      }
    },

    {
      method: 'GET',
      path: '/ping',
      config: {
        description: 'Simple healthcheck route',
        notes: ['Should return status 200 with a simple object'],
        tags: ['api', 'healthcheck'],
        handler: HealthcheckController.ping,
      },
    },
  ]);
};

module.exports = HealthcheckApi;
