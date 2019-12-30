import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';
import { createBrowserHistory } from 'history';
import App from "./App";
import {composeWithDevTools} from "redux-devtools-extension";

const loggerMiddleware = createLogger();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware,
    loggerMiddleware)));

 export const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
