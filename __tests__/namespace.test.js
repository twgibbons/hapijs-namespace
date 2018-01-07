const namespace = require('../');
const ServerMock = require('./mocks/server_mock');

describe('Namespace helper', () => {
  test('Adds namespaced routes', done => {
    const test_routes = [
      {
        method: 'GET',
        path: '/bar',
        config: {
          description: 'Foobar test route',
        },
      },

      {
        method: 'POST',
        path: '/baz',
        config: {
          description: 'Foobaz test route',
        },
      },
    ];
    const server = new ServerMock();
    namespace(server, '/foo', test_routes);
    const namespaced_routes = server.getRoutes();

    expect(namespaced_routes[0].method).toEqual('GET');
    expect(namespaced_routes[0].path).toEqual('/foo/bar');
    expect(namespaced_routes[0].config.description).toEqual('Foobar test route');

    expect(namespaced_routes[1].method).toEqual('POST');
    expect(namespaced_routes[1].path).toEqual('/foo/baz');
    expect(namespaced_routes[1].config.description).toEqual('Foobaz test route');

    done();
  });

  test('Correctly namespaces root route', done => {
    const test_routes = [
      {
        method: 'GET',
        path: '/',
        config: {
          description: 'Foobar test route',
        },
      },
    ];
    const server = new ServerMock();
    namespace(server, '/foo', test_routes);
    const namespaced_routes = server.getRoutes();

    expect(namespaced_routes[0].method).toEqual('GET');
    expect(namespaced_routes[0].path).toEqual('/foo');
    expect(namespaced_routes[0].config.description).toEqual('Foobar test route');

    done();
  });

  test('Does not prefix when not passed a namespace', done => {
    const test_routes = [
      {
        method: 'GET',
        path: '/foo',
        config: {
          description: 'Foo test route',
        },
      },
    ];
    const server = new ServerMock();
    namespace(server, null, test_routes);
    const namespaced_routes = server.getRoutes();

    expect(namespaced_routes[0].method).toEqual('GET');
    expect(namespaced_routes[0].path).toEqual('/foo');
    expect(namespaced_routes[0].config.description).toEqual('Foo test route');

    done();
  });
});
