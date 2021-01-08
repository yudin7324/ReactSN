import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import s from "./TopFriends.module.css"

const TopFriends = (props) => {
    debugger;

    let friendsElements = props.state.map( f =>  
        <FriendsItem name={f.name} id={f.id}/>    
    ); 
  
    
    return (
        <div>
            <h2 className={s.title}>Friends</h2>
            <div className={s.wrapper}>
                {friendsElements}
            </div>
        </div>
    );
}

export default TopFriends;