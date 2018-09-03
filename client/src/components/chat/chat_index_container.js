import { connect } from 'react-redux';
import { fetchChats, fetchChat, deleteChat } from '../../actions/chat_actions';
import { openChatModal, openChatForm, closeChatModal, closeGroupModal } from "../../actions/modal_actions";
import ChatIndex from './chat_index';

const mapStateToProps = ({ entities, session}) => ({
  chats: Object.values(entities.chats),
  users: entities.users,
  currentUser: session,
});

const mapDispatchToProps = dispatch => ({
  fetchChats: userId => dispatch(fetchChats(userId)),
  fetchChat: chatId => dispatch(fetchChat(chatId)),
  deleteChat: id => dispatch(deleteChat(id)),
  openChatModal: chatId => dispatch(openChatModal(chatId)),
  openChatForm: () => dispatch(openChatForm('create')),
  closeChatModal: () => dispatch(closeChatModal()),
  closeGroupModal: () => dispatch(closeGroupModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatIndex);