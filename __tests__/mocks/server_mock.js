class ServerMock {
  constructor() {
    this.routes = [];
  }

  route(routeObj) {
    this.routes.push(routeObj);
  }

  getRoutes() {
    return this.routes;
  }
}

module.exports = ServerMock;
