
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const messages = [];

app.get('/', (req, res) => {
  res.sendFile(`public/index.html`);
});

app.post('/send-message', (req, res) => {
  messages.push(req.body.message);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});