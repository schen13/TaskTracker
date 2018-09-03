import React from 'react';
import GroupIndexContainer from '../group/group_index_container';
import ChatIndexContainer from '../chat/chat_index_container';
import TaskIndexContainer from '../task/task_index_container';
import GroupModal from '../modal/group_modal';
import ChatModal from '../modal/chat_modal';
import NavBarContainer from '../navbar/navbar_container';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchSingleUser(this.props.userId);
    this.props.fetchGroupUsers(this.props.userId);
  }

  render() {
    const user = this.props.users[this.props.userId];
    if (!user) return null;
    return (

      <div className="home-page">
        <header className="home-page-header">
          <NavBarContainer />
        </header>
        <main className="home-page-content">
          <GroupIndexContainer user={user} />
          <TaskIndexContainer />
          <ChatIndexContainer />
          <GroupModal />
          <ChatModal />
        </main>
      </div>
    );
  }
}

export default HomePage;