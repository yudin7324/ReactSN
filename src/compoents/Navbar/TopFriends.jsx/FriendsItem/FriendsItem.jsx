import React from "react";
import Avatar from "../../../Avatar/Avatar";
import s from "./FriendsItem.module.css"

const FriendsItem = (props) => {
    return (
        <div className={s.item}>
            <Avatar/>
            {props.name}
        </div>
    )
}

export default FriendsItem;