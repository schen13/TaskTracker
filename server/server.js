const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./controllers/users');
const chore = require('./controllers/chore');
const chat = require('./controllers/chat');
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
app.use('/api/users', users);

app.post('/chores', chore.addChore);
app.get('/chores', passport.authenticate('jwt', { session: false }), chore.getUserChores);

app.get('/chores/:id', chore.getChore);
app.post('/chores', passport.authenticate('jwt', { session: false }), chore.addChore);
app.patch('/chores/:id', chore.updateChore);
app.delete('/chores/:id', chore.deleteChore);

app.get('/api/groups/', getGroups);
app.get('/api/groups/:groupId', getGroup);
app.post('/api/groups', createGroup);
app.patch('/api/groups/:groupId', updateGroup);
app.delete('/api/groups/:groupId', deleteGroup);

//chat
app.get('/chats', chat.getChats);
app.get('/chats/:chatId', chat.getChat);
app.post('/chats', chat.newChat);
app.post('/chats/:chatId', chat.sendReply);
// app.post('/messages', chat.newMessage);

// Socket.io for chat functionality
// const server = require('http').createServer();
// const io = require('socket.io')(server, {});


app.listen(port, () => console.log(`Server is running on ${port}`));
