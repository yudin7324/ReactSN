import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src="https://aldamusic.is/wp-content/uploads/2018/03/Spotify-Logo-White-1-1.png"
                alt="logo"
            />
            <div className={classes.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>    
                :<NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
};

export default Header;
