import { OPEN_GROUP_MODAL, CLOSE_GROUP_MODAL } from '../../actions/modal_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_GROUP_MODAL:
      return action.modal;
    case CLOSE_GROUP_MODAL:
      return null;
    default:
      return state;
  }
};