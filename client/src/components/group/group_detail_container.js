import { connect } from 'react-redux';
import GroupDetail from './group_detail';
import { closeGroupModal, openGroupForm } from '../../actions/modal_actions';
import { deleteGroup } from '../../actions/group_actions';

const mapStateToProps = ({ entities: { tasks, groups }, session }, ownProps) => ({
  group: groups[ownProps.groupId]
});

const mapDispatchToProps = dispatch => ({
  closeGroupModal: () => dispatch(closeGroupModal()),
  openGroupForm: () => dispatch(openGroupForm("edit")),
  deleteGroup: groupId => dispatch(deleteGroup(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);