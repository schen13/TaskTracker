import { OPEN_CHAT_MODAL, CLOSE_CHAT_MODAL } from '../../actions/modal_actions';

export default (state = null, action) => {
  switch (action.type) {
    case OPEN_CHAT_MODAL:
      return action.modal;
    case CLOSE_CHAT_MODAL:
      return null;
    default:
      return state;
  }
};