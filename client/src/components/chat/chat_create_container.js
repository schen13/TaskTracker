import { connect } from 'react-redux';
import { createChat } from '../../actions/chat_actions';
import ChatCreate from './chat_create_form';

const mapStateToProps = ({ entities, session }) => ({
  users: Object.values(entities.users),
  currentUser: session
});

const mapDispatchToProps = dispatch => ({
  createChat: chat => dispatch(createChat(chat))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatCreate);