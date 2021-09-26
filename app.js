const express = require("express");
const app = express();
const socket = require("socket.io");

const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(express());
app.use(cors());

const server = app.listen(PORT, () => {
  console.log("server is running at port ", PORT);
});

const io = socket(server);
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  }); 

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

});

