import {Server} from "@hapi/hapi";

import namespace from 'hapijs-namespace'
import HealthcheckController from '../controllers/healthcheck.controller';

export function HealthcheckApi (server:Server, prefix:string) {
  namespace(server, prefix, [
    {
      method: 'GET',
      path: '/',
      options: {
        description: 'Outputs package name and version',
        notes: ['Should return status 200 with a simple object giving app info'],
        tags: ['api', 'healthcheck'],
        handler: HealthcheckController.index,
      }
    },

    {
      method: 'GET',
      path: '/ping',
      options: {
        description: 'Simple healthcheck route',
        notes: ['Should return status 200 with a simple object'],
        tags: ['api', 'healthcheck'],
        handler: HealthcheckController.ping,
      },
    },
  ]);
}

