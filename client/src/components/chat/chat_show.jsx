import React from 'react';
import { withRouter } from 'react-router-dom';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:5000');

class ChatShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      chatId: this.props.chatId,
      body: '',
      author: this.props.currentUser.id,
      anon: false
    };

    this.submitMessage = this.submitMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchChat(this.props.chatId);
  // }

  login(userId, cb) {
    socket.emit('login', userId, cb)
  }

  submitMessage(e) {
    e.preventDefault();
    const { chatId, body, author, anon } = this.state;
    
    // Send chat to database 
    this.props.replyToChat({ chatId, body, author, anon });

    // Send chat to everyone in message
    // socket.emit('newMessage', { body, author, anon });
    this.setState({ body: ''})
  }

  handleInput(e){
    e.preventDefault();
    this.setState({ body: e.currentTarget.value });
  }

  render() {

    return (
      <div className="chat-show">
        <h1>CHAT SHOW WORKS FOOLZ</h1>
        
        <form onSubmit={this.submitMessage} className="chat-input">
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
