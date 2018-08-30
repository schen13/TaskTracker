import { combineReducers } from 'redux';
import tasks from './task_reducer';
import groups from './group_reducer';
import chats from './chats_reducer';

export default combineReducers({
	tasks,
	groups,
	chats
});