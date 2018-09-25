const Chat = require('../models/chat');
const Message = require('../models/message');

exports.getChats = (req, res, next) => {
  // index view for chats
  Chat.find({ participants: req.query.userId }).exec((err, chats) => {
    if (err) {
      res.status(400).send({ error: err });
      return next(err);
    }

    const allChats = [];
    chats.forEach((chat) => {
      Message.find({ chatId: chat._id })
        .sort('-createdAt')
        .exec((err, messages) => {
          allChats.push({ chat, messages });
          if (allChats.length === chats.length) {
            res.status(200).json({ chats: allChats });
            return next();
          }
        });
    });
  });
};

exports.getChat = (req, res, next) => {
  // show view for chat messages
  const { chatId } = req.query;
  Chat.find({ _id: chatId }).exec((err, chat) => {
    if (err) {
      res.status(400).send({ error: err });
      return next(err);
    }

    Message.find({ chatId: chat._id })
      .sort('-timestamp')
      .exec((err, messages) => {
        if (err) {
          res.status(400).send({ error: err });
          return next(err);
        }
        res.status(200).json({ chat, messages });
        return next();
      });
  });
};

exports.newChat = (req, res, next) => {
  const newChat = new Chat({
    name: req.body.name,
    participants: req.body.users,
    groupChat: true,
    timestamp: Date(Date.now()),
  });

  newChat.save().then(
    (chat) => {
      res.json({ chat });
    },
    (err) => {
      res.status(400).send(err);
    },
  );
};

exports.deleteChat = (req, res, next) => {
  Chat.findOneAndDelete(
    {
      $and: [{ _id: req.params.chatId }, { participants: req.user._id }],
    },
    (err) => {
      if (err) {
        res.status(422).send({ error: err });
        return next(err);
      }

      res.status(200).json({ message: 'Conversation removed!' });
      return next();
    },
  );
};
