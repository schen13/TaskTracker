import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    default: 'Awesome Group'
  },
  imageUrl: {
    type: String
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  chores: [{
    type: Schema.Types.ObjectId,
    ref: 'Chore'
  }],
  timeStamp: {
    type: Date,
    required: true
  }
});

const Group = mongoose.model('groups', GroupSchema);

export default Group;