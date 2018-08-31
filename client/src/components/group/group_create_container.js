import { connect } from 'react-redux';
import GroupCreate from './group_create';
import { createGroup } from '../../actions/group_actions';
import { selectUsernamesFromUsers } from '../../reducers/selectors';

const mapStateToProps = ({ entities: { users }, usernameMapping }) => ({
  usernames: selectUsernamesFromUsers(users),
  usernameMapping
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreate);