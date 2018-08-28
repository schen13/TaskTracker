const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ChatSchema = new Schema({
  participants: [{ 
      type: Schema.Types.ObjectId,
      ref: 'User'
  }]
},
{
  timestamps: true
});

module.exports = Chat = mongoose.model('Chat', ChatSchema);
