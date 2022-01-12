import React from "react"; 
//import { withAuth } from "./context/AuthContext";
import  {connect} from "react-redux";
import PropTypes from 'prop-types';
import {logOut} from "../actions";

class Profile extends React.Component {
    static propTypes = {
        logOut: PropTypes.func,
    }

    unauthenticate = (event) => {
        event.preventDefault();
        this.props.logOut();
    };

    render () {
        return (
            <>
                <h1>Profile</h1>
                <div><button onClick={this.unauthenticate}>Log out</button></div>
            </>
        );
        
    }
}

export default connect(
    null,
    {logOut}
)(Profile);