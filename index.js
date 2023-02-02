const express = require('express');
const app = express();

// Serve the contents of the public directory as static files
app.use(express.static('public'));

// Start the Express server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

app.post('/send-message', (req, res) => {
    // Your code for handling incoming messages goes here
  });