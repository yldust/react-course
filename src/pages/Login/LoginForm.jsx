import React from "react";
import {authenticate} from '../../modules/Auth'
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

export const LoginForm = ({ useDispatchHook = useDispatch }) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatchHook();

    const onSubmit = (data) => {
        const {email, password} = data;
        dispatch(authenticate(email, password));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    {...register("email", {
                        required: "Required",
                    })}
                />
            </div>

            <div>
                <label htmlFor="password">Пароль</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    {...register("password", {
                        required: "Required",
                    })}
                />
            </div>

            <div className="buttons">
                <button type="submit">
                    Войти
                </button>

                <div>
                    <span className="r_offset_5">Новый пользователь?</span>
                    <Link to="/registration">Регистрация</Link>
                </div>
            </div>
        </form>
    );
}
