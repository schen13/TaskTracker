import { OPEN_GROUP_FORM, CLOSE_GROUP_FORM } from '../../actions/modal_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_GROUP_FORM:
      return action.modal;
    case CLOSE_GROUP_FORM:
      return null;
    default:
      return state;
  }
};