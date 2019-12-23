import React from 'react';
import { connect } from "react-redux";
import {getUserSuccess} from "../action";

class User extends React.Component {

    render() {
        return(
            <div>
                Content for user
            </div>
        )
    }

//     componentDidMount() {
//         this.props.onUser();
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     onUser: () => {
//         dispatch(getUserSuccess())
//     }
// };
//
// export default connect(
//     null,
//     mapDispatchToProps
// )(User);
}
export default User;