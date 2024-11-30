const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  // Base URL for the application
  publicPath: process.env.NODE_ENV === 'production' ? '/adranker-ai/' : '/',

  // Output directory for the build
  outputDir: 'dist',

  // Directory for static assets
  assetsDir: 'static',

  // Enable source maps in production
  productionSourceMap: false,

  // Configure webpack
  configureWebpack: {
    // Custom webpack configuration
  },

  // CSS related options
  css: {
    // Enable CSS source maps
    sourceMap: true,
  },

  // Dev server configuration
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },

  // Plugin options
  pluginOptions: {
    // Options for third-party plugins
  },
});
