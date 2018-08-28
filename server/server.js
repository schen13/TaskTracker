const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const ChatController = require('./controllers/chat');

mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err))

//Routes
const users = require('./controllers/users');
const chatRoutes = express.Router();
const chore = require('./controllers/chore');
// const events = require('./routes/api/events');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//chatRoutes
chatRoutes.get('/chats', requireAuth, ChatController.getChats);
chatRoutes.get('/chats/:chatId', requireAuth, ChatController.getChat);
chatRoutes.post('/chats/new/:recipient', requireAuth, ChatController.newChat);
chatRoutes.post('/chats/:chatId', requireAuth, ChatController.sendReply);

app.use('/api/users', users);
// app.use('/api/chores', chores);

// app.get('/', (req, res) => res.send('Hello World'));

app.post('/chores', chore.addChore);
app.get('/chores', chore.getChores);

app.get('/chores/:id', chore.getChore);
app.delete('/chores/:id', chore.deleteChore);
app.patch('/chores/:id', chore.updateChore);

//Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Socket.io for chat functionality
// const server = require('http').createServer();
// const io = require('socket.io')(server, {});


app.listen(port, () => console.log(`Server is running on ${port}`));
