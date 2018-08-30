const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChoreSchema = new Schema({
  name: {
    type: String,
    default: 'Chore'
  },
  description: {
    type: String
  },
  userId: {
    type: String,
    required: true
  },
  groupId: {
    type: String,
    required: true
  },
  deadline: {
    type: Date,
    equired: true
  },
  estTime: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Chore = mongoose.model('chores', ChoreSchema);

module.exports = Chore;