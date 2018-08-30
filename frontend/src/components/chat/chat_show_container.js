import { connect } from 'react-redux';

import { fetchChat, replyToChat, deleteChat } from '../../actions/chat_actions';
import { selectChatMessages } from '../../reducers/selectors';
import ChatShow from './chat_show';

const mapStateToProps = ({ entities }, ownProps) => ({
  messages: selectChatMessages({ entities }, ownProps.match.params.chatId)
});

const mapDispatchToProps = dispatch => ({
  fetchChat: id => dispatch(fetchChat(id)),
  replyToChat: chat => dispatch(replyToChat(chat)),
  deleteChat: id => dispatch(deleteChat(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatShow);