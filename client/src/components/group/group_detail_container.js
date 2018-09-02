import { connect } from 'react-redux';
import GroupDetail from './group_detail';

const mapStateToProps = ({ entities: { tasks, groups }, session }, ownProps) => ({
  tasks: Object.values(tasks)
    .filter(task =>
      task.userId === session.id &&
      task.groupId === ownProps.groupId),
  group: groups[ownProps.groupId]
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetail);