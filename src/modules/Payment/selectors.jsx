export const getErrors = (state) => state.payment.errors;
export const getCardData = (state) => state.payment.card;

export const isCardData = (state) => {
    const { cardNumber, expiryDate, nameCard, cvc } = state.payment.card;
    if (cardNumber && expiryDate && nameCard && cvc) {
        return true;
    }

    return false;
};