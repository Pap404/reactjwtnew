import React from 'react';
import {createMessageSuccess} from "../action";
import { connect } from "react-redux";

class CreateMessage extends React.Component{
    state = {
        content: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createMessage(this.state);
    };

   render() {
       return(
           <div className="App">
               <form onSubmit={this.handleSubmit}>
                   <input name='content'
                       type='text'
                       placeholder='Enter message'
                       onChange={this.handleChange}
                       value={this.state.content}
                   />
                   <button>Enter</button>
               </form>
           </div>
       )
   }
}

const mapDispatchToProps = (dispatch) => ({
    createMessage: message => dispatch(createMessageSuccess(message))
});

export default connect(
    null,
    mapDispatchToProps
)(CreateMessage);