import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://aldamusic.is/wp-content/uploads/2018/03/Spotify-Logo-White-1-1.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
