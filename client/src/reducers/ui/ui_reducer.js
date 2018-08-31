import { combineReducers } from 'redux';
import groupModal from './group_modal_reducer';
import chatModal from './chat_modal_reducer';

export default combineReducers({
  groupModal,
  chatModal
});