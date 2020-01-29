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
                <div className="mt-2">
                    <h2>LOGIN</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group col-4">
                            <label>Username: </label>
                        <input
                            class="form-control"
                            type='text'
                            name='username'
                            placeholder='Enter username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                            <label>Password: </label>
                        <input
                            class="form-control"
                            type='password'
                            name='password'
                            placeholder='Enter password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <br/><button className="btn btn-block btn-primary">
                            Login
                        </button>
                        </div>
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
