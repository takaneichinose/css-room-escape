const path = require('path');

const SRC_PATH = path.join(__dirname, 'src');
const STATIC_PATH = path.join(__dirname, '/static');
const ASSETS_PATH = path.join(SRC_PATH, 'assets');
const CSS_PATH = path.join(STATIC_PATH, 'css');

module.exports = {
  SRC_PATH,
  STATIC_PATH,
  CSS_PATH,
  ASSETS_PATH,
};
