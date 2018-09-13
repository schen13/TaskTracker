import React from 'react';
import TaskIndexContainer from '../task/task_index_container';
import { selectGroupTaskIds } from '../../reducers/selectors';

class GroupDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const { group, tasks, closeGroupModal, deleteGroup, deleteTask } = this.props;
    selectGroupTaskIds(group._id, tasks).forEach(taskId => deleteTask(taskId));
    deleteGroup(group._id).then(closeGroupModal());
  }

  render() {
    const { group, closeGroupModal, openGroupForm } = this.props;
    return (
      <div className="group-detail-container">
        <div className="group-detail-header">
          <h3>{group.name}</h3>
          <div className="group-detail-buttons">
            <button
              className="edit-group-button"
              onClick={openGroupForm}>
              <i className="fas fa-pencil-alt"></i>
            </button>
            <button
              className="edit-group-button"
              onClick={this.handleDelete}>
              <i className="fas fa-trash"></i>
            </button>
            <button
              className="close-group-modal-button"
              onClick={closeGroupModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <TaskIndexContainer />
      </div>
    );
  }
}

export default GroupDetail;