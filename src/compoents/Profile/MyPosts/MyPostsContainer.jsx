// import React from 'react';
import { connect } from 'react-redux';
import { updateNewTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
