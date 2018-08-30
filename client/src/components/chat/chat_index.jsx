import React from 'react';
import { withRouter } from 'react-router-dom';

// const socket = actions.socket;

class ChatIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChats();
  }

  render() {

    return (
      <div className="chat-bar">
        <h1>CHAT BAR FOOLZ</h1>
        <ul>
          {this.props.chats.map(chat => {
            return <li id={chat.id}>
              {chat.chatName}
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(ChatIndex);
