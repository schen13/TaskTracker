import React from 'react';
import { withRouter } from 'react-router-dom';
import io from "socket.io-client";

class ChatShow extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io.connect();
    const { chat, users, currentUser } = this.props;

    this.state = {
      chatId: chat.chat._id,
      name: chat.chat.name,
      body: '',
      author: currentUser.id,
      participants: chat.chat.participants,
      anon: false,
      messages: chat.message,
      users: users
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    this.chatOnEmit = this.chatOnEmit.bind(this)
    this.renderMessages = this.renderMessages.bind(this)
    this.chatOnEmit();
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmitMessage(e) {
    e.preventDefault();
    const { chatId, body, author, anon } = this.state;
    
    // Send chat to database 
    this.props.replyToChat({ chatId, body, author, anon });

    // Send chat to everyone in message
    this.socket.emit('newMessage', { body, author, anon });
    this.setState({ body: '' });
    return false;
  }

  chatOnEmit() {
    this.socket.on('newMessage', (message) => {
      this.setState(
        {
          messages: [...this.state.messages, message]
        }
      )
    });
  }

  renderMessages(){
    let { messages, users } = this.state;
    if (!messages) return;

    let conversation = [];
    let authorName;
    for (let i = messages.length - 1; i > 0; i--) {
      if (messages[i].author !== this.props.currentUser.id) {
        let author = users.filter(user => user.id === messages[i].author) 
        if (author.username) {
          authorName = author.username;
        } else {
          authorName = 'anonymous';
        }
        
        conversation.push(
          <li className="other-message" key={messages[i]._id}>
            <div>
              <i id="pf" className="fas fa-user-circle" />
            </div>
            <div className="message-box">
              <div className="message">
                <span>{messages[i].body}</span>
              </div>
              <div className="author">{authorName}</div>
            </div>
          </li>
        );
      } else {
        conversation.push(
          <li className="own-message" key={messages[i]._id}>
            <div className="message">
              <span>
                {messages[i].body}
              </span>
            </div>
          </li>
        );
      };
    };
    return conversation
  }

  render() {
    
    return (
      <div>
        <div className="chat-show">
          <h1 className="chat-name">{this.state.name}</h1>
          <ul className="chat-show-messages">
            {this.renderMessages()}
          </ul>
        </div>
          
        <form onSubmit={this.handleSubmitMessage} className="chat-input">
          <input 
            type="text"
            id="message-input-body"
            onChange={this.handleInput}
            placeholder="Type a message"
            value={this.state.body} />
        </form>
      </div>
    );
  }
}

export default withRouter(ChatShow);
