const Message = require('../models/message');

exports.getMessages = (req, res, next) => {
  Message.find({ chatId: req.query.chatId })
    .sort("-createdAt")
    .exec((err, messages) => {
      if (err) {
        res.status(400).send({ error: err });
        return next(err);
      }
      console.log(messages)
      res.status(200).json({ messages });
      return next();
    });
};

exports.getMessage = (req, res, next) => {
  Message.findOne({ chatId: req.query.chatId })
    .sort("-createdAt")
    .limit(1)
    .exec((err, message) => {
      if (err) {
        res.status(400).send({ error: err });
        return next(err);
      };
      res.status(200).json({ message });
      return next();
    });
}

exports.createMessage = (req, res, next) => {
  const newMessage = new Message({
    chatId: req.body.chatId,
    body: req.body.body,
    author: req.body.author,
    anon: req.body.anon,
    timestamp: Date(Date.now())
  });

  newMessage.save((err, message) => {
    if (err) {
      res.status(400).send({ error: err });
      return next(err);
    };

    res.status(200).json({ message });
    return next();
  });
};