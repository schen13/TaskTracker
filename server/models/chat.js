const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
