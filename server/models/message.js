const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  chatId: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  anon: {
    type: Boolean,
    default: false,
    required: true
  },
  timestamp: {
    type: Date
  }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;