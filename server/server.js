const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
  .connect(db)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err))

//Routes
const users = require('./controllers/users');
// const events = require('./routes/api/events');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
// app.use('/api/chores', chores);

// app.get('/', (req, res) => res.send('Hello World'));

//Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Socket.io for chat functionality
const server = require('http').createServer();
const io = require('socket.io')(server, {
  
});


app.listen(port, () => console.log(`Server is running on ${port}`));
