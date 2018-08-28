"use strict"
const Chat = require('../models/chat'),
  User = require('../models/user');

exports.getChats = function (req, res, next) {
  // Only return one message from each conversation for preview
  Chat.find({ participants: req.user._id })
    .select('_id')
    .exec(function (err, chats) {
      if (err) {
        res.send({ error: err });
        return next(err);
      }

      // Set up empty array to hold chats + most recent message
      let allChats = [];
      chats.forEach(function (chat) {
        chats.find({ 'chatId': chat._id })
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
            allChats.push(message);
            if (allChats.length === conversations.length) {
              return res.status(200).json({ messages: allChats });
            }
          });
      });
    });
}