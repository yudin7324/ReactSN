import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./compoents/Dialogs/Dialogs";
import Header from "./compoents/Header/Header";
import Navbar from "./compoents/Navbar/Navbar";
import Profile from "./compoents/Profile/Profile";
import News from "./compoents/News/News";
import Music from "./compoents/Music/Music";
import Settings from "./compoents/Settings/Settings";


// Компонет APP. компонет главной страницы
function App(props) {


  //Переменные для присваивания props чтобы можно было поместить в атрибут render
  let dialogsComponent = () => 
      <Dialogs 
        state={props.state.dialogsPage}
        store={props.store}
        />;
  let profileComponent = () => 
      <Profile 
        profilePage={props.state.profilePage}
        dispatch={props.dispatch}
      />;

  //Тело функции с разметкой главной страницы
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state}/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={dialogsComponent}/>
          <Route path="/profile" render={profileComponent}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
        </div>    
      </div>
  );
}

export default App;
