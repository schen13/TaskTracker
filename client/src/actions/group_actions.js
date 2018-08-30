import * as GroupAPIUtil from '../util/group_api_util';

export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';
export const RECEIVE_SINGLE_GROUP = 'RECEIVE_SINGLE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';
export const REMOVE_GROUP_ERRORS = 'REMOVE_GROUP_ERRORS';

export const fetchAllGroups = () => dispatch => (
  GroupAPIUtil.fetchAllGroups()
    .then(res => dispatch(receiveGroups(res)))
);

export const fetchSingleGroup = id => dispatch => (
  GroupAPIUtil.fetchSingleGroup(id)
    .then(res => dispatch(receiveGroup(res)))
);

export const createGroup = group => dispatch => (
  GroupAPIUtil.createGroup(group)
    .then(res => dispatch(receiveGroup(res)))
);

export const updateGroup = group => dispatch => (
  GroupAPIUtil.updateGroup(group)
    .then(res => dispatch(receiveGroup(res)))
);

export const deleteGroup = groupId => dispatch => (
  GroupAPIUtil.deleteGroup(groupId)
    .then(res => dispatch(removeGroup(res)))
);

const receiveGroups = groups => ({
  type: RECEIVE_ALL_GROUPS,
  groups
});

const receiveGroup = group => ({
  type: RECEIVE_SINGLE_GROUP,
  group
});

const removeGroup = group => ({
  type: REMOVE_GROUP,
  group
});

export const receiveGroupErrors = errors => ({
  type: RECEIVE_GROUP_ERRORS,
  errors
});

export const removeGroupErrors = () => ({
  type: REMOVE_GROUP_ERRORS
});