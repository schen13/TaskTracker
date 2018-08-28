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
  choreList: {
    type: Array
  },
  chatList: {
    type: Array
  },
  userList: {
    type: Array
  },
  timeStamp: {
    type: Date,
    required: true
  }
});

const Group = mongoose.model('groups', GroupSchema);

export default Group;