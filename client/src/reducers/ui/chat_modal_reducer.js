import { 
  OPEN_CHAT_MODAL, 
  CLOSE_CHAT_MODAL,
  OPEN_CHAT_FORM,
  CLOSE_CHAT_FORM
} from '../../actions/modal_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_CHAT_MODAL:
      return action.modal;
    case CLOSE_CHAT_MODAL:
      return null;
    case OPEN_CHAT_FORM:
      return 'chatForm';
    case CLOSE_CHAT_FORM:
      return null;
    default:
      return state;
  }
};