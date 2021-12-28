import React from "react";
import PropTypes from 'prop-types';
import { withAuth } from "../../context/AuthContext";

class Header extends React.Component {
    static propTypes = {
        navigate: PropTypes.func,
        logOut: PropTypes.func,
        isLoggedIn: PropTypes.bool
    }

    logOut = () => {
        this.props.logOut();
        this.props.navigate('map');
    }

    render () {
        return (
            <header>
               
                <nav>
                    <ul>
                        <li className="topMenuItem">
                            <button onClick={() => { this.props.navigate("map"); }}>
                                Карта
                            </button>
                        </li>
                        {this.props.isLoggedIn ? (
                            <>
                                 <li className="topMenuItem">
                                    <button onClick={() => { this.props.navigate("profile"); }}>
                                        Профиль
                                    </button>
                                </li>
                                <li className="topMenuItem">
                                    <button onClick={this.logOut}>
                                        Выйти
                                    </button>
                                </li>    
                            </>
                        ) : (
                        <>
                            <li className="topMenuItem">
                                <button onClick={() => { this.props.navigate("login"); }}>
                                    Войти
                                </button>
                            </li>
                            <li className="topMenuItem">
                                <button onClick={() => { this.props.navigate("registration"); }}>
                                    Зарегистрироваться
                                </button>
                            </li>
                        </>
                        )}
                       
                    </ul>
                </nav>
        </header>

        );
    }
}

export default withAuth(Header);
