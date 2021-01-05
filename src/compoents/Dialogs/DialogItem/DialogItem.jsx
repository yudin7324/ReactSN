import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../../Avatar/Avatar";
import s from "./DialogItem.module.css";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return(
        <div>
            <div>
                <NavLink className={s.dialog} to={path}>
                    <Avatar/>
                    {props.name}
                </NavLink> 
            </div>
        </div>
    )
}

export default DialogItem;