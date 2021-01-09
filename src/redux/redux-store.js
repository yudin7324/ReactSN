import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import topFriendsReducer from './topFriends-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    topFriends: topFriendsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
