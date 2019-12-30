import React from 'react';
import Login from "./components/Login";
import Registration from "./components/Registration";
import User from "./components/User";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./index";
import {PrivateRoute} from "./router/PrivateRoute";

class App extends React.Component {
render() {
    return (
        <div className="App">
            <Router history={history}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <PrivateRoute path="/user" component={User} />
            </Switch>
            </Router>
        </div>
    )
}
}

export default App;
