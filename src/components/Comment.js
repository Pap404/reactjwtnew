import React from 'react';

class Comment extends React.Component {

    render() {
        return (
            <div className="App">
                <br/>Comment id: {this.props.comment.id}
                <br/>Comment: {this.props.comment.comment}
                <br/>Commentator: {this.props.comment.commentator}
            </div>
        )
    }
}

export default Comment;