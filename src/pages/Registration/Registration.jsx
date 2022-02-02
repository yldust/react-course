import React from "react";
//import { withAuth } from "./context/AuthContext";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {register} from "../../modules/Auth";
import {Link} from "react-router-dom";
import {RegistrationForm} from "./RegistrationForm";

class Registration extends React.Component {
    render () {

        return (
            <>
                {
                this.props.isLoggedIn ? (
                    <p>You are logged in <Link to="/profile">Go to profile</Link></p>
                ) : (
               <RegistrationForm />
            )
            }
        </>
        );
    }
}

export default connect(
    (state) => ({
        isLoggedIn: state.auth.isLoggedIn,
        authToken: state.auth.authToken
    }),
    {register}
)
(Registration);