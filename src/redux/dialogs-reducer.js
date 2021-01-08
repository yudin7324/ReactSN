
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state;

        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE});
  
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;