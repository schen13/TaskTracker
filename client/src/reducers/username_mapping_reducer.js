import { RECEIVE_ALL_USERS } from "../actions/user_actions";
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      Object.values(action.payload).forEach(user => {
        if (user.username) {
          newState[user.username] = user.id;
        }
      });
      return newState;
    default:
      return state;
  }
};