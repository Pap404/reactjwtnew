import React from 'react';
import {createMessageSuccess} from "../../action";
import { connect } from "react-redux";
import paper from "../../paper.png";

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
           <div class="form-group">
               <form class="position-fixed" style={{bottom:10, left:5}}
                     onSubmit={this.handleSubmit}>
                   <input name='content'
                       type='text'
                       placeholder='Enter message'
                       onChange={this.handleChange}
                       value={this.state.content}
                   />
                   <input type="image" src={paper} height="23"/>
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