export const selectUserGroups = (groupIds, groups) => {
  const selectedGroups = [];
  groupIds.forEach(groupId => {
    selectedGroups.push(groups[groupId]);
  });
  return selectedGroups;
};

export const selectChatMessages = ({ entities }, chatId) => {
  const messages = Object.values(entities.messages).filter(message => message.chatId === chatId);
  return (
    messages
  );
};