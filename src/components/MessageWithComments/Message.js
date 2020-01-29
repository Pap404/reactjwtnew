import React from 'react';
import Comment from "./Comment";
import {connect} from "react-redux";
import CreateComment from "../CreateComponents/CreateComment";

class Message extends React.Component {

    render() {
        return (
                <div class="container-fluid">
                    <h5 className="mb-3">Message</h5>
                    <div className="w-50 p-3 bg-info">
                <div className="d-none"> Id: {this.props.message.id}</div>
                <p className="text-light">Content : {this.props.message.content}</p>
                       Author: {this.props.message.autor}
                </div>
                       <div className="d-flex flex-column justify-content-center">{this.props.message.comment.map(c =>
                            <Comment key={c.id} comment={c} />)}

                    <CreateComment id={this.props.message.id}/>
            </div>
                </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        comment: state.comment
    }
};

export default connect(
    mapStateToProps,
    null
)(Message);
