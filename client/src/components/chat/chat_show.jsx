import React from 'react';
import { withRouter } from 'react-router-dom';
import io from "socket.io-client";

class ChatShow extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io.connect();
    const { chatId, chat, currentUser } = this.props;

    this.state = {
      chatId: chatId,
      name: chat.chat.name,
      body: '',
      author: currentUser.id,
      participants: chat.chat.participants,
      anon: false,
      messages: chat.message
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    this.chatOnEmit = this.chatOnEmit.bind(this)
    this.renderMessages = this.renderMessages.bind(this)
    this.chatOnEmit();
  }

  componentDidMount() {
    // this.props.fetchChat(this.props.chatId);
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
      debugger
      this.setState(
        {
          messages: [...this.state.messages, message]
        }
      )
    });
  }

  renderMessages(){
    let messages = this.state.messages;
    if (!messages) return;

    let conversation = [];
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].authorId !== this.props.currentUser.id) {
        conversation.push(
          <li key={messages[i]._id}>
            <div>
              <i className="fas fa-user-circle" />
            </div>
            <div className="other-message">{messages[i].body}</div>
          </li>
        );
      } else {
        conversation.push(
          <li>
            <div className="own-message">{messages[i].body}</div>
          </li>
        );
      };
    };
    return conversation
  }

  render() {
    
    return (
      <div className="chat-show">
        <h1>{this.state.name}</h1>
        <ul>
          {this.renderMessages()}
        </ul>
        
        <form onSubmit={this.handleSubmitMessage} className="chat-input">
          <input 
            type="text"
            onChange={this.handleInput}
            placeholder="Type a message"
            value={this.state.body} />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ChatShow);
