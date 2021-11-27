'use strict';
// import { gSystemConfig } from './frontend_react_next/config-application.js';
// const { gSystemConfig } = require('./frontend_react_next/config-application.js');

module.exports = {
  env: {
    // System configuration.
    NEXT_APP_CONFIG_PORT: '3002',
    CONFIG_SYSTEM_URL: 'http://localhost:3002',
    CONFIG_SYSTEM_URL_SSL: 'http://localhost:3002',
  },
  // Alias
  /*
  async rewrites() {
    return [
      {
        source: '/' + gSystemConfig.configDirectoryFilesLayoutSD + '/:files',
        destination: '/_next/static/media/:files',
      }
    ];
  },
  */
};
