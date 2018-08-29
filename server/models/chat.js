const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  name: {
    type: String
  },
  participants: [{
      type: Schema.Types.ObjectId, 
      ref: 'User'
  }]
},
{
  timestamps: true
});

const Chat  = mongoose.model('Chat', ChatSchema);

module.exports = Chat;