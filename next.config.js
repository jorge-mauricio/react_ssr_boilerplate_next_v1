'use strict';
// import gSystemConfig from './frontend_react_next/config-application.js';
// const { gSystemConfig } = require('./frontend_react_next/config-application.js');
// const withTM = require('next-transpile-modules')(['config-application.js']);
// import { gSystemConfig } from './frontend_react_next/config-application.js';
// const { gSystemConfig } = require('./frontend_react_next/config-application.js');

module.exports = {
  // generateEtags: false,
  // distDir: 'build', // Note: observed slower load / build.

  // Alias
  async rewrites() {
    return [
      /*
      {
        // source: '/' + gSystemConfig.configDirectoryFilesLayoutSD + '/:files',
        source: '/files-layout/:files',
        destination: '/_next/static/media/:files',
      },
      */
      {
        // source: '/' + gSystemConfig.configDirectoryFilesLayoutSD + '/:files',
        source: '/files-layout/:files',
        destination: '/app_files_layout/:files',
      }
    ];
  },

  // Environment variables.
  env: {
    // System configuration.
    NEXT_APP_CONFIG_PORT: '3002',
    CONFIG_SYSTEM_URL: 'http://localhost:3002',
    CONFIG_SYSTEM_URL_SSL: 'http://localhost:3002',
  },
};
