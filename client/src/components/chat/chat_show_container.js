import { connect } from 'react-redux';

import { replyToChat, deleteChat } from '../../actions/chat_actions';
import ChatShow from './chat_show';

const mapStateToProps = ({ entities }, ownProps) => ({
  // chatId: ownProps.match.params.chatId,
  // author: entities.session
});

const mapDispatchToProps = dispatch => ({
  replyToChat: chat => dispatch(replyToChat(chat)),
  deleteChat: id => dispatch(deleteChat(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatShow);