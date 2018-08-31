import axios from 'axios';

export const fetchSingleUser = id => (
  axios.get(`/api/users/${id}`)
);

export const fetchUsers = () => (
  axios.get('/api/users')
);
