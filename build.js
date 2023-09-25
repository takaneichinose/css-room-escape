const fs = require('fs');
const path = require('path');

const pug = require('pug');
const sass = require('sass');

const constants = require('./constants');

function deleteCompiled() {
  console.log('Deleting build directory...');

  // Delete the compiled files
  if (fs.existsSync(constants.STATIC_PATH)) {
    fs.rmSync(constants.STATIC_PATH, {
      recursive: true,
      force: true,
    });
  }

  console.log('Build directory deleted!');
}

function createDirectory() {
  console.log('Creating new build directory...');

  fs.mkdirSync(constants.STATIC_PATH);
  fs.mkdirSync(constants.CSS_PATH);

  console.log('Build directory created!');
}

function buildHTML() {
  console.log('Building Pug file...');

  const compiledFunction = pug.compileFile(path.join(constants.SRC_PATH, 'index.pug'));

  fs.writeFileSync(path.join(constants.STATIC_PATH, 'index.html'), compiledFunction());

  console.log('Build successful!');
}

function buildCSS() {
  console.log('Building SCSS file...');

  const normalize = sass.compile(path.join(__dirname, 'node_modules/normalize.css/normalize.css'), {
    style: 'compressed',
  });

  const style = sass.compile(path.join(constants.SRC_PATH, 'style.scss'), {
    style: 'compressed',
  });

  fs.writeFileSync(path.join(constants.CSS_PATH, 'style.css'), normalize.css + style.css);

  console.log('Build successful!');
}

function copyAssets() {
  console.log('Copying assets...');

  // fs.copyFileSync(, constants.STATIC_PATH);
  const assets = fs.readdirSync(constants.ASSETS_PATH);

  for (const asset of assets) {
    fs.cpSync(path.join(constants.ASSETS_PATH, asset), path.join(constants.STATIC_PATH, asset), {
      recursive: true,
    });
  }

  console.log('Assets copied!');
}

(async function main() {
  // Delete compiled files
  deleteCompiled();

  // Create directory for compiled files
  createDirectory();

  // Build Pug file
  buildHTML();

  // Build SCSS file
  buildCSS();

  // Copy the assets
  copyAssets();
})();

module.exports = {
  buildHTML,
  buildCSS,
}
