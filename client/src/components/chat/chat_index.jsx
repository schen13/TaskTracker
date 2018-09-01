import React from 'react';
import { withRouter } from 'react-router-dom';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:5000');
class ChatIndex extends React.Component {
  constructor(props) {
    super(props);

    this.getChats = this.getChats.bind(this);
  }
  // registerHandler(onMessageReceived) {
  //   socket.on('message', onMessageReceived)
  // }

  // unregisterHandler() {
  //   socket.off('message')
  // }

  // getChats(userId, cb) {
  //   socket.emit('chats', userId, cb)
  // }

  componentDidMount() {
    this.props.fetChats();
  }

  render() {

    return (
      <div className="chat-bar">
        <div className="chat-header">
          <div></div>
          <h1>CHAT BAR FOOLZ</h1>
          <div></div>
          {/* <img src={require('../../public/images/new_message.png')} /> */}
        </div>
        <ul className="conversations">
          <li className="chats">
            <div className="user-pictures"></div>
            <div className="chat">
              <div className="chat-content">
                <h2>participants</h2>
                <p>Temp Chat</p>
              </div>
              <p className="date">date</p>
            </div>
          </li>

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
