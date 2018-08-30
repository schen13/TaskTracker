import GroupIndex from './group_index';
import { connect } from 'react-redux';
import { selectUserGroups } from '../../reducers/selectors';
import { fetchAllGroups } from '../../actions/group_actions';

const mapStateToProps = ({ entities: { users, groups }, session }) => {
  const currentUser = session.id;
  return {
    currentUser,
    userGroups: selectUserGroups(users[currentUser].groups, groups)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllGroups: () => dispatch(fetchAllGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupIndex);