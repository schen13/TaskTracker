import { connect } from 'react-redux';
import HomePage from './home_page';
import { fetchSingleUser } from '../../actions/user_actions';

const mapStateToProps = ({ entities: { users }, session }) => ({
  userId: session.id,
  users
});

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: id => dispatch(fetchSingleUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);