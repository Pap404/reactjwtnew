import React from 'react';

class Comment extends React.Component {

    render() {
        return (
            <div className="text-right">
                <h5 className="mb-2">Comment</h5>
            <div className="p-3 w-50 bg-secondary float-right">
                    <div className="d-none"> Comment id: {this.props.comment.id}</div>
                    <p className="text-light"> Comment: {this.props.comment.comment}</p>
              Commentator: {this.props.comment.commentator}
                </div>
            </div>
        )
    }
}

export default Comment;