import { connect } from 'react-redux';
import GroupEdit from './group_edit';
import { updateGroup, deleteGroup } from '../../actions/group_actions';
import { selectUsernamesFromUsers } from '../../reducers/selectors';
import { closeGroupForm } from '../../actions/modal_actions';

const mapStateToProps = ({ entities: { users, groups }, usernameMapping, ui }) => ({
  users,
  usernames: selectUsernamesFromUsers(users),
  usernameMapping,
  group: groups[ui.groupModal]
});

const mapDispatchToProps = dispatch => ({
  updateGroup: group => dispatch(updateGroup(group)),
  deleteGroup: id => dispatch(deleteGroup(id)),
  closeGroupForm: () => dispatch(closeGroupForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupEdit);
