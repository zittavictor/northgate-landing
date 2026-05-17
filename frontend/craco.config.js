const path = require('path');
const WebpackHealthPlugin = require('./plugins/health-check/webpack-health-plugin');
const setupHealthEndpoints = require('./plugins/health-check/health-endpoints');

const healthPlugin = new WebpackHealthPlugin();

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    plugins: {
      add: [healthPlugin]
    }
  },
  devServer: (devServerConfig) => {
    return {
      ...devServerConfig,
      onAfterSetupMiddleware: (devServer) => {
        setupHealthEndpoints(devServer, healthPlugin);
        if (devServerConfig.onAfterSetupMiddleware) {
          devServerConfig.onAfterSetupMiddleware(devServer);
        }
      }
    };
  }
};
