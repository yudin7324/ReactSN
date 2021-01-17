import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './compoents/Header/Header';
import Navbar from './compoents/Navbar/Navbar';
import News from './compoents/News/News';
import Music from './compoents/Music/Music';
import Settings from './compoents/Settings/Settings';
import ProfileContainer from './compoents/Profile/ProfileContainer';
import DialogsContainer from './compoents/Dialogs/DialogsContainer';
import UsersContainer from "./compoents/Users/UsersContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar state={props.state} />
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer />} />
                <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
        </div>
    );
}

export default App;
