import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import s from "./TopFriends.module.css"

const TopFriends = (props) => {
   
    let friendsElements = props.state.friends.map( f =>  
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