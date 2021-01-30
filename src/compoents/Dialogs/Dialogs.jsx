import React from 'react';
import { Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../common/FormsControls/FormsControls'
import { maxLengthCreator } from '../../utils/validators/validators';
import { required } from '../../utils/validators/validators';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem name={d.name} key={d.id} id={d.id} />
    ));
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id} />);

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/Login"}/>; 

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>{dialogsElements}</div>
                <div className={s.messages}>
                    {messagesElements}
                    <div >
                        <AddMessageFormRedux onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"} name={"newMessageBody"} component={Textarea} validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>sent message</button>
            </div>
        </form>
    ) 
}

const AddMessageFormRedux = reduxForm ({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;
