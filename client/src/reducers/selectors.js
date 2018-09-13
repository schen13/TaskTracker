export const selectUserGroups = (userId, groups) => {
  const selectedGroups = [];
  Object.values(groups).forEach(group => {
    if (group.users.includes(userId)) selectedGroups.push(group);
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

export const selectGroupTaskIds = (groupId, tasks) => {
  const selectedTaskIds = [];
  Object.values(tasks).forEach(task => {
    if (task.groupId === groupId) selectedTaskIds.push(task._id);
  });
  return selectedTaskIds;
};