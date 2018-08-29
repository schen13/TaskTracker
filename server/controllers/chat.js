'use strict'
const Chat = require('../models/chat');
const Message = require('../models/message');

exports.getChats = (req, res, next) => {
  // index view for chats
  Chat.find({ participants: req.user._id })
    .select('name participants')
    .exec((err, chats) => {
      if (err) {
        res.status(400).send({ error: err });
        return next(err);
      }

      let allChats = [];
      // only returns most recent message for preview
      chats.forEach((chat) => {
        Message.findOne({ 'chatId' : chat._id })
          .sort('-createdAt')
          .limit(1)
          .populate({
            path: 'author',
            select: 'fName lName'
          })
          .exec((err, message) => {
            if (err) {
              res.status(400).send({ error: err });
              return next(err);
            }
            allChats.push(message);
            if (allChats.length === chats.length) {
              return res.status(200).send({ chats: allChats });
            }
          });
      });
    });
};

exports.getChat = (req, res, next) => {
  // show view for chat messages
  const chatId = req.params.chatId
  Message.findById({ chatId })
    .sort('-createdAt')
    .populate({
      path: 'author',
      select: 'fName lName'
    })
    .exec(function (err, messages) {
      if (err) {
        res.status(400).send({ error: err });
        return next(err);
      };

      res.status(200).send({ messages });
      return next();
    });
};

exports.newChat = (req, res, next) => {
  if(!req.body.composedMessage) {
    res.status(422).send({ errors: 'Please enter a message' });
    return next();
  }

  const chat = new Chat(
    { name: req.body.name },
    { $push: { participants: req.user._id }},
    { $addToSet: { participants: { $each: req.body.participants } } }
  );
  
  chat.save((err, newChat) => {
    if (err) {
      res.status(400).send({ error: err });
      return next(err);
    };

    const message = new Message({
      chatId: newChat._id,
      body: req.body.composedMessage,
      author: req.user._id,
      anon: req.body.anon
    });

    message.save((err, newMessage) => {
      if (err) {
        res.status(400).send({ error: err });
        return next(err);
      };

      res.status(200).send({ chatId: chat._id, message: newMessage });
      return next();
    });
  });
};

exports.sendReply = (req, res, next) => {
  const reply = new Message({
    chatId: req.params.chatId,
    body: req.body.composedMessage,
    author: req.user._id,
    anon: req.body.anon
  });

  reply.save(function (err, newReply) {
    if (err) {
      res.status(400).send({ error: err });
      return next(err);
    };

    res.status(200).send({ message: newReply });
    return next();
  });
};

exports.deleteChat = (req, res, next) => {
  Chat.findOneAndDelete({
    $and: [
      { '_id': req.params.chatId }, { 'participants': req.user._id }
    ]
  }, (err) => {
    if (err) {
      res.status(422).send({ error: err });
      return next(err);
    }

    res.status(200).json({ message: 'Conversation removed!' });
    return next();
  });
};