import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likes: 15 },
        { id: 2, message: "It's my first post", likes: 20 },
        { id: 2, message: 'da da da', likes: 20 },
        { id: 2, message: 'bla bla bla', likes: 20 },
        { id: 2, message: 'hello world', likes: 20 },
    ],
    newPostText: 'hello samurai',
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response.data));
    });
} 

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    
    profileAPI.updateStatus(status)
    .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;
