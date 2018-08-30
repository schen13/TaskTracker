import {
  RECEIVE_ALL_GROUPS,
  RECEIVE_SINGLE_GROUP,
  REMOVE_GROUP
} from '../../actions/group_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_GROUPS:
      return merge({}, action.groups);
    case RECEIVE_SINGLE_GROUP:
      return merge({}, { [action.group._id]: action.group });
    case REMOVE_GROUP:
      let newState = merge({}, state);
      delete newState[action.group._id];
      return newState;
    default:
      return state;
  }
};