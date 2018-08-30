import { connect } from 'react-redux';
import { createChat } from '../../actions/chat_actions';
import TaskCreate from './task_create';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  formAction: chat => dispatch(createChat(chat))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreate);