import React from 'react';

class GroupIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeChatModal();
    this.props.openGroupModal(this.props.group._id);
  }

  render() {
    return (
      <div className="group-index-item" onClick={this.handleClick}>
        {this.props.group.name}
      </div>
    );
  }
}

export default GroupIndexItem;