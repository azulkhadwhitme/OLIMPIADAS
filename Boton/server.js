const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configurar una conexión WebSocket
io.on('connection', (socket) => {
  socket.on('botonClic', (mensaje) => {
    // Emitir el mensaje a todos los clientes conectados
    io.emit('mensajeAparicion', mensaje);
  });
});

server.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});