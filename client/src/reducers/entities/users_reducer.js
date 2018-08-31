import { RECEIVE_SINGLE_USER, RECEIVE_USERS } from '../../actions/user_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return merge(nextState, { [action.payload.id]: action.payload });
    case RECEIVE_USERS:
      action.users.forEach(user => {
        nextState[user._id] = user;
      });
      return nextState;
    default:
      return state;
  }
};