const fs = require('fs');
const path = require('path');

const express = require('express');
const pug = require('pug');
const sass = require('sass');

const app = express();
const port = 3000;

const SRC_PATH = path.join(__dirname, 'src');
const STATIC_PATH = path.join(__dirname, 'static');
const CSS_PATH = path.join(STATIC_PATH, 'css/style.css');
const HTML_PATH = path.join(STATIC_PATH, 'index.html');

app.use('/', express.static(path.join(STATIC_PATH)))

app.get('/', async (_, res) => {
  // Build Pug file
  console.log('Building Pug file...');

  const compiledFunction = pug.compileFile(path.join(SRC_PATH, 'index.pug'));

  fs.writeFileSync(HTML_PATH, compiledFunction());

  console.log('Build successful!');

  // Build SCSS file
  console.log('Building SCSS file...');

  const result = await sass.compileAsync(path.join(SRC_PATH, 'style.scss'));

  fs.writeFileSync(CSS_PATH, result.css);

  console.log('Build successful!');

  // Render HTML file
  res.send(pug.renderFile(HTML_PATH));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
