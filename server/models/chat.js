const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  name: {
    type: String
  },
  participants: {
      type: Array
  },
  timestamp: {
    type: Date,
  }
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;