import * as UserAPIUtil from '../util/user_api_util';

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

export const fetchSingleUser = id => dispatch => (
  UserAPIUtil.fetchSingleUser(id)
    .then(user => dispatch(receiveSingleUser(user)))
);

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
);