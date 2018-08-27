const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  messages: [
    {
      body: {
        type: Text,
        required: true
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      timestamps: true
    }  
  ],
  participants: [
    { 
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Chat = mongoose.model('Chat', ChatSchema);
