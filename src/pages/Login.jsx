import React from "react";
import { withAuth } from "./context/AuthContext";
import PropTypes from 'prop-types';

class Login extends React.Component {
    static propTypes = {
        navigate: PropTypes.func,
        logIn: PropTypes.func,
        isLoggedIn:  PropTypes.bool

    }

    state = {
        email: '',
        password: ''
    };

    goToProfile = () => {
        this.props.navigate("profile");
    }

    handleChangeInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.logIn(this.state.email, this.state.password);
    }

    render () {
        const { email, password } = this.state;
        return (
            <>
                {
                    this.props.isLoggedIn ? (
                        <p>You are logged in <button onClick={this.goToProfile}>Go to profile</button></p>
                    ) : (
                        <form onSubmit={this.handleSubmit}>
                            <h1>Войти</h1>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChangeInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">Пароль</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleChangeInput}
                                />
                            </div>

                            <div className="buttons">
                                <button>
                                    Войти
                                </button>

                                <div>
                                    <span className="r_offset_5">Новый пользователь?</span>
                                    <button
                                        className="link"
                                        onClick={() => {
                                            this.props.navigate("registration");
                                        }}
                                    >
                                        Регистрация
                                    </button>
                                </div>
                            </div>    
                        </form>
                    )
                }
            </>
        );
    }
}

export default withAuth(Login);