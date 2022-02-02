import React, { useState, useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';
import {getCords, fetchOrderRequest, removeOrder, isLoading } from '../../modules/Order';
import { getAddresses, fetchAddressRequest } from '../../modules/ListAddresses';
import {SendOrderSuccess} from './SendOrderSuccess';
import {removeRoute} from '../../helpers/removeRoute';

import { Form, Select } from '../../components/FormComponents';

function OrderTaxiForm({cords, addressList, fetchAddressRequest, fetchOrderRequest, removeOrder, useDispatchHook = useDispatch }) {
    const dispatch = useDispatchHook();
    const filterAddressList = (exclude) => addressList.filter((addres) => addres !== exclude);
    const [fromAddressList, setFromAddressList] =  useState([]);
    const [toAddressList, setToAddressList] =  useState([]);

    useEffect(() => {
        fetchAddressRequest();
    }, [fetchAddressRequest]);

    useEffect(() => {
        setFromAddressList(addressList);
        setToAddressList(addressList);
    }, [addressList]);

    const clearOrder = () => {
        removeOrder();
        removeRoute();
    };

    const handleChange = (e, type) => {
        switch (type) {
            case 'start':
                setToAddressList(filterAddressList(e.target.value));
                break;
            case 'end':
                setFromAddressList(filterAddressList(e.target.value));
                break;
            default:
                return;
        }
    }

    const onSubmit = (data) => {
        const {fromAddress, toAddress} = data;
        dispatch(fetchOrderRequest({ start: fromAddress, end: toAddress }));
    }

    return (
        <>
            {cords.length ? (
                <SendOrderSuccess clearOrder={clearOrder} />
            ) : (
                <Form onSubmit={onSubmit}>
                    <Select
                        name="fromAddress"
                        options={fromAddressList}
                        onChange = {(e) => handleChange(e, 'start')}
                    />
                    <Select
                        name="toAddress"
                        options={toAddressList}
                        onChange = {(e) => handleChange(e, 'end')}
                    />

                    <div className="buttons">
                        <button type="submit">
                            Отправить заказ
                        </button>
                    </div>
                </Form>
            )}
        </>
    )
}

const mapStateToProps = (state) => ({
    isLoading: isLoading(state),
    addressList: getAddresses(state),
    cords: getCords(state)
});
const mapDispatchToProps = { fetchAddressRequest, fetchOrderRequest, removeOrder };

export default connect(mapStateToProps, mapDispatchToProps)(OrderTaxiForm);