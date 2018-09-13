import axios from "axios";

// Chats Index
export const fetchChats = userId =>
  axios.get("/api/chats", {
    params: { userId }
  });

// Chats Show
export const fetchChat = chatId =>
  axios.get("/api/chat", {
    params: { chatId }
  });

export const createChat = chatData => {
  return axios.post("/api/chats", chatData);
};

export const deleteChat = id => axios.delete(`/api/chats/${id}`);
