import React from "react"; 
import { withAuth } from "./context/AuthContext";
import PropTypes from 'prop-types';

class Profile extends React.Component {
    static propTypes = {
        navigate: PropTypes.func,
        logOut: PropTypes.func,
    }

    logOut = () => {
        this.props.logOut();
        this.props.navigate('map');
    }

    render () {
        return (
            <>
                <h1>Profile</h1>
                <div><button onClick={this.logOut}>Выйти</button></div>
            </>
        );
        
    }
}

export default withAuth(Profile);