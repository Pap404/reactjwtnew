import React from 'react';
import Comment from "./Comment";
import {getAllComments} from "../action";
import {connect} from "react-redux";

class Message extends React.Component {

    componentDidMount() {
        this.props.getAllCom();
    }

    render() {
        return (
            <div className="App">
                <br/><i>Message </i>
                       <br/> <font size={4}>Id: {this.props.message.id}
                       <br/>Content : {this.props.message.content}
                       <br/>Author: {this.props.message.autor}
                       <br/>{this.props.message.comment.map(c => <Comment key={c.id} comment={c} />)}
            </font>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAllCom: () => dispatch(getAllComments())
});

const mapStateToProps = (state) => {
    return {
        comment: state.comment
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Message);
