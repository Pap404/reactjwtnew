import React from "react";
import {getLogin, getUserSuccess} from "../action";
import { connect } from "react-redux";
import { history} from "../index";

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getLogin(this.state)
             .then( () => {
                 getUserSuccess();
                 history.push('/user')
             }
             );
    };

    render() {
            return (
                <div className="App">
                    <form onSubmit={this.handleSubmit}>
                        <h1>LOGIN</h1>
                        <input
                            type='text'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <input
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <button>
                            Login
                        </button>
                    </form>
                </div>
             )
        }
     }
// }

const mapDispatchToProps = (dispatch) => ({
    getLogin: userInfo => dispatch(getLogin(userInfo))
});

export default connect(
    null,
    mapDispatchToProps
)(Login);
