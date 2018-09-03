import * as MessageApiUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = payload => ({
  type: RECEIVE_MESSAGE,
  message: payload.data.message
})

export const replyToChat = messageData => dispatch => (
  MessageApiUtil.replyToChat(messageData).then(newMessage => {
    dispatch(receiveMessage(newMessage));
  })
);