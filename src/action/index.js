import axios from 'axios';

export const login = (loginRequest) => {
    return {
        type: 'LOGIN',
        payload: loginRequest
    }
};

export const registration = (registrationRequest) => {
    return {
        type: 'REGISTRATION',
        payload: registrationRequest
    }
};

export const getUser = (user) => {
    return {
        type: 'USER',
        payload: user
    }
};

export const getUserSuccess = () => {
    return (dispatch) => {
        return axios.get('https://fluxjwt-app.herokuapp.com/api/users/user', {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data);
                dispatch(getUser(response.data))
            })
    }
};

export const getLogin = (loginRequest) => {
    return (dispatch) => {
        return axios.post('https://fluxjwt-app.herokuapp.com/api/security/login', loginRequest)
            .then(response => {
                console.log(response.data.token);
                localStorage.setItem('token', response.data.token);
                dispatch(login(response.data.token))
            })
    }
};

export const getRegistration = (registrationRequest) => {
    return (dispatch) => {
        return axios.post('https://fluxjwt-app.herokuapp.com/api/security/registration', registrationRequest)
            .then(response => {
                console.log(response.data.token);
                localStorage.setItem('user', 'data');
                dispatch(registration(response.data.user))
            })
    }
};
