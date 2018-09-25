import * as ChatApiUtil from "../util/chat_api_util";

export const RECEIVE_CHATS = "RECEIVE_CHATS";
export const RECEIVE_CHAT = "RECEIVE_CHAT";
export const REMOVE_CHAT = "REMOVE_CHAT";

export const receiveChats = payload => ({
  type: RECEIVE_CHATS,
  chats: payload.data.chats
});

export const receiveChat = payload => ({
  type: RECEIVE_CHAT,
  chat: payload.data.chat
});

export const removeChat = payload => ({
  type: REMOVE_CHAT,
  chat: payload.data.chat
});

export const fetchChats = userId => dispatch =>
  ChatApiUtil.fetchChats(userId).then(chats => {
    dispatch(receiveChats(chats));
  });

export const fetchChat = chatId => dispatch =>
  ChatApiUtil.fetchChat(chatId).then(chat => {
    dispatch(receiveChat(chat));
  });

export const createChat = chat => dispatch =>
  ChatApiUtil.createChat(chat).then(newChat => {
    dispatch(receiveChat(newChat));
  });

export const deleteChat = id => dispatch =>
  ChatApiUtil.deleteChat(id).then(chat => {
    dispatch(removeChat(chat));
  });
