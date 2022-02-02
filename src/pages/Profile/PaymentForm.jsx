import React from "react";
import {connect, useDispatch} from 'react-redux';
import {
    getCardData,
    sendData,
    formError,
    getErrors
} from '../../modules/Payment';


import {Field, Form} from "react-final-form";
import Button from '@material-ui/core/Button';
import {TextField} from "final-form-material-ui";
import formatPattern from 'format-string-by-pattern';

const PaymentForm = ({cardData, errors, sendData, formError, useDispatchHook = useDispatch}) => {
    const dispatch = useDispatchHook();

    const handleSubmit = (values) => {
        if (!!values.cardNumber && !!values.expiryDate && !!values.nameOwnerCard && !!values.cvc) {
            dispatch(sendData({ ...values }));
        } else {
            dispatch(formError('Все поля должны быть заполнены'));
        }
    };

    const formatCardsNumber = (value) => {
        const number = value.replace(/[^\d]/g, '');
        return formatPattern('9999 9999 9999 9999', number);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={cardData}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <h1>
                         Введите данные карты
                    </h1>
                    <div>
                        <Field
                            component={TextField}
                            name="cardNumber"
                            label="Номер карты"
                            placeholder="0000 0000 0000 0000"
                            parse={formatCardsNumber}
                            fullWidth={true}
                            required
                        />
                    </div>
                    <div>
                        <Field
                            component={TextField}
                            name="expiryDate"
                            label="Дата окончания действия"
                            placeholder="12/20"
                            fullWidth={true}
                            required
                        />
                    </div>
                    <div>
                        <Field
                            component={TextField}
                            name="nameOwnerCard"
                            label="Имя владельца"
                            fullWidth={true}
                            required
                        />
                    </div>
                    <div>
                        <Field
                            component={TextField}
                            name="cvc"
                            label="CVC"
                            placeholder="123"
                            fullWidth={true}
                            required
                        />
                    </div>

                    {errors && (
                        <span>{errors}</span>
                    )}

                    <div className="buttons">
                        <Button
                            type="submit"
                            variant="contained"
                            size="medium"
                            color="primary"
                        >
                            Сохранить
                        </Button>
                    </div>
                </form>
            )}
        />
    );
};

const mapStateToProps = (state) => ({
    cardData: getCardData(state),
    errors: getErrors(state),
});

const mapDispatchToProps = { sendData, formError };

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
