import React from "react";
//import { withAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render () {
        return (
            <header>
               
                <nav>
                    <ul>
                        <li className="topMenuItem">
                            <Link to="/">Логин </Link>
                        </li>

                        <li className="topMenuItem">
                            <Link to="/registration">Зарегистрироваться</Link>
                        </li>

                        <li className="topMenuItem">
                            <Link to="/map">Карта </Link>
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
