const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const server = require('http').Server(app);
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');
const path = require('path');
const users = require('./controllers/users');
const task = require('./controllers/task');
const group = require('./controllers/group');
const chat = require('./controllers/chat');
const message = require('./controllers/message');
const Chat = require('./models/chat');
const Message = require('./models/message');
const db = require('./config/keys').mongoURI;
require('./config/passport')(passport);

server.listen(port, () => console.log(`websockets are running on ${port}`));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

// Routes
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
app.get('/api/messages', message.getMessages);
app.post('/api/messages/:chatId', message.createMessage);

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  // console.log('a user connected');
  // socket.on('disconnect', () => {
  //   console.log('a user disconnected');
  // });

  socket.on('newChat', chatData => createChat(chatData, socket));
  socket.on('newMessage', messageData => createMessage(messageData, socket));
  socket.on('fetchMessages', chatId => getMessages(chatId, socket));
  socket.on('fetchMessage', chatId => getMessage(chatId, socket));
});

function createChat(chatData, socket) {
  const newChat = {
    name: chatData.name,
    participants: chatData.participants,
    groupChat: false,
    timestamp: Date(Date.now()),
  };

  Chat.create(newChat, (err, chat) => {
    if (err) {
      socket.emit('error', err);
    } else {
      socket.emit('newChatCreated', chat._id);
    }
  });
}

function createMessage(messageData, socket) {
  const newMessage = {
    chatId: messageData.chatId,
    body: messageData.body,
    author: messageData.author,
    anon: messageData.anon,
    timestamp: Date(Date.now()),
  };

  Message.create(newMessage, (err, createdMessage) => {
    if (err) {
      socket.emit('error', err);
    } else {
      console.log(createdMessage);
      socket.broadcast.to(createdMessage.chatId).emit('newChatMessage', createdMessage);
    }
  });
}

function getMessages(chatId, socket) {
  Message.find({ chatId })
    .sort('timestamp')
    .exec((err, messages) => {
      socket.emit('chatMessages', messages);
    });
}

function getMessage(chatId, socket) {
  Message.find({ chatId })
    .sort('-timestamp')
    .limit(1)
    .exec((err, message) => {
      socket.emit('chatMessage', message);
    });
}
