import { connect } from 'react-redux';
import { fetchChats, createChat } from "../../actions/chat_actions";
import { replyToChat } from "../../actions/message_actions";
import { closeChatForm, openChatModal } from '../../actions/modal_actions';
import ChatCreate from './chat_create_form';

const mapStateToProps = ({ entities, session }) => ({
  users: Object.values(entities.users),
  currentUser: session
});

const mapDispatchToProps = dispatch => ({
  fetchChats: (userId) => dispatch(fetchChats(userId)),
  createChat: chat => dispatch(createChat(chat)),
  replyToChat: message => dispatch(replyToChat(message)),
  closeChatForm: () => dispatch(closeChatForm()),
  openChatModal: (chatId) => dispatch(openChatModal(chatId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatCreate);