const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    default: 'Task'
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

const Task = mongoose.model('tasks', TaskSchema);

module.exports = Task;