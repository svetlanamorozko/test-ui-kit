/* eslint max-len:0 */
const path = require('path');

module.exports = {
  assetsDir: 'dist',
  components: 'components/**/*.js',
  require: ['babel-polyfill'],
  skipComponentsWithoutExample: true,
  template: {
    head: {
      scripts: [
        {
          src: './css-themes-polyfill.js',
        },
        {
          src: 'https://maps.googleapis.com/maps/api/js?libraries=places,visualization&v=3.27&key=AIzaSyAqvSFBj-lPSA8BsEbSoqU7dzRlQxPUf8I',
        },
      ],
      links: [
        {
          rel: 'stylesheet',
          href: './theme.css',
        },
        {
          rel: 'stylesheet',
          href: './ui-bundle.css',
        },
      ],
    },
  },
  title: 'Travix styleguide',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: path.join(__dirname, 'node_modules'),
          use: 'babel-loader?compact=true',
        },
      ],
    },
  },
};
