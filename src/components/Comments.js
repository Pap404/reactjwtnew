import React from 'react';
import { connect } from "react-redux";
import {getAllComments, getAllMessage} from "../action";

class Comments extends React.Component {

    componentDidMount() {
        this.props.getAllComm();
    }

    render() {
        return (
            <div>
                {this.props.comments.map(c => console.log(c))}
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    getAllComm: () => dispatch(getAllComments())
});

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);