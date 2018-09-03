import { 
  RECEIVE_ALL_USERS, 
  RECEIVE_SINGLE_USER,
  RECEIVE_GROUP_USERS
} from '../../actions/user_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.payload);
    case RECEIVE_SINGLE_USER:
      return merge({}, state, { [action.payload.id]: action.payload });
    case RECEIVE_GROUP_USERS:
      return merge({}, state, { groupUsers: action.groupUsers });
    default:
      return state;
  }
};