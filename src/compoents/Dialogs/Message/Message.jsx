import React from "react";
import Avatar from "../../Avatar/Avatar";
import s from "./Message.module.css";


const Message = (props) => {
    return(
        <div className={s.message}>
            <Avatar/>
            {props.message}
        </div>
    )
}


export default Message;