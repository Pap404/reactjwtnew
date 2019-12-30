import React from 'react';
import { connect } from "react-redux";
import { getAllMessage } from "../action";
import Message from "./Message";
import Comments from "./Comments";

class User extends React.Component {

    componentDidMount() {
         this.props.getAllMess();
    }

    handleGet = (event) => {
        event.preventDefault();
    };

    render() {
        // const m = this.props.message;
        return (
                <div className="App">
                        <h1>CONTENT FOR USER</h1>
                        {/*<button onClick={this.handleGet}>*/}
                        {/*    MESSAGES*/}
                        {/*</button>*/}
                    <h1>
                        {this.props.message.map(m => <Message key={m.id} message={m} />)}
                    </h1>
                    <Comments />
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
