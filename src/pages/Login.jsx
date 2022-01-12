import React from "react";
//import { withAuth } from "./context/AuthContext";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {authenticate} from "../actions";
import {Link} from "react-router-dom";

class Login extends React.Component {
    static propTypes = {
        authenticate: PropTypes.func,
        isLoggedIn:  PropTypes.bool
    }

    state = {
        email: '',
        password: ''
    };

    handleChangeInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.authenticate(this.state.email, this.state.password);
    }

    render () {
        const { email, password } = this.state;
        return (
            <>
                {
                    this.props.isLoggedIn ? (
                        <p>You are logged in <Link to="/profile">Go to profile</Link></p>
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
                                    <Link to="/registration">Регистрация</Link>
                                </div>
                            </div>    
                        </form>
                    )
                }
            </>
        );
    }
}

export default connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    { authenticate }
)(Login);