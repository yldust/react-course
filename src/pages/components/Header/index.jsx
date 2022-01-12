import React from "react";
import PropTypes from 'prop-types';
//import { withAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render () {
        return (
            <header>
               
                <nav>
                    <ul>
                        <li className="topMenuItem">
                            <Link to="/">Карта </Link>
                        </li>

                        <li className="topMenuItem">
                            <Link to="/login">Войти</Link>
                        </li>

                        <li className="topMenuItem">
                            <Link to="/registration">Зарегистрироваться</Link>
                        </li>

                        <li className="topMenuItem">
                            <Link to="/profile">Profile </Link>
                        </li>
                    </ul>
                </nav>
        </header>

        );
    }
}

export default Header;
