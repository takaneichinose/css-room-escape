const path = require('path');

const express = require('express');
const pug = require('pug');

const constants =  require('./constants');
const build =  require('./build');

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  app.use('/', express.static(constants.STATIC_PATH));

  build.buildCSS();
  build.buildHTML();

  res.send(pug.renderFile(path.join(constants.STATIC_PATH, 'index.html')));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
