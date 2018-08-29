import * as ChoreApiUtil from '../util/chore_api_util';

export const RECEIVE_CHORE = 'RECEIVE_CHORE';
export const RECEIVE_CHORES = 'RECEIVE_CHORES'; 
// export const REMOVE_CHORE = 'REMOVE_CHORE';

export const receiveChore = chore => ({
  type: RECEIVE_CHORE,
  chore
});

export const receiveChores = chores => ({
  type: RECEIVE_CHORES,
  chores
});