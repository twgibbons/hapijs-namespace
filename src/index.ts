import { ServerRoute, Server } from '@hapi/hapi';

export = function (server:Server, namespace:string | null, routes:ServerRoute[]) {
  routes.map((route:ServerRoute) => {
    if (!namespace) {
      return server.route(route);
    }
    const prefixedRoute = Object.assign({}, route);
    if (route.path === '/') {
      prefixedRoute.path = namespace;
    } else {
      prefixedRoute.path = `${namespace}${prefixedRoute.path}`;
    }
    return server.route(prefixedRoute);
  });
};

