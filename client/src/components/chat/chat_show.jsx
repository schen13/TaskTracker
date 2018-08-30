import React from 'react';
import { withRouter } from 'react-router-dom';

// const socket = actions.socket;

class ChatShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChat(this.props.chat.id);
  }

  render() {

    return (
      <div className="chat-show">
        <h1>CHAT SHOW WORKS FOOLZ</h1>
      </div>
    );
  }
}

export default withRouter(ChatShow);
