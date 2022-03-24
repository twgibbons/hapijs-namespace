const appPackage = require('../package.json');

const index = () => ({
  app_name: appPackage.name,
  app_version: appPackage.version,
  app_description: appPackage.description,
});

const ping = () => ({
  ping: 'PONG',
});

module.exports = {
  index,
  ping,
};
