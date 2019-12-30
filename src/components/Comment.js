import React from 'react';
import { connect } from "react-redux";

class Comment extends React.Component {


    render() {
        return (
            <div className="App">
                <h5>Comment</h5>
                {this.props.comment.id}
                {/*{this.props.comment.comment}*/}
                {/*{this.props.comment.commentator}*/}
            </div>
        )
    }
}

export default Comment;