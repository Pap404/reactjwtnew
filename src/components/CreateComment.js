import React from 'react';
import { connect } from "react-redux";
import {createCommentSuccess} from "../action";

class CreateComment extends React.Component {

    state = {
      comment: ''
    };

    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createComment(this.props.id, this.state);
    };

    render() {
        return (
            <div className="App">
              <form onSubmit={this.handleSubmit}>
                  <input name='comment'
                         type='text'
                         placeholder='Enter comment'
                         onChange={this.handleChange}
                         value={this.state.comment}
                  />
                  <button>Send</button>
              </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    createComment: (id, comment) => dispatch(createCommentSuccess(id, comment))
});

export default connect(
    null,
    mapDispatchToProps
)(CreateComment);