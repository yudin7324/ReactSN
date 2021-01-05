import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from './redux/state';


ReactDOM.render(<App 
    dialogs={state.dialogsPage.dialogs} 
    messages={state.dialogsPage.messages} 
    posts={state.profilePage.posts}
    friends={state.topFriends.friends}/>, 
document.getElementById("root"));
