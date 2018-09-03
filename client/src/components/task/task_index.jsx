import React from 'react';
import { Modal, Button } from 'react-materialize';
import TaskCreateContainer from './task_create_container';
import TaskShowContainer from './task_show_container';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from '@material-ui/core/styles';


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

  formatDate(stringDate) {
    const date = new Date(stringDate);

    return date.toDateString();
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
              <ListItem className="collection-item hvr-fade" key={task._id}>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={task.name}
                  secondary={`Finish by: ${this.formatDate(task.deadline)}`}
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete" onClick={() => this.props.deleteTask(task._id)}>
                    <i className="fas fa-trash"></i>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              
            }>
              <TaskShowContainer task={task}/>
            </Modal>
          ))}
        </List>
          <button onClick={this.handleClick}>hhi</button>
        <Snackbar id="success"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.snackOpen}
          autoHideDuration={4000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            <div id="message-id">
              <CheckCircleIcon id="check-icon"/>
              <div>Task Created</div>
            </div>
          }
        />
      </div>
    );
  }
}

export default TaskIndex;