import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

//Компонет диалога между людьми
const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map( m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;
    // Textarea element =========================== 

    //Передача информации в dispatch => store
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    //Возвращает разметку блока сообщений
    return (
        <div >
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.textarea}>
                        <textarea   value={newMessageBody}
                                    onChange={onNewMessageChange} 
                                    placeholder="Enter your message"/>
                        <button onClick={onSendMessageClick}>sent message</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
};

export default Dialogs;