"use strict"
const Chat = require('../models/chat'),
  User = require('../models/user');

exports.getChats = function (req, res, next) {
  // Only return one message from each conversation to display as snippet
  Chat.find({ participants: req.user._id })
    .select('_id')
    .exec(function (err, chats) {
      if (err) {
        res.send({ error: err });
        return next(err);
      }

      // Set up empty array to hold conversations + most recent message
      let fullChats = [];
      chats.forEach(function (chat) {
        Message.find({ 'chatId': chat._id })
          .sort('-createdAt')
          .limit(1)
          .populate({
            path: "author",
            select: "profile.firstName profile.lastName"
          })
          .exec(function (err, message) {
            if (err) {
              res.send({ error: err });
              return next(err);
            }
            fullConversations.push(message);
            if (fullConversations.length === conversations.length) {
              return res.status(200).json({ conversations: fullConversations });
            }
          });
      });
    });
}