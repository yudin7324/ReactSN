import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog}>
                ilya
            </div>
            <div className={s.dialog + " " + s.active} >
                Dima
            </div>
            <div className={s.dialog}>
                Kolya
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>
                hello world
            </div>
            <div className={s.message}>
                how are you?
            </div>
            <div className={s.message}>
                i am fine
            </div>
        </div>
    </div>
  ) 
};


export default Dialogs;