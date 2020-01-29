import React from 'react';

class MessageByUser extends React.Component {

    render() {
        return (
            <div class="container-fluid">
                <h5 className="mb-3">Message</h5>
                <div className="w-50 p-3 bg-info">
                    <div className="d-none"> Id: {this.props.message.id}</div>
                    <p className="text-light">Content : {this.props.message.content}</p>
                    Author: {this.props.message.autor}
                </div>
            </div>
        )
    }
}

export default MessageByUser;
