import axios from 'axios';

export const fetchChores = () => (
  axios.get('/chores')
);

export const fetchChore = id => (
  axios.get(`/chores/${id}`)
);

export const createChore = data => (
  axios.post('/chores', data)
);

export const updateChore = data => (
  axios.post('/chores', data)
);

export const deleteChore = id => (
  axios.delete(`/chores/${id}`)
);