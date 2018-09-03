import React from 'react';
// import Modal from 'react-modal';
import { Modal, Button } from 'react-materialize';
import TaskCreateContainer from './task_create_container';
const $ = window.$;


class TaskIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
    // Modal.setAppElement('body');
  }

  // openModal() {
  //   this.setState({ modalIsOpen: true });
  // }

  // afterOpenModal() {
  // }

  // closeModal() {
  //   this.setState({ modalIsOpen: false });
  // }

  render() {
    if (!this.props.tasks) return null;
    let { tasks } = this.props;

    return (
      <div className="task-parent-container">
        <Modal id="create-task-modal" trigger={<Button floating><i className="fas fa-plus"></i></Button>} >
          <div className="modal-content">
            <TaskCreateContainer/>
          </div>
        </Modal>
        <ul className="task-index-container collection with-header">
          <li className="collection-header">
            <h4>My Tasks</h4>
          </li>
          {tasks.map(task => (
            <li className="collection-item avatar hvr-fade" key={task._id}>
              <i className="fas fa-star-of-life circle green"></i>
              <span className="title">{task.name}</span>
              <p>{task.description}</p>
              <p>Deadline: {task.deadline}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskIndex;