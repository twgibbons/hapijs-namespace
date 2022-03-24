const index = () => ({
  app_name: 'hapijs-namespace',
  app_description: 'Apply namespaced routes in Hapi',
});

const ping = () => ({
  ping: 'PONG',
});

export default {
  index,
  ping,
};
