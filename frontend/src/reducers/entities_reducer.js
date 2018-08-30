import { combineReducers } from 'redux';
import chores from './chore_reducer';
import chats from './chats_reducer';

export default combineReducers({
  chores,
  chats
});