import { connect } from 'react-redux';
import { fetchChat, deleteChat } from '../../actions/chat_actions';
import { replyToChat, fetchMessages } from "../../actions/message_actions";
import { selectChat } from '../../reducers/selectors';
import ChatShow from './chat_show';

const mapStateToProps = ({ entities, session }, ownProps) => ({
  chat: selectChat({ entities }, ownProps.match.params.chatId),
  currentUser: session,
  chatId: ownProps.match.params.chatId
});

const mapDispatchToProps = dispatch => ({
  fetchChat: chatId => dispatch(fetchChat(chatId)),
  fetchMessages: chatId => dispatch(fetchMessages(chatId)),
  replyToChat: chat => dispatch(replyToChat(chat)),
  deleteChat: chatId => dispatch(deleteChat(chatId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatShow);