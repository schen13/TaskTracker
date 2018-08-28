const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  chatId: {
    type: Schema.Types.ObjectId,
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
  }
},
{
  //createdAt and updatedAt as dates
  timestamps: true
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;