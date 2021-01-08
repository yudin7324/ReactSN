import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./compoents/Header/Header";
import Navbar from "./compoents/Navbar/Navbar";
import Profile from "./compoents/Profile/Profile";
import News from "./compoents/News/News";
import Music from "./compoents/Music/Music";
import Settings from "./compoents/Settings/Settings";
import DialogsContainer from "./compoents/Dialogs/DialogsContainer";


// Компонет APP. компонет главной страницы
function App(props) {

  //Тело функции с разметкой главной страницы
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state}/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />}/>
          <Route path="/profile" render={() => <Profile />}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
        </div>    
      </div>
  );
}

export default App;
