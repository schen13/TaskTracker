import { 
  RECEIVE_ALL_USERS, 
  RECEIVE_SINGLE_USER
} from '../../actions/user_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.payload);
    case RECEIVE_SINGLE_USER:
      return merge({}, state, { [action.payload.id]: action.payload });
    default:
      return state;
  }
};