const namespace = require('../');
const Hapi = require("@hapi/hapi");
const {Server} = require("@hapi/hapi");

const server = Hapi.server();
describe('Namespace Helper - Javascript', () => {
  beforeAll((done) => {
    server.events.on('start', () => {
      done()
    })
    server.start()
  })

  afterAll((done) => {
    server.events.on('stop', () => {
      done();
    })
    server.stop();
  })

  test('Adds namespaced routes', async () => {
    const test_routes = [
      {
        method: 'GET',
        path: '/bar',
        options: {
          description: 'Foobar test route',
          handler: () => 'Foobar',
        },
      },

      {
        method: 'POST',
        path: '/baz',
        options: {
          description: 'Foobaz test route',
          handler: () => 'Foobaz',
        },
      },
    ];
    namespace(server, '/foo', test_routes);

    const requests = [
      {
        options: {
          method: 'GET',
          url: '/foo/bar',
        },
        result: {
          statusCode: 200,
          body: 'Foobar',
        }
      },
      {
        options: {
          method: 'POST',
          url: '/foo/baz',
        },
        result: {
          statusCode: 200,
          body: 'Foobaz',
        }
      }
    ]
    for (const r of requests) {
      const response = await server.inject(r.options);
      expect(response.statusCode).toBe(r.result.statusCode);
      expect(response.result).toBe(r.result.body)
    }
  });

  test('Correctly namespaces root route', async () => {
    const test_routes = [
      {
        method: 'GET',
        path: '/',
        options: {
          description: 'Foobar test route',
          handler: () => 'FooRoot',
        },
      },
    ];
    namespace(server, '/foo', test_routes);
    const options = {
      method: 'GET',
      url: '/foo'
    }
    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.result).toBe('FooRoot')

  });

  test('Does not prefix when not passed a namespace', async () => {
    const test_routes = [
      {
        method: 'GET',
        path: '/bat',
        options: {
          description: 'Bat test route',
          handler: () => 'BatTest'
        },
      },
    ];
    namespace(server, null, test_routes);
    const options = {
      method: 'GET',
      url: '/bat'
    }
    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.result).toBe('BatTest')
  });
});
