const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./controllers/users');
const task = require('./controllers/task');
const group = require('./controllers/group');
const chat = require('./controllers/chat');
const message = require('./controllers/message');
const Chat = require('./models/chat');
const jsonwebtoken = require('jsonwebtoken');
const path = require('path');
require('./config/passport')(passport);

const express = require('express');
const app = express();

const server = require('http').Server(app);
server.listen(port, () => console.log(`websockets are running on ${port}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
  });
}

mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

//Routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/api/tasks', task.getUserTasks);
app.get('/api/tasks/:id', task.getTask);
app.post('/api/tasks', task.addTask);
app.patch('/api/tasks/:id', task.updateTask);
app.delete('/api/tasks/:id', task.deleteTask);

app.get('/api/groups/', group.getGroups);
app.get('/api/groups/:groupId', group.getGroup);
app.post('/api/groups', group.createGroup);
app.patch('/api/groups/:groupId', group.updateGroup);
app.delete('/api/groups/:groupId', group.deleteGroup);
app.get('/api/groups', group.getGroupUsers);

app.get('/api/chats', chat.getChats);
app.get('/api/chat', chat.getChat);
app.post('/api/chats', chat.newChat);
app.delete('/api/chats/:chatId', chat.deleteChat);
app.post('/api/messages/:chatId', message.createMessage);

const io = require('socket.io')(server);

io.on('connection', function (socket) {
  // console.log('a user connected');
  // socket.on("disconnect", function(){
  //   console.log('a user disconnected');
  // });

  socket.on('newChat', (chatData) => {
    const newChat = {
      name: chatData.name,
      participants: chatData.participants,
      timestamp: Date(Date.now())
    };

    Chat.create(newChat, (err, chat) => {
      if (err) {
        io.emit('error', err);
      } else {
        io.emit('newChatCreated', chat._id);
      }
    })
  })

  socket.on('newMessage', (message) => {
    io.emit('newMessage', message);
  });
});