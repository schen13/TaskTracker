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

export const createTask = data => {
  console.log("I'm in the apiUtil");
  console.log(data);
  return (
    axios.post('/api/tasks', data)
  );
};

export const updateTask = data => (
  axios.post('/api/tasks', data)
);

export const deleteTask = id => (
  axios.delete(`/api/tasks/${id}`)
);