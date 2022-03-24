"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index = () => ({
    app_name: 'hapijs-namespace',
    app_description: 'Apply namespaced routes in Hapi',
});
const ping = () => ({
    ping: 'PONG',
});
exports.default = {
    index,
    ping,
};
