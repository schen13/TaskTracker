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

// Chats Index (only returns 1 message per chat)
export const fetchChats = (userId) => (
  axios.get('/api/chats', {
    params: { userId }
  })
);

// Chats Show
export const fetchChat = (chatId) => (
  axios.get('/api/chat', {
    params: { chatId }
  })
);

export const createChat = chatData => (
  axios.post('/api/chats', chatData)
);

export const deleteChat = id => (
  axios.delete(`/api/chats/${id}`)
);