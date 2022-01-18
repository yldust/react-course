import React from "react";
//import { withAuth } from "./context/AuthContext";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {register} from "../actions";
import {Link} from "react-router-dom";

class Registration extends React.Component {
    static propTypes = {
        logOut: PropTypes.func
    }

    state = {
        'email': '',
        'name': '',
        'password': '',
    }

    handleChangeInput = (event) => {
        this.setState({[event.target.name]: event.target.value}); 
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.register(this.state.email, this.state.password,  this.state.name);
    }

    render () {
        const {email, name, password} = this.state;
        return (
            <>
                {
                this.props.isLoggedIn ? (
                    <p>You are logged in <Link to="/profile">Go to profile</Link></p>
                ) : (
                <form>
                    <h1>Регистрация</h1>
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
                        <label htmlFor="name">Имя</label>
                        <input
                            type="name"
                            name="name"
                            value={name}
                            onChange={this.handleChangeInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={this.handleChangeInput}
                        />
                    </div>
                    <div className="buttons">
                        <button
                            type="submit"
                            onClick={this.handleSubmit}
                        >
                            Зарегистрироваться
                        </button>
                        <div>
                            <span className="r_offset_5">Уже зарегистрированы?</span>
                            <Link to="/login">Войти</Link>
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
    (state) => ({
        isLoggedIn: state.auth.isLoggedIn,
        authToken: state.auth.authToken
    }),
    {register}
)
(Registration);