import { RECEIVE_SINGLE_USER } from '../../actions/user_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return merge({}, state, { [action.payload.id]: action.payload });
    default:
      return state;
  }
};