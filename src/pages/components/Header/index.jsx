import React from "react";

class Header extends React.Component {
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
                        <li className="topMenuItem">
                            <button onClick={() => { this.props.navigate("profile"); }}>
                                Профиль
                            </button>
                        </li>
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
                    </ul>
                </nav>
        </header>

        );
    }
}

export default Header;
