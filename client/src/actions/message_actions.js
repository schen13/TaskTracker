import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessages = payload => ({
  type: RECEIVE_MESSAGES,
  messages: payload.data.messages
})

export const receiveMessage = payload => ({
  type: RECEIVE_MESSAGE,
  message: payload.data.message
})

export const fetchMessages = (chatId) => dispatch => (
  MessageApiUtil.fetchMessages(chatId).then(messages => {
    dispatch(receiveMessages(messages));
  })
);

export const fetchMessage = (chatId) => dispatch => (
  MessageApiUtil.fetchMessage(chatId).then(message => {
    dispatch(receiveMessage(message));
  })
);

export const replyToChat = messageData => dispatch => (
  MessageApiUtil.replyToChat(messageData).then(newMessage => {
    dispatch(receiveMessage(newMessage));
  })
);