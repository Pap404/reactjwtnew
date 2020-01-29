import React from 'react';
import { connect } from "react-redux";
import { getAllMessage } from "../../action";
import Message from "./Message";
import CreateMessage from "../CreateComponents/CreateMessage";

class User extends React.Component {

    componentDidMount() {
         this.props.getAllMess();
    }

    render() {
        return (
                <div>
                        <h1 className="text-center">CONTENT FOR USER</h1>
                    <CreateMessage />
                        {this.props.message.map(m => <Message key={m.id} message={m} />)}
                    </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAllMess: () => dispatch(getAllMessage())
});

const mapStateToProps = (state) => {
        return {
        message: state.message.message
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
