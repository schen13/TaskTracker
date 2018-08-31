import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';

export const fetchSingleUser = id => dispatch => (
  UserAPIUtil.fetchSingleUser(id)
    .then(user => dispatch(receiveSingleUser(user)))
);

const receiveSingleUser = payload => ({
  type: RECEIVE_SINGLE_USER,
  payload: payload.data
});