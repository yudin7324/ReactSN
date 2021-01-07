import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {updateNewTextActionCreator, addPostActionCreator} from "./../../../redux/state";



const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} like={p.likes} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewTextActionCreator(text);
    props.dispatch(action);
  }
  
  return ( 
    <div>
      <h3 className={s.postTitle}>Posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}; 

export default MyPosts;
