import GroupIndex from './group_index';
import { connect } from 'react-redux';
import { fetchAllGroups } from '../../actions/group_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { openGroupModal, openGroupForm } from '../../actions/modal_actions';

const mapStateToProps = ({ entities: { users, groups }, session }, ownProps) => {
  const currentUser = session.id;
  return {
    currentUser,
    users,
    groups,
    user: ownProps.user
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchAllGroups: () => dispatch(fetchAllGroups()),
  openGroupModal: groupId => dispatch(openGroupModal(groupId)),
  openGroupForm: () => dispatch(openGroupForm('create'))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);