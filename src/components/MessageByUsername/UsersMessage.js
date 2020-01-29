import React from 'react';
import {connect} from "react-redux";
import {getMessageByUsername} from "../../action";
import MessageByUser from "./MessageByUser";

class UsersMessage extends React.Component {

    componentDidMount() {
        this.props.getUserMess();
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> User's messages</h1>
                {this.props.message.map(m => <MessageByUser key={m.id} message={m} />)}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserMess: () => dispatch(getMessageByUsername())
});

const mapStateToProps = (state) => {
    return {
        message: state.message.message
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersMessage);