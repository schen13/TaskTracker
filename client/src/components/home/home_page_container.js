import { connect } from 'react-redux';
import HomePage from './home_page';
import { fetchSingleUser } from '../../actions/user_actions';
import { fetchGroupUsers } from "../../actions/group_actions";

const mapStateToProps = ({ entities: { users }, session }) => ({
  userId: session.id,
  users
});

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: id => dispatch(fetchSingleUser(id)),
  fetchGroupUsers: userId => dispatch(fetchGroupUsers(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);