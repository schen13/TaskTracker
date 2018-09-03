import { combineReducers } from 'redux';
import groupModal from './group_modal_reducer';
import chatModal from './chat_modal_reducer';
import chatForm from './chat_form_reducer';
import groupForm from './group_form_reducer';

export default combineReducers({
  groupModal,
  chatModal,
  groupForm,
  chatForm
});