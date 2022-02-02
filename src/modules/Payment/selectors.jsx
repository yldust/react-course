export const getErrors = (state) => state.payment.errors;
export const getCardData = (state) => state.payment.card;

export const isCardData = (state) => {
    const { cardNumber, expiryDate, nameOwnerCard, cvc } = state.payment.card;
    if (cardNumber && expiryDate && nameOwnerCard && cvc) {
        return true;
    }

    return false;
};