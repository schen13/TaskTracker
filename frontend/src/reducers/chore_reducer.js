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
        [action.chore.id]: action.chore
      };
      return merge(nextState, newChore);
    
      case RECEIVE_CHORES:
        action.chores.forEach(chore => {
          nextState[chore.id] = chore;
        });
        return nextState;

      case REMOVE_CHORE:
        delete nextState[action.chore.id];
        return nextState;

    default:
      return state;
  }
};

export default choreReducer;

