import React from 'react';
import { withRouter } from 'react-router-dom';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:5000');

class ChatShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      chatId: '',
      body: '',
      author: '',
      anon: false
    }

    this.submitMessage = this.submitMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // componentDidMount() {
    
  // }

  registerHandler(onMessageReceived) {
    socket.on('message', onMessageReceived)
  }

  unregisterHandler() {
    socket.off('message')
  }

  login(userId, cb) {
    socket.emit('login', userId, cb)
  }

  submitMessage(e, cb) {
    e.preventDefault();
    this.setState({ author: this.props.userId })
    console.log("sending message", this.state.body);
    socket.emit('message', { body: this.state.body }, cb)
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
