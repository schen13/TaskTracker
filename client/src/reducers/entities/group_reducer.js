import {
  RECEIVE_ALL_GROUPS,
  RECEIVE_SINGLE_GROUP,
  REMOVE_GROUP
} from '../../actions/group_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      const groups = action.groups;
      groups.forEach(group => {
        newState[group._id] = group;
      });
      return newState;
    case RECEIVE_SINGLE_GROUP:
      return merge({}, state, { [action.group._id]: action.group });
    case REMOVE_GROUP:
      delete newState[action.group._id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};