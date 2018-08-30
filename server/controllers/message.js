'use strict'
const Message = require('../models/message');

exports.createMessage = (req, res, next) => {
  const message = new Message({
    chatId: req.params.chatId,
    body: req.body.composedMessage,
    author: req.user._id,
    anon: req.body.anon
  });

  message.save(function (err, newMessage) {
    if (err) {
      res.status(400).send({ error: err });
      return next(err);
    };

    res.status(200).send({ message: newMessage });
    return next();
  });
};

