export const selectUserGroups = (user, groups) => {
  const selectedGroups = [];
  Object.values(groups).forEach(group => {
    if (group.users.includes(user.id)) selectedGroups.push(group);
  });
  return selectedGroups;
};

export const selectUsernamesFromUsers = users =>
  Object.values(users).map(user => ({ value: user.username }));

export const selectChatMessages = (entities, chatId) => {
  const messages = Object.values(entities.messages).filter(
    message => message.chatId === chatId
  );
  return messages;
};

export const selectChat = (entities, chatId) => {
  const chat = Object.values(entities.chats).filter(
    chatMessage => chatMessage.chat._id === chatId
  );
  return chat[0];
};

export const selectAllMessages = (entities) => {
  let totalMessages = 0;
  Object.values(entities.chats).map(chat => totalMessages += chat.messages.length);
  return totalMessages;
}