const mongoose = require('mongoose');

const { Schema } = mongoose;

const ChatSchema = new Schema({
  name: {
    type: String,
  },
  participants: {
    type: Array,
  },
  groupChat: {
    type: Boolean,
  },
  timestamp: {
    type: Date,
  },
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;
