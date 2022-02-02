import React from "react";
import MapContainer from "./MapContainer";
import OrderTaxiForm from "./OrderTaxiForm";
import PaymentForm from "../Profile/PaymentForm";
import { isCardData } from '../../modules/Payment';
import {connect} from 'react-redux';

const Map = ({isCardData}) => {
    return (
        <>
            {!isCardData ? <PaymentForm /> : <OrderTaxiForm />}
            <MapContainer />
        </>
    );
};

const mapStateToProps = (state) => ({
    isCardData: isCardData(state),
});

export default connect(mapStateToProps, null)(Map);