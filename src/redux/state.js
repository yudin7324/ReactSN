

let state = {

    profilePage: {
        posts: [
            {id: 1,message: 'Hi, how are you?',likes: 15},
            {id: 2,message: 'Its my first post',likes: 20},
            {id: 2,message: 'da da da',likes: 20},
            {id: 2,message: 'bla bla bla',likes: 20},
            {id: 2,message: 'hello world',likes: 20},
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1,name: 'Ilya'},
            {id: 2,name: 'Dima'},
            {id: 3,name: 'Kolya'},
            {id: 4,name: 'Sasha'},
            {id: 5,name: 'Olya'},
            {id: 6,name: 'Sveta'},
        ],
        messages: [
            {id: 1,message: 'Hello world'},
            {id: 2,message: 'Hi'},
            {id: 3,message: 'how are you?'},
            {id: 4,message: 'i am fine thanks'},
            {id: 5,message: 'Hello world!!!'},
            {id: 6,message: 'Hello guys'},
        ],
    },
    topFriends: {
        friends: [
            {id: 1,name: 'Ilya'},
            {id: 2,name: 'Olya'},
            {id: 3,name: 'Sveta'},
        ]
    },
};

export default state;