import { connect } from 'react-redux';

import { fetchChats, deleteChat } from '../../actions/chat_actions';
import ChatIndex from './chat_index';

const mapStateToProps = ({ entities, session}) => ({
  chats: Object.values(entities.chats),
  users: entities.users,
  currentUser: session
});

const mapDispatchToProps = dispatch => ({
  fetchChats: (userId) => dispatch(fetchChats(userId)),
  deleteChat: id => dispatch(deleteChat(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatIndex);