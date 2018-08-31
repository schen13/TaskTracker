import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveSingleUser = payload => ({
  type: RECEIVE_SINGLE_USER,
  payload: payload.data
});

const receiveUsers = payload => ({
  type: RECEIVE_USERS,
  users: payload.data.user
});

export const fetchAllUsers = () => dispatch => (
  UserAPIUtil.fetchAllUsers()
    .then(users => dispatch(receiveAllUsers(users)))
);

export const fetchSingleUser = id => dispatch => (
  UserAPIUtil.fetchSingleUser(id)
    .then(user => dispatch(receiveSingleUser(user)))
);

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
);
const receiveAllUsers = payload => ({
  type: RECEIVE_ALL_USERS,
  payload: payload.data
});

const receiveSingleUser = payload => ({
  type: RECEIVE_SINGLE_USER,
  payload: payload.data
});
