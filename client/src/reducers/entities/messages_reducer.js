import merge from 'lodash/merge';
import { RECEIVE_MESSAGE } from '../../actions/message_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MESSAGE:
      return merge({}, state, { [action.message._id]: action.message });
    default:
      return state;
  }
};

export default messagesReducer;

