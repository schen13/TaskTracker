const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChoreSchema = new Schema ({
  name: {
    type: String,
      default: 'Chore'
  },
  description: {
      type: String
  },
  userId: {
    type: Number,
      required: true
  },
  deadline: {
    type: Date,
      required: true
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