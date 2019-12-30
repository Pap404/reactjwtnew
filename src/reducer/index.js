import { combineReducers } from 'redux';
import LoginReducer from "./LoginReducer";
import RegistrationReducer from "./RegistrationReducer";
import message from "./message";
import comments from "./comments";

export default combineReducers({
    LoginReducer: LoginReducer,
    RegistrationReducer: RegistrationReducer,
    message: message,
    comments: comments
});