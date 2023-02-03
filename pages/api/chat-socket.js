const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log('a user connected');
    const userEmail = socket.request.session.user.email;
    console.log('user email: ', userEmail);
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('message', (message) => {
      console.log('message: ', message);
      io.emit('message', { message, userEmail });
    });
  });
  

server.listen(3001, () => {
  console.log('listening on *:3001');
});

app.use(cors({ origin: 'http://localhost:3000' }));
