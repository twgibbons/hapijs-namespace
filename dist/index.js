"use strict";
module.exports = function (server, namespace, routes) {
    routes.map((route) => {
        if (!namespace) {
            return server.route(route);
        }
        const prefixedRoute = Object.assign({}, route);
        if (route.path === '/') {
            prefixedRoute.path = namespace;
        }
        else {
            prefixedRoute.path = `${namespace}${prefixedRoute.path}`;
        }
        return server.route(prefixedRoute);
    });
};
