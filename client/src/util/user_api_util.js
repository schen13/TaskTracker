import axios from 'axios';

export const fetchSingleUser = id => (
  axios.get(`/api/users/${id}`)
);
