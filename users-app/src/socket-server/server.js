// npm init -y
// npm install express socket.io --save
// npm install nodemon -g
// npm i socket.io-client --save (from users-app)

const express = require("express");
var app = express();
const server = require("http").createServer(app);
const io = require("socket.io") (server);

io.on("connection", client => {
  console.log("Client connented!");
  client.on("msgToServer", (chatterName, message) => {
    console.log(chatterName + " : "+message);
    client.emit("msgToClient", "Me",message);
    client.broadcast.emit("msgToClient",chatterName, message);
  })
})

server.listen(3030, () => {
  console.log("Server running on port 3030");
})

