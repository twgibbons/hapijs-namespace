"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthcheckApi = void 0;
const tslib_1 = require("tslib");
const hapijs_namespace_1 = tslib_1.__importDefault(require("hapijs-namespace"));
const healthcheck_controller_1 = tslib_1.__importDefault(require("../controllers/healthcheck.controller"));
function HealthcheckApi(server, prefix) {
    (0, hapijs_namespace_1.default)(server, prefix, [
        {
            method: 'GET',
            path: '/',
            options: {
                description: 'Outputs package name and version',
                notes: ['Should return status 200 with a simple object giving app info'],
                tags: ['api', 'healthcheck'],
                handler: healthcheck_controller_1.default.index,
            }
        },
        {
            method: 'GET',
            path: '/ping',
            options: {
                description: 'Simple healthcheck route',
                notes: ['Should return status 200 with a simple object'],
                tags: ['api', 'healthcheck'],
                handler: healthcheck_controller_1.default.ping,
            },
        },
    ]);
}
exports.HealthcheckApi = HealthcheckApi;
