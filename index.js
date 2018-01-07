module.exports = (server, namespace, routes) => {
  routes.map((route) => {
    if (!namespace) {
      return server.route(route);
    }
    const prefixed_route = Object.assign({}, route);
    if (route.path === '/') {
      prefixed_route.path = namespace;
    } else {
      prefixed_route.path = `${namespace}${prefixed_route.path}`;
    }
    return server.route(prefixed_route);
  });
};
