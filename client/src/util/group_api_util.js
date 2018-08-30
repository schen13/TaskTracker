import axios from 'axios';

export const fetchAllGroups = () => (
  axios.get(`/api/groups/`)
);

export const fetchSingleGroup = id => (
  axios.get(`/api/groups/${id}`)
);

export const createGroup = group => (
  axios.post(`/api/groups`, group)
);

export const updateGroup = group => (
  axios.patch(`/api/groups/${group._id}`)
);

export const deleteGroup = groupId => (
  axios.delete(`/api/groups/${groupId}`)
);