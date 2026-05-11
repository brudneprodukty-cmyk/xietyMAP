const socket = io();

socket.on('onlineUsers',count=>{

const onlineUsers = document.getElementById('onlineUsers');

onlineUsers.innerText = count;

});