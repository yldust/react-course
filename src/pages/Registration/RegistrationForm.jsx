import React from "react";
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import {register} from "../../modules/Auth";
import {useDispatch} from "react-redux";

export const RegistrationForm = ({ useDispatchHook = useDispatch }) => {
    const dispatch = useDispatchHook();

    const handleSubmit = (values) => {
        const {email, name, password} = values;
        dispatch(register(email, name, password));
    }

    return (
        <>
            <Form
                onSubmit = {handleSubmit}
                render = { ({handleSubmit}) => (
                    <form
                        onSubmit={(event) => handleSubmit(event)}
                        noValidate
                        autoComplete="off"
                    >
                        <h1>
                            Регистрация
                        </h1>
                        <div>
                            <Field
                                component={TextField}
                                name="email"
                                label="Email"
                                fullWidth={true}
                                required
                            />
                        </div>

                        <div>
                            <Field
                                component={TextField}
                                name="name"
                                label="Имя"
                                fullWidth={true}
                                required
                            />
                        </div>

                        <div>
                            <Field
                                component={TextField}
                                type = "password"
                                name="password"
                                label="Пароль"
                                fullWidth={true}
                                required
                            />
                        </div>

                        <div className="buttons">
                            <Button
                                type="submit"
                                variant="contained"
                                size="medium"
                                color="primary"
                            >
                                Зарегистрироваться
                            </Button>
                            <div>
                                <Typography  component="span" align="left">
                                    <Link to="/">Войти</Link>
                                </Typography>
                            </div>
                        </div>
                    </form>
                )}
            />
        </>
    )
}