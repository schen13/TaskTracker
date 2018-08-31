import React from 'react';

class GroupIndexItem extends React.Component {

  render() {
    return (
      <div className="group-index-item" onClick={this.props.openGroupModal}>
        {this.props.group.name}
      </div>
    );
  }
}

export default GroupIndexItem;