import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://i.insider.com/5f341b9e5fa9a45644447e89?width=700"
        alt="avatar"
      />
      {props.message}
      <div>
        <button className={s.postBtn}>{props.like} Like</button>
      </div>
    </div>
  );
};

export default Post;
