import merge from 'lodash/merge';

import {
  RECEIVE_CHATS,
  RECEIVE_CHAT,
  REMOVE_CHAT
} from '../actions/chat_actions';

const chatsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHATS:
      return merge({}, action.chats);
    case RECEIVE_CHAT:
      return merge({}, state, { [action.chat._id]: action.chat });
    case REMOVE_CHAT:
      const newState = merge({}, state);
      delete newState[action.chat._id];
      return newState;
    default:
      return state;
  }
};

export default chatsReducer;

