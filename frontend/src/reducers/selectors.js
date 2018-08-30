export const selectChatMessages = ({ entities }, chatId) => {
  const messages = Object.values(entities.messages).filter(message => message.chatId === chatId)
  return(
    messages
  );
};