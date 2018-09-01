import { connect } from 'react-redux';

import { fetchChats, deleteChat } from '../../actions/chat_actions';
import ChatIndex from './chat_index';

const mapStateToProps = (state) => ({
  chats: Object.values(state.entities.chats),
  user: state.session
});

const mapDispatchToProps = dispatch => ({
  fetchChats: () => dispatch(fetchChats()),
  deleteChat: id => dispatch(deleteChat(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatIndex);