import React from "react";
//import { withAuth } from "./context/AuthContext";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {LoginForm} from "./LoginForm";

class Login extends React.Component {
    static propTypes = {
        isLoggedIn:  PropTypes.bool
    }

    render () {
        return (
            <>
                {
                    this.props.isLoggedIn ? (
                        <p>You are logged in <Link to="/profile">Go to profile</Link></p>
                    ) : (
                        <LoginForm />
                    )
                }
            </>
        );
    }
}

export default connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    null
)(Login);