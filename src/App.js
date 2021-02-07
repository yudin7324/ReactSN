import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './compoents/Navbar/Navbar';
import News from './compoents/News/News';
import Music from './compoents/Music/Music';
import Settings from './compoents/Settings/Settings';
import ProfileContainer from './compoents/Profile/ProfileContainer';
import DialogsContainer from './compoents/Dialogs/DialogsContainer';
import UsersContainer from './compoents/Users/UsersContainer';
import HeaderContainer from './compoents/Header/HeaderContainer';
import Login from './compoents/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './compoents/common/preloader/preloader';

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar state={this.props.state} />
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/settings" render={() => <Settings />} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);
