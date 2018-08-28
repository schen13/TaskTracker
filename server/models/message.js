const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

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

module.exports = Message = mongoose.model('Message', MessageSchema);