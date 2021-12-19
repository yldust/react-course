import React from "react";

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleChangeInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render () {
        const { email, password } = this.state;
        return (
            <>
                <form>
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
            </>
        );
    }
}

export default Login;