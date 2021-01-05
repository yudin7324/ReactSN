import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} like={p.likes} />)
  
  return (
    <div>
      <div className={s.postTitle}>Posts</div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
