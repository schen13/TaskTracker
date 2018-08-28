"use strict"
const Chat = require('../models/chat');
const Message = require('../models/message');
const User = require('../models/User');

exports.getChats = function (req, res, next) {
  // Only returns one message from each conversation for message index page
  Chat.find({ participants: req.user._id })
    .select('_id')
    .exec(function (err, chats) {
      if (err) {
        res.send({ error: err });
        return next(err);
      }

      // Set up empty array to hold chats + most recent message
      let allChats = [];
      chats.forEach (function(chat) {
        Message.find({ 'chatId': chat._id })
          .sort('-createdAt')
          .limit(1)
          // .populate({
          //   path: 'author',
          //   select: 'fName lName'
          // })

          // check if message is anonymous
          .exec()
          .then(data => 
            Promise.all(
              data.map(message => 
                (message.anon) ? message : message.populate({
                  path: 'author',
                  select: 'fName lName'
                })
              )
            )
          )
          .then (data => {
            allChats.push(data);
            if (allChats.length === chats.length) {
              return res.status(200).json({ chats: allChats });
            }
          })
          .catch (err => {
            if (err) {
              res.send({ error: err });
              return next(err);
            }
          })
        });
      });
};


exports.getChat = function (req, res, next) {
  //message show page
  Message.find({ chatId: req.params.chatId })
    .select('createdAt body author')
    .sort('-createdAt')
    .populate({
      path: 'author',
      select: 'fName lName'
    })
    .exec(function (err, messages) {
      if (err) {
        res.send({ error: err });
        return next(err);
      }

      res.status(200).json({ chat: messages });
    });
}

exports.newChat = function (req, res, next) {
  if (!req.params.recipient) {
    res.status(422).send({ errors: 'Please select another user' });
    return next();
  }

  if(!req.body.composedMessage) {
    res.status(422).send({ errors: 'Please enter a message' });
    return next();
  }

  const chat = new Chat({
    participants: [req.user._id, req.params.recipient]
  });

  chat.save(function(err, newChat) {
    if (err) {
      res.send({ error: err });
      return next(err);
    }

    const message = new Message({
      chatId: newChat._id,
      body: req.body.composedMessage,
      author: req.user._id
    });

    message.save(function (err, newMessage) {
      if (err) {
        res.send({ error: err });
        return next(err);
      }

      res.status(200).json({ message: 'Chat started', chatId: chat._id });
      return next();
    });
  });
}

exports.sendReply = function (req, res, next) {
  const reply = new Message({
    chatId: req.params.chatId,
    body: req.body.composedMessage,
    author: req.user._id
  });

  reply.save(function (err, sentReply) {
    if (err) {
      res.send({ error: err });
      return next(err);
    }

    res.status(200).json({ message: 'Reply sent'});
    return(next);
  })
}