import { connect } from 'react-redux';
import { fetchChats, fetchChat, deleteChat } from '../../actions/chat_actions';
import { fetchMessage } from '../../actions/message_actions';
import { openChatModal } from "../../actions/modal_actions";
import ChatIndex from './chat_index';

const mapStateToProps = ({ entities, session}) => ({
  chats: Object.values(entities.chats),
  users: entities.users,
  currentUser: session,
});

const mapDispatchToProps = dispatch => ({
  fetchChats: userId => dispatch(fetchChats(userId)),
  fetchChat: chatId => dispatch(fetchChat(chatId)),
  fetchMessage: chatId => dispatch(fetchMessage(chatId)),
  deleteChat: id => dispatch(deleteChat(id)),
  openChatModal: () => dispatch(openChatModal("true"))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatIndex);