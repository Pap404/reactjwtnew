import React from "react";
import {getRegistration, getUserSuccess} from "../action";
import { connect } from "react-redux";
import {history} from "../index";

class Registration extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getRegistration(this.state)
            .then( () => {
                    getUserSuccess();
                    history.push('/login')
                }
            );
    };

    render() {
        return (
            <div className="form-group col-4">
                <form class="align-baseline"
                      onSubmit={this.handleSubmit}>
                    <h2>SIGN UP</h2>
                    <div className="">
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
                        <br/><button className="btn btn-block btn-success">
                        Sign up
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getRegistration: userInfo => dispatch(getRegistration(userInfo))
});

export default connect(
    null,
    mapDispatchToProps
)(Registration);