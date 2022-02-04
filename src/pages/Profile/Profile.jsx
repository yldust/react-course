import React, {useEffect} from "react";
import {connect} from "react-redux";
import SendCardDataSuccess from "./SendCardDataSuccess";
import PaymentForm from "./PaymentForm";
import {getRequest, changeIsEdit, isCardData} from '../../modules/Payment';

class Profile extends React.Component {

    componentDidMount() {
        this.props.getRequest();
    }

    toggleEdit = () => {
        this.props.changeIsEdit(!this.props.isEdit);
    }

    render () {
        return (
            <>
                {this.props.isCardData && !this.props.isEdit ?
                    <SendCardDataSuccess toggleEdit={this.toggleEdit}/> : <PaymentForm/>}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    isCardData: isCardData(state),
    isEdit: state.payment.isEdit
});

const mapDispatchToProps = {changeIsEdit, getRequest}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
