import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { syncHistoryWithStore } from 'react-router-redux';
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import User from "./components/User";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
                <Route exact path='/login' component={Login} />
                <Route exact path='/registration' component={Registration} />
                <Route exact path='/resource/user' component={User} />
        </BrowserRouter>
    <App />
    </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
