import axios from 'axios';

export const replyToChat = messageData => (
  axios.post(`/api/messages/${messageData.chatId}`, messageData)
);
