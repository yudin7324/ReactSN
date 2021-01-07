const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
        this._callSubscriber = observer;  // наблюдатель observer/ по этому же патерну работает addEventListener
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0,
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if(action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 7, message: body});
            this._callSubscriber(this._state);
        }
    }, // {type: 'ADD-POST'}

}

export const addPostActionCreator = () => ({ type: ADD_POST});
  
export const updateNewTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE});
  
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;
window.store = store;