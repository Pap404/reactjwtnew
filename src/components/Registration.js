import React from "react";
import { getRegistration } from "../action";
import { connect } from "react-redux";

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
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <h1>SIGN UP</h1>
                    <label>Username</label>
                    <input
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    /><br />
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    /><br />
                    <button>
                        Sign up
                    </button>
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