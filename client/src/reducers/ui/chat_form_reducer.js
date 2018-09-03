import { OPEN_CHAT_FORM, CLOSE_CHAT_FORM } from "../../actions/modal_actions";

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_CHAT_FORM:
      return action.modal;
    case CLOSE_CHAT_FORM:
      return null;
    default:
      return state;
  }
};
