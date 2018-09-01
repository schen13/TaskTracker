import React from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

class Socket extends React.Component {
  constructor(props) {
    super(props);

    this.sendSocketIO = this.sendSocketIO.bind(this);
  }

  sendSocketIO() {
    socket.emit('example_message', 'hello it works');
  }

  componentDidMount() {
    this.sendSocketIO();
  }

  render() {
    return(
      <div></div>
    )
  }

}

export default Socket;