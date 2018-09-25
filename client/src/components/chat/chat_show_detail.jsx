import React from 'react';

const ChatShowDetail = props => (
  <div className="chat-show-header">
    <div className="chat-details">
      <h2 className="chat-name">{props.chatName}</h2>
      <ul className="chat-users">
        {props.users.map(user => (
            <li key={user.username}>
              <h4>{user.username}</h4>
              <h4>{user.fName} {user.lName}</h4>
            </li>
          )
        )}
      </ul>
    </div>

    <button
      className="close-chat-modal-button"
      onClick={props.closeChatModal}>
      <i className="fas fa-times"></i>
    </button>
  </div>
)

export default ChatShowDetail;