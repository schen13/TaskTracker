const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./controllers/users');
const task = require('./controllers/task');
const chat = require('./controllers/chat');
const message = require('./controllers/message');
const jsonwebtoken = require('jsonwebtoken');

require('./config/passport')(passport);

import {
  getGroups,
  getGroup,
  createGroup,
  updateGroup,
  deleteGroup
} from './controllers/group';

mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

//Routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.post('/api/tasks', task.addTask);
app.get('/api/tasks', task.getUserTasks);
app.get('/api/tasks/:id', task.getTask);
app.post('/api/tasks', task.addTask);
app.patch('/api/tasks/:id', task.updateTask);
app.delete('/api/tasks/:id', task.deleteTask);

app.get('/api/groups/', getGroups);
app.get('/api/groups/:groupId', getGroup);
app.post('/api/groups', createGroup);
app.patch('/api/groups/:groupId', updateGroup);
app.delete('/api/groups/:groupId', deleteGroup);

app.get('/api/chats', chat.getChats);
app.get('/api/chats/:chatId', chat.getChat);
app.post('/api/chats', chat.newChat);
app.post('/api/chats/:chatId', message.createMessage);
app.delete('/api/chats/:chatId', chat.deleteChat);

// Socket.io for chat functionality
// const server = require('http').createServer();
// const io = require('socket.io')(server, {});

app.listen(port, () => console.log(`Server is running on ${port}`));
