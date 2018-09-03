import React from 'react';
import TaskIndexContainer from '../task/task_index_container';
class GroupDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteGroup(this.props.group._id)
      .then(this.props.closeGroupModal());
  }

  render() {
    const { group, closeGroupModal, openGroupForm } = this.props;
    return (
      <div className="group-detail-container">
        <div className="group-detail-header">
          <h5>{group.name}</h5>
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