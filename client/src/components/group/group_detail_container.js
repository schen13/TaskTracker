import { connect } from 'react-redux';
import GroupDetail from './group_detail';
import { closeGroupModal, openGroupForm } from '../../actions/modal_actions';
import { deleteGroup } from '../../actions/group_actions';
import { deleteTask } from '../../actions/task_actions';

const mapStateToProps = ({ entities: { tasks, groups }, session }, ownProps) => ({
  group: groups[ownProps.groupId],
  tasks
});

const mapDispatchToProps = dispatch => ({
  closeGroupModal: () => dispatch(closeGroupModal()),
  openGroupForm: () => dispatch(openGroupForm("edit")),
  deleteGroup: groupId => dispatch(deleteGroup(groupId)),
  deleteTask: taskId => dispatch(deleteTask(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);