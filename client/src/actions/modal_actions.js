export const OPEN_GROUP_MODAL = 'OPEN_GROUP_MODAL';
export const CLOSE_GROUP_MODAL = 'CLOSE_GROUP_MODAL';
export const OPEN_CHAT_MODAL = 'OPEN_CHAT_MODAL';
export const CLOSE_CHAT_MODAL = 'CLOSE_CHAT_MODAL';

export const openGroupModal = modal => ({
  type: OPEN_GROUP_MODAL,
  modal
});

export const closeGroupModal = () => ({
  type: CLOSE_GROUP_MODAL
});

export const openChatModal = modal => ({
  type: OPEN_CHAT_MODAL,
  modal
});

export const closeChatModal = () => ({
  type: CLOSE_CHAT_MODAL
});