import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d =>  
        <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElements = props.state.messages.map( m => 
        <Message message={m.message}/>
    );
    // Textarea element =========================== 
    let sentMessageElement = React.createRef();

    let sentMessage = () => {
        let message = sentMessageElement.current.value;
        alert(message);
    }

    return (
        <div >
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.textarea}>
                        <textarea ref={sentMessageElement}></textarea>
                        <button onClick={sentMessage}>sent message</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
};

export default Dialogs;