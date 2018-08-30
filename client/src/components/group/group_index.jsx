import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchAllGroups();
  }

  render() {
    const { userGroups } = this.props;
    return (
      <ul>
        {userGroups.forEach(group => (
          <GroupIndexItem
            key={group._id}
            group={group}
          />
        ))}
      </ul>
    );
  }
}

export default GroupIndex;