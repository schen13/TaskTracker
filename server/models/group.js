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
  users: {
    type: Array
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  timeStamp: {
    type: Date,
  }
});

const Group = mongoose.model('groups', GroupSchema);

export default Group;