const fs = require('fs');
const path = require('path');

const express = require('express');
const pug = require('pug');
const sass = require('sass');

const constants =  require('./constants');

const app = express();
const port = 3000;

app.use('/', express.static(constants.STATIC_PATH))

app.get('/', (_, res) => {
  res.send(pug.renderFile(path.join(constants.STATIC_PATH, 'index.html')));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
