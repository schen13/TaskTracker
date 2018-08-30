import { combineReducers } from 'redux';
import chores from './chore_reducer';
import groups from './group_reducer';
import chats from './chats_reducer';

export default combineReducers({
	chores,
	groups,
	chats
});