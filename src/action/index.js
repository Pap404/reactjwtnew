import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

export const login = (loginRequest) => {
    return {
        type: 'LOGIN',
        payload: loginRequest
    }
};

export const getLogin = (loginRequest) => {
    return (dispatch) => {
        return axios.post('https://fluxjwt-app.herokuapp.com/api/security/login', loginRequest)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                dispatch(login(response.data.token))
            })
    }
};

export const registration = (registrationRequest) => {
    return {
        type: 'REGISTRATION',
        payload: registrationRequest
    }
};

export const getRegistration = (registrationRequest) => {
    return (dispatch) => {
        return axios.post('https://fluxjwt-app.herokuapp.com/api/security/registration', registrationRequest)
            .then(response => {
                localStorage.setItem('user', 'data');
                dispatch(registration(response.data.user))
            })
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
                dispatch(getUser(response.data))
            })
    }
};

export const getMessages = (message) => {
    return {
        type: 'MESSAGE',
        payload: message
    }
};

export const getAllMessage = () => {
    return (dispatch) => {
        return axios.get('https://fluxjwt-app.herokuapp.com/api/message', {
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(getMessages(response.data))
            })
            .catch(e => console.log(e))
    }
};

export const getComments = (comments) => {
    return {
        type: 'COMMENTS',
        payload: comments
    }
};

export const getAllComments = () => {
    return (dispatch) => {
        return axios.get('https://fluxjwt-app.herokuapp.com/api/comment', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                dispatch(getComments(response.data))
            })
    }
};

export const createMessage = (message) => {
    return {
        type: 'CREATE_MESSAGE',
        payload: message
    }
};

export const createMessageSuccess = (message) => {
    return (dispatch) => {
        return axios.post('https://fluxjwt-app.herokuapp.com/api/message/user', message,{ headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }})
            .then(response => {
                dispatch(createMessage(response.data))
            })
    }
};

export const createComment = (id, comment) => {
    return {
        type: 'CREATE_COMMENT',
        payload: comment,
        id: id
    }
};

export const createCommentSuccess = (id, comment) => {
  return (dispatch) => {
      return axios.post(`https://fluxjwt-app.herokuapp.com/api/comment/user/${id}`, comment,
          { headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
          }})
          .then(response => {
              dispatch(createComment(id, response.data))
          })
  }
};

export const getUserMessage =  (message, username) => {
    return {
        type: 'GET_MESSAGE_BY_USERNAME',
        payload: message,
        username: username
    }
};

export const getMessageByUsername = (username, message) => {
    return (dispatch) => {
        return axios.get(`https://fluxjwt-app.herokuapp.com/api/message/user/${username}`, message,
            { headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }})
            .then(response => {
                console.log(response.data);
                dispatch(getUserMessage(username, response.data))
            })
    }
};