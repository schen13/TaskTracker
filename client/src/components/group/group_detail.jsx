import React from 'react';
import TaskCreateContainer from '../task/task_create_container';
class GroupDetail extends React.Component {

  render() {
    const { tasks, group, closeGroupModal, openGroupForm } = this.props;
    return (
      <div className="group-detail-container">
        <div className="group-detail-header">
          <p>{group.name}</p>
          <button
            className="close-group-modal-button"
            onClick={closeGroupModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {tasks.map(task => (
          <div className="task-info">
            <div className="task-name">
              {task.name}
            </div>
            <div className="task-description">
              {task.description}
            </div>
          </div>
        ))}
        {/* <a className="btn-floating btn waves-effect waves-light red modal-trigger" href="#modal1"><i className="fas fa-plus"></i></a>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <TaskCreateContainer />
          </div>
        </div> */}
        <button
          className="edit-group-button"
          onClick={openGroupForm}>
          <i className="far fa-edit"></i>
        </button>
      </div>
    );
  }
}

export default GroupDetail;