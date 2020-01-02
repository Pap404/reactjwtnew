import React from 'react';
import { connect } from "react-redux";
import { getAllMessage } from "../action";
import Message from "./Message";

class User extends React.Component {

    componentDidMount() {
         this.props.getAllMess();
    }

    render() {
        return (
                <div className="App">
                        <h1>CONTENT FOR USER</h1>
                    <h1>
                        {this.props.message.map(m => <Message key={m.id} message={m} />)}
                    </h1>
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
