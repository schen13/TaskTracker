import * as ChoreApiUtil from '../util/chore_api_util';

export const RECEIVE_CHORE = 'RECEIVE_CHORE';
export const RECEIVE_CHORES = 'RECEIVE_CHORES'; 
export const REMOVE_CHORE = 'REMOVE_CHORE';

export const receiveChore = payload => ({
  type: RECEIVE_CHORE,
  chore: payload.data
});

export const receiveChores = payload => ({
  type: RECEIVE_CHORES,
  chores: payload.data.chores
});

export const removeChore = payload => ({
  type: REMOVE_CHORE,
  chore: payload.data.chore
});

export const fetchChores = () => dispatch => (
  ChoreApiUtil.fetchChores().then(chores => dispatch(receiveChores(chores)))
);

export const fetchChore = id => dispatch => (
  ChoreApiUtil.fetchChore(id).then(chore => dispatch(receiveChore(chore)))
);

export const createChore = chore => dispatch => (
  ChoreApiUtil.createChore(chore).then(newChore => dispatch(receiveChore(newChore)))
);

export const updateChore = chore => dispatch => (
  ChoreApiUtil.updateChore(chore).then(updatedChore => dispatch(receiveChore(updatedChore)))
);

export const deleteChore = id => dispatch => (
  ChoreApiUtil.deleteChore(id).then(chore => dispatch(removeChore(chore)))
);