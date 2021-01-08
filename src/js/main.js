/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-unused-vars */

// Import styles
import '../sass/app.scss';

// Import all images
function importAll(require) {
  return require.keys().reduce((acc, next) => {
    acc[next.replace('../', '')] = require(next);
    return acc;
  }, {});
}

const images = importAll(
  require.context('../img', false, /\.(png|jpe?g|svg)$/)
);

// Learning

