import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div>
      <div className={s.profile}>
        <img
          src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
          alt=""
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
