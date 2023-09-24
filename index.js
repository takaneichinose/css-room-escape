const path = require('path');

const express = require('express');
const pug = require('pug');

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, 'src/static')))

app.get('/', (req, res) => {
  res.send(pug.renderFile('./src/index.pug'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
