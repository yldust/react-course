import React from 'react';
import { Link } from 'react-router-dom';

export default function SendCardDataSuccess({ toggleEdit }) {
    return (
        <div>
            <div>Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>

            <Link to="/map">Перейти на карту</Link>
            <button onClick={toggleEdit}>Изменить платежные данные</button>
        </div>
    );
}