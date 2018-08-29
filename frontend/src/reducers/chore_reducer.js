import { 
  RECEIVE_CHORE, 
  RECEIVE_CHORES, 
  REMOVE_CHORE 
} from '../actions/chore_actions';

import merge from 'lodash/merge';

const choreReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, merge);

  switch (action.type) {
    case RECEIVE_CHORE:
      const newChore = {
        [action.chore._id]: action.chore
      };
      return merge(nextState, newChore);
    
      case RECEIVE_CHORES:
        action.chores.forEach(chore => {
          nextState[chore._id] = chore;
        });
        return nextState;

      case REMOVE_CHORE:
        delete nextState[action.chore._id];
        return nextState;

    default:
      return state;
  }
};

export default choreReducer;

