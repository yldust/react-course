import React from 'react';
import PropTypes from 'prop-types';

export const SendOrderSuccess = ({ clearOrder }) => {
    return (
        <div>
            <div>Ваш заказ успешно отправлен!</div>

            <button onClick={() => clearOrder()}>Отменить заказ</button>
        </div>
    );
};

SendOrderSuccess.propTypes = {
    clearOrder: PropTypes.func,
};