# Welcome to TaskTracker!

TaskTracker is a team communication application that unifies team objectives and improves workflow.

### [Live Demo](https://task-trackr.herokuapp.com/)

### Features

+ Full CRUD functionalities for Users, Groups, Tasks, and Messages. Users can also designate tasks to other users in their groups.
+ Anonymous messaging to call out people that aren't getting things done.
+ Tracking for each group member to see their completed and upcoming tasks.

### Technologies
TaskTracker is a collaborative project utilizing the MERN stack (MongoDB, Express, React, Node.js).

Other technologies used:
+ Websockets was utilized to implement the messaging service. 
+ The library Materialize rendered frontend styling and modal views.
+ Axios allowed for API calls for communication between frontend and backend.

### Screenshots

![Create Group](https://github.com/schen13/TaskTracker/blob/master/docs/wireframe1.png)
![Create Task](https://github.com/schen13/TaskTracker/blob/master/docs/wireframe2.png)

### Technical Info

#### Chat Message Rendering
Chat messages are handled and rendered in different ways, depending on whether they are: your own or someone else's messages, anonymous or public, or part of a group of messages from the same person.

```js
renderMessages() {
    const { users } = this.props;
    const { messages } = this.state;
    if (!messages) return;

    let conversation = [];
    let authorName;
    let prevId = "";
    for (let i = messages.length - 1; i >= 0; i--) {
      let author = users.filter(user => user.id === messages[i].author);
      authorName = author[0].username;

      if (messages[i].author === this.props.currentUser.id) {
        // message sent by current user
        conversation.unshift(
          <li className="own-message" key={messages[i]._id}>
            <div className="message">
              <span>{messages[i].body}</span>
            </div>
          </li>
        );
        prevId = "";
      } else if (messages[i].anon) {
        // message sent anonymously so username is set to anon
        conversation.unshift(
          <li className="other-message" key={messages[i]._id}>
            <div>
              <i id="pf" className="fas fa-question-circle" />
            </div>
            <div className="message-box">
              <div className="message">
                <span>{messages[i].body}</span>
              </div>
              <div className="author">Anonymous</div>
            </div>
          </li>
        );
        prevId = "";
      } else if (messages[i].author === prevId) {
        // messages sent by previous message sender so username and picture arent shown again
        conversation.unshift(
          <li className="other-message" key={messages[i]._id}>
            <div className="message-box" id="pf-placeholder">
              <div className="message">
                <span>{messages[i].body}</span>
              </div>
            </div>
          </li>
        );
      } else {
        conversation.unshift(
          <li className="other-message" key={messages[i]._id}>
            <div>
              <i id="pf" className="fas fa-user-circle" />
            </div>
            <div className="message-box">
              <div className="message">
                <span>{messages[i].body}</span>
              </div>
              <div className="author">{authorName}</div>
            </div>
          </li>
        );
        prevId = messages[i].author;
      }
    }

    return conversation;
  }
```

#### Task Assignment
Tasks must be assigned to a user and a group. Both of these are filtered such that the available options in the task creation form are relevant (e.g. only groups that the current user belongs to) and sorted alphabetically.

```js
const mapStateToProps = (state) => ({
  users: Object.values(state.entities.users)
    .filter(user => user.username)
    .sort((a, b) => {
      if (a.username < b.username)
        return -1;
      else
        return 1;
    }),
  groups: Object.values(state.entities.groups)
    .filter(group => group.name)
    .sort((a, b) => {
      if (a.name < b.name)
        return -1;
      else
        return 1;
    }),
  currentUserId: state.session.id
});


let { users, groups, currentUserId } = this.props;
    let userOptions = [];
    users.forEach(user => {
      userOptions.push({
        label: user.username,
        value: user.id
      });
    });

    let groupOptions = [];
    const groupFilter = selectUserGroups(currentUserId, groups);
    groupFilter.forEach(group => {
      groupOptions.push({
        label: group.name,
        value: group._id
      });
    });
```


## Future Features

+ Transition to React Native mobile application
+ Image uploading for Users, Groups, Messaging
+ Task Statistics
+ Task Penalties
