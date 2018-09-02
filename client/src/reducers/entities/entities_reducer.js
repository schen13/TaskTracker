import { combineReducers } from 'redux';
import tasks from './task_reducer';
import groups from './group_reducer';
import chats from './chats_reducer';
import messages from './messages_reducer';
import users from './users_reducer';

export default combineReducers({
	users,
	tasks,
	groups,
  chats,
  messages
});