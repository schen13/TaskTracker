import * as GroupAPIUtil from '../util/group_api_util';
import { receiveGroupUsers } from './user_actions';

export const RECEIVE_ALL_GROUPS = 'RECEIVE_ALL_GROUPS';
export const RECEIVE_SINGLE_GROUP = 'RECEIVE_SINGLE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';
export const REMOVE_GROUP_ERRORS = 'REMOVE_GROUP_ERRORS';

export const fetchAllGroups = () => dispatch => (
  GroupAPIUtil.fetchAllGroups()
    .then(groups => dispatch(receiveGroups(groups)))
);

export const fetchSingleGroup = id => dispatch => (
  GroupAPIUtil.fetchSingleGroup(id)
    .then(group => dispatch(receiveGroup(group)))
);

export const createGroup = group => dispatch => (
  GroupAPIUtil.createGroup(group)
    .then(createdGroup => dispatch(receiveGroup(createdGroup)))
);

export const updateGroup = group => dispatch => (
  GroupAPIUtil.updateGroup(group)
    .then(updatedGroup => dispatch(receiveGroup(updatedGroup)))
);

export const deleteGroup = groupId => dispatch => (
  GroupAPIUtil.deleteGroup(groupId)
    .then(group => dispatch(removeGroup(group)))
);

export const fetchGroupUsers = userId => dispatch => (
  GroupAPIUtil.fetchGroupUsers(userId)
    .then(groupUsers => {
      dispatch(receiveGroupUsers(groupUsers))
    })
);

const receiveGroups = groups => ({
  type: RECEIVE_ALL_GROUPS,
  groups: groups.data.groups
});

const receiveGroup = group => ({
  type: RECEIVE_SINGLE_GROUP,
  group: group.data.group
});

const removeGroup = group => ({
  type: REMOVE_GROUP,
  group: group.data.group
});

export const receiveGroupErrors = errors => ({
  type: RECEIVE_GROUP_ERRORS,
  errors
});

export const removeGroupErrors = () => ({
  type: REMOVE_GROUP_ERRORS
});