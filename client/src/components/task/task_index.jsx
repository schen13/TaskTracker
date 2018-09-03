import React from 'react';
import { Modal, Button } from 'react-materialize';
import TaskCreateContainer from './task_create_container';
import TaskShowContainer from './task_show_container';
import TaskEdit from './task_edit';
import Snack from './snack';
import Moment from 'moment';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';

const $ = window.$;

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      snackOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  handleClick() {
    this.setState({ snackOpen: true });
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackOpen: false });
  }

  renderComplete(complete) {
    if(complete) {
      return "complete";
    } else {
      return "incomplete";
    }
  }

  render() {
    if (!this.props.tasks) return null;
    let { tasks } = this.props;
    let createTaskButton = <Button floating id="create-task-button"><i className="fas fa-plus"></i></Button>;

    return (
      <div className="task-parent-container">
        <List className="task-index-container collection with-header">
          <ListItem className="collection-header" id="task-header">
            <h4>My Tasks</h4>
            <Modal id="create-task-modal" trigger={createTaskButton} >
              <div className="modal-content">
                <TaskCreateContainer snack={this.handleClick}/>
              </div>
            </Modal>
          </ListItem>
          {tasks.map(task => (
            <Modal key={task._id} trigger={
              <ListItem className={`collection-item hvr-fade`} key={task._id}>
                <ListItemAvatar>
                  <Avatar 
                    className={`folder-icon ${task.completed ? "complete" : "incomplete"}`}
                  >
                    {task.completed ? <i className="fas fa-check"></i> : <FolderIcon/>}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={task.name}
                  secondary={`Finish by: ${Moment(task.deadline).utc().format("MMMM Do, YYYY")}`}
                />
                <ListItemSecondaryAction>
                  <div className="secondary-action-container">
                    <TaskEdit
                      snack={this.handleClick}
                      updateTask={this.props.updateTask}
                      users={this.props.users}
                      task={task}
                    />
                    <IconButton aria-label="Delete" onClick={() => this.props.deleteTask(task._id)}>
                      <i className="fas fa-trash"></i>
                    </IconButton>
                  </div>
                </ListItemSecondaryAction>
              </ListItem>
            }>
              <TaskShowContainer
                task={task}
              />
            </Modal>
          ))}
        </List>

        <Snack 
          open={this.state.snackOpen}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default TaskIndex;