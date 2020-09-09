/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const app = express();
const joined = path.join(__dirname, 'public');
const expressStatic = express.static(joined);

app.use(expressStatic);

app.listen(3000, () => {
  console.log('server is listening');
});
