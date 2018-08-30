import {
  RECEIVE_GROUP_ERRORS,
  REMOVE_GROUP_ERRORS
} from '../../actions/group_actions';

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_GROUP_ERRORS:
      return action.errors;
    case REMOVE_GROUP_ERRORS:
      return [];
    default:
      return state;
  }
};