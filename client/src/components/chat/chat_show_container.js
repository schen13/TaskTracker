import { connect } from 'react-redux';
import { fetchChat, deleteChat } from '../../actions/chat_actions';
import { replyToChat } from "../../actions/message_actions";
import { selectChat } from '../../reducers/selectors';
import { closeChatModal } from "../../actions/modal_actions";
import ChatShow from './chat_show';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  chat: selectChat({ entities }, ownProps.chatId),
  users: Object.values(entities.users),
  currentUser: session
});

const mapDispatchToProps = dispatch => ({
  fetchChat: chatId => dispatch(fetchChat(chatId)),
  replyToChat: chat => dispatch(replyToChat(chat)),
  deleteChat: chatId => dispatch(deleteChat(chatId)),
  closeChatModal: () => dispatch(closeChatModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatShow);