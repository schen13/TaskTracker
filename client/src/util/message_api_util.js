import axios from "axios";

export const getMessages = chatId =>
  axios.get(`/api/messages`, {
    params: { chatId }
  });

export const replyToChat = messageData =>
  axios.post(`/api/messages/${messageData.chatId}`, messageData);
