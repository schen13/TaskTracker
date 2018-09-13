import { OPEN_CHAT_MODAL, CLOSE_CHAT_MODAL } from "../../actions/modal_actions";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_CHAT_MODAL:
      return action.modal;
    case CLOSE_CHAT_MODAL:
      return null;
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
};
