import React from 'react';
import GroupIndexContainer from '../group/group_index_container';
import ChatIndexContainer from '../chat/chat_index_container';
import TaskIndexContainer from '../task/task_index_container';
import GroupModal from '../modal/group_modal';
class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchSingleUser(this.props.userId);
  }

  render() {
    const user = this.props.users[this.props.userId];
    if (!user) return null;
    return (

      <div className="home-page">
        <GroupIndexContainer user={user} />
        <TaskIndexContainer />
        <ChatIndexContainer />
        <GroupModal />
      </div>
    );
  }
}

export default HomePage;