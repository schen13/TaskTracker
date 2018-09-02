import axios from 'axios';

export const fetchMessages = chatId => (
  axios.get('/api/messages', {
    params: { chatId }
  })
);

export const fetchMessage = chatId => (
  axios.get('/api/message', {
    params: { chatId }
  })
);

export const replyToChat = messageData => (
  axios.post(`/api/messages/${messageData.chatId}`, messageData)
);
