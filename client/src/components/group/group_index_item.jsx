import React from 'react';

class GroupIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>{this.props.group.name}</div>);
  }
}

export default GroupIndexItem;