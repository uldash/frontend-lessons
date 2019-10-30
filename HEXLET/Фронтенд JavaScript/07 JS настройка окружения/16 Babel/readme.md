$ npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env

babel.config.js
module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
    }],
  ],
};