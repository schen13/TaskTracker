import React from 'react';
import { Modal, Button } from 'react-materialize';
import TaskCreateContainer from './task_create_container';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const $ = window.$;


class TaskIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    if (!this.props.tasks) return null;
    let { tasks } = this.props;

    return (
      <div className="task-parent-container">
        <List id="task-index-list" className="task-index-container collection with-header">
          <li className="collection-header" id="task-header">
            <h4>My Tasks</h4>
            <Modal id="create-task-modal" trigger={<Button floating><i className="fas fa-plus"></i></Button>} >
              <div className="modal-content">
                <TaskCreateContainer />
              </div>
            </Modal>
          </li>
          {tasks.map(task => (
            <Modal id="task-show" key={task._id} trigger={
              <ListItem className="collection-item hvr-fade" key={task._id}>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={task.name}
                  secondary={`Finish by: ${task.deadline}`}
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                    <i className="fas fa-trash"></i>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            }>
            </Modal>
          ))}
        </List>
      </div>
    );
  }
}

export default TaskIndex;