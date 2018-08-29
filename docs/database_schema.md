```js
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const User = new Schema({
    userId: ObjectId,
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    profileImageUrl: String,
    groups: Array,
    tasks: Array,
    timeStamp: Date
});

const Group = new Schema({
    groupId: ObjectId,
    groupName: String,
    groupImageUrl: String,
    users: Array,
    tasks: Array,
    timeStamp: Date
});

const Task = new Schema({
  taskId: ObjectId,
  name: { type: String, default: ‘Task’ },
  description: String,
  users: Array
  deadline: Date,
  estTime: Integer,
  completed: Boolean,
  timeStamp: {
    type: Date,
    default: Date.now
  }
});

const Chat = new Schema({
  chatId: ObjectId,
  groupId: String,
  messages: Array,
  participants: Array  
  timeStamp: {
    type: Date,
    default: Date.now
  }
});

const Message = new Schema({
  messageId: ObjectId,
  chatId: Integer,
  author: Integer,
  body: String,
  anon: boolean
})
```