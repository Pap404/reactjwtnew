import { combineReducers } from 'redux';
import LoginReducer from "./LoginReducer";
import RegistrationReducer from "./RegistrationReducer";

export default combineReducers({
    LoginReducer: LoginReducer,
    RegistrationReducer: RegistrationReducer
});