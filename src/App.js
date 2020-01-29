import React from 'react';
import Login from "./components/Login";
import Registration from "./components/Registration";
import User from "./components/MessageWithComments/User";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./index";
import {PrivateRoute} from "./router/PrivateRoute";
import mushroooom from './mushroooom.png';
import UsersMessage from "./components/MessageByUsername/UsersMessage";


class App extends React.Component {
render() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="#">
                    <img src={mushroooom} style={{width:64}} />
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/registration">Registration</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/user">Content</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/user-message">User's Message</a>
                    </li>
                </ul>
            </nav>
            <Router history={history}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <PrivateRoute path="/user" component={User} />
                <PrivateRoute path="/user-message" component={UsersMessage} />
            </Switch>
            </Router>
        </div>
    )
}
}

export default App;
