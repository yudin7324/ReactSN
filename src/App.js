import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./compoents/Dialogs/Dialogs";
import Header from "./compoents/Header/Header";
import Navbar from "./compoents/Navbar/Navbar";
import Profile from "./compoents/Profile/Profile";
import News from "./compoents/News/News";
import Music from "./compoents/Music/Music";
import Settings from "./compoents/Settings/Settings";


function App(props) {

  let dialogsComponent = () => 
      <Dialogs 
        dialogs={props.dialogs} 
        messages={props.messages}
        />;
  let profileComponent = () => 
      <Profile 
        posts={props.posts}
      />;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.friends}/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={dialogsComponent}/>
          <Route path="/profile" render={profileComponent}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
        </div>    
      </div>
    </BrowserRouter>
  );
}

export default App;
