import React from 'react';

class GroupDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { tasks, group } = this.props;
    return (
      <div className="group-detail-container">
        <p>{group.name}</p>
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