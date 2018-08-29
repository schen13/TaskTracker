```js
{
  entities: {
    users: {
      1: {
        id: 1,
        fname: "Steven",
        lname: "Chen",
        profileImageUrl: "image.url",
        username: "schen13",
        email: "steven.chen313@gmail.com",
        groups: [1, 3, 5],
        tasks: [2, 7, 8],
        chats: [4, 8, 12]
      }
    },

    groups: {
      1: {
        id: 1, 
        groupName: "Baeside Village",
        groupImageUrl: "groupimage.url",
        users: [1, 2, 3],
      }
    },

    tasks: {
      1: {
        id: 1,
        taskName: “Bathroom Duty”,
        description: “Clean the sink, toilet, shower”,
        users: [1, 4],
        deadline: 9/3/2018,
        estTime: 30,
        completed: false,
      }
    },

    chats: {
      1: {
        id: 1,
        chatName: "Trap House",
        participants: [2, 3, 4]
      }
    },

    messages: {
      1: {
        id: 1,
        chatId: 1,
        body: "Do your tasks this week!",
        author: 2,
        anon: false
      },
      2: {
        id: 2,
        chatId: 1,
        body: "I’ll get to them on Thursday",
        author: 3,
        anon: false
      }
    }
  },

  ui: {
    loading: true/false,
    chatModal: true/false,
  },

  errors: {
    session: ["Incorrect username/password combination"],
    tasks: ["Task name cannot be blank"]
  },

  session: {
    id: 1,
    username : “schen13”
  }
}
```