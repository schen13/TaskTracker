import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const fetchTasks = () => (
  axios.get('/api/tasks')
);

export const fetchTask = id => (
  axios.get(`/api/tasks/${id}`)
);

export const createTask = data => (
  axios.post('/api/tasks', data)
);

export const updateTask = data => {
console.log(data);
return (
  axios.patch(`/api/tasks/${data._id}`, data)
);
};

export const deleteTask = id => (
  axios.delete(`/api/tasks/${id}`)
);