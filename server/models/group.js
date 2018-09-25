const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    default: 'Awesome Group',
  },
  imageUrl: {
    type: String,
  },
  users: {
    type: Array,
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  timeStamp: {
    type: Date,
  },
});

module.exports = Group = mongoose.model('groups', GroupSchema);
