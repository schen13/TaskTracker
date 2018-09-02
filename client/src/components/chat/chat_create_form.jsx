import React from 'react'

class ChatCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      participants: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  }

  // handleParticipants(e) {
  //   e.preventDefault();
  //   this.setState({
  //     participants: [...this.state.participants, e.currentTarget.value]
  //   })
  // }

  handleSubmit(e){
    e.preventDefault();
    const user1 = Math.floor(Math.random() * 15);
    const user2 = Math.floor(Math.random() * 15);
    this.setState(
      {
        participants: [
          ...this.state.participants,
          this.props.currentUser.id,
          this.props.users[user1].id,
          this.props.users[user2].id
        ]
      },
      () => this.props.createChat(this.state)
    );
  };

  render() {
    return (
      <div>
        <form>

        </form>

        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.name} />

            <button>Create Chat</button>
        </form>

      </div>
    )
  }
}

export default ChatCreate;