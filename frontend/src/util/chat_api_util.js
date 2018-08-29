import axios from 'axios';

// We can use axios to set a default header
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
export const fetchChats = chatData => (
  axios.get('/api/chats', chatData)
);

// Chats Show
export const fetchChat = chatData => (
  axios.get('/api/chats/:chatId', chatData)
);

export const createChat = chatData => (
  axios.post('/api/chats', chatData)
);

export const replyToChat = messageData => (
  axios.post('/api/chats/:chatId', messageData)
);

export const deleteChat = chatData => (
  axios.delete('/api/chats/:chatId', chatData)
);