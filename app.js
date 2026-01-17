const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`DEPLOY V2000: ${process.env.SANDBOX_NAME}: Server running in ${process.env.NODE_ENV} mode and has a message of: ${process.env.DISPLAY_ME}.`);
});

module.exports = { app, PORT };
