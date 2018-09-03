import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Snack = (props) => (
  <Snackbar id="success"
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    open={props.open}
    autoHideDuration={4000}
    onClose={props.onClose}
    ContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={
      <div id="message-id">
        <CheckCircleIcon id="check-icon" />
        <div>Task Created</div>
      </div>
    }
  />
);

export default Snack;