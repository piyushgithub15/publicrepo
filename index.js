// index.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || "this is default message"

app.get('/', (req, res) => {
  res.send('Hello World! From Piyush');
});

app.get('/msg', (req, res) => {
    res.send(message);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
