import React from 'react';
import GroupIndexItem from './group_index_item';
import { selectUserGroups } from '../../reducers/selectors';

class GroupIndex extends React.Component {


  componentDidMount() {
    this.props.fetchAllGroups();
    this.props.fetchAllUsers();
  }

  render() {
    const { user, groups, openGroupModal, openGroupForm, closeChatModal } = this.props;
    const userGroups = selectUserGroups(user.id, groups);
    if (!userGroups) return null;
    return (
      <div className="group-index-container">
        <ul className="group-index">
          <div className="group-index-header">
            <h5>Your Groups</h5>
            <button className="open-group-create-button" onClick={openGroupForm}>
              <i className="fas fa-plus"></i>
            </button>
          </div>

          {userGroups.map(group => (
            <GroupIndexItem
              key={group._id}
              group={group}
              closeChatModal={closeChatModal}
              openGroupModal={openGroupModal}
            />
          ))}
        </ul>

      </div >
    );
  }
}

export default GroupIndex;