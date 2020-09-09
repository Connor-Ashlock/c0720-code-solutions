const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.sendFile(req.originalUrl, { root: __dirname }, err => {
    if (err) next();
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening');
});
