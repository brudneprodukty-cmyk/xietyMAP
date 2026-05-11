const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = new Server(server,{
cors:{origin:'*'}
});

app.use(cors());
app.use(express.static('../'));

let onlineUsers = 0;

io.on('connection',socket=>{

onlineUsers++;

io.emit('onlineUsers',onlineUsers);

console.log('User connected');

socket.on('disconnect',()=>{

onlineUsers--;

io.emit('onlineUsers',onlineUsers);

});

});

server.listen(3000,()=>{
console.log('Server running on port 3000');
});