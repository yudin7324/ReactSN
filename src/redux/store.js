import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import topFriendsReducer from "./topFriends-reducer";


let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1,message: 'Hi, how are you?',likes: 15},
                {id: 2,message: 'It\'s my first post',likes: 20},
                {id: 2,message: 'da da da',likes: 20},
                {id: 2,message: 'bla bla bla',likes: 20},
                {id: 2,message: 'hello world',likes: 20},
            ],
            newPostText: 'hello samurai'
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
            newMessageBody: ""
        },
        topFriends: {
            friends: [
                {id: 1,name: 'Ilya'},
                {id: 2,name: 'Olya'},
                {id: 3,name: 'Sveta'},
            ]
        },
    },

    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель observer/ по этому же патерну работает addEventListener
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.topFriends = topFriendsReducer(this._state.topFriends, action);

        this._callSubscriber(this._state);

    }, // {type: 'ADD-POST'}

}

export default store;
window.store = store;