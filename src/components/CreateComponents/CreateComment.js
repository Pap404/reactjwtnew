import React from 'react';
import { connect } from "react-redux";
import {createCommentSuccess} from "../../action";
import paper from "../../paper.png";

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
            <div class="text-right">
              <form onSubmit={this.handleSubmit}>
                  <input name='comment'
                         type='text'
                         placeholder='Enter comment'
                         onChange={this.handleChange}
                         value={this.state.comment}
                  />
                  <input type="image" src={paper} height="23"/>
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