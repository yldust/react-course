import React from "react";
import { withAuth } from "./context/AuthContext";
import PropTypes from 'prop-types';

class Registration extends React.Component {
    static propTypes = {
        navigate: PropTypes.func,
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
        this.props.logIn(this.state.email, this.state.password);

        if (this.props.isLoggedIn) {
            this.props.navigate('profile')
        }
    }

    render () {
        const {email, name, password} = this.state;
        return (
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
                        <button
                            className="link"
                            onClick={() => {
                                this.props.navigate("login");
                            }}
                        >
                            Войти
                        </button>
                    </div>
                </div>    
          </form>
        );
    }
}

export default withAuth(Registration);