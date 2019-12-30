import React from 'react';
import Comment from "./Comment";

class Message extends React.Component {


    render() {
        return (
            <div className="App">
                <h6>Messages</h6>
                    {this.props.message.id}
                    {this.props.message.content}
                    {this.props.message.autor}
                {/*{this.props.message.comment.map(m => m)}*/}
                {/*{this.props.message.comment.map(m => m)}*/}
            </div>
        )
    }
}

export default Message;
