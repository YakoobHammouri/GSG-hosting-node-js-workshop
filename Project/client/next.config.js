const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withPWA = require('next-pwa');

const config = {
  pwa: {
    dest: 'public',
  },
  env: {
    API_URL: process.env.API_URL,
    PORT: process.env.PORT,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
};
module.exports = withPlugins([withCSS], withPWA(config));
