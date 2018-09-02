import React from 'react';

class GroupDetail extends React.Component {

  render() {
    const { tasks, group, closeGroupModal } = this.props;
    return (
      <div className="group-detail-container">
        <div className="group-detail-header">
          <p>{group.name}</p>
          <button
            className="close-group-modal-button"
            onClick={closeGroupModal}>
            <i class="fas fa-times"></i>
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

      </div>
    );
  }
}

export default GroupDetail;