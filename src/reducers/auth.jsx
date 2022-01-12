import { LOG_IN, LOG_OUT } from "../actions";

const initialState = {
    isLoggedIn: false,
    authToken: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOG_IN: {
            console.log(action);
            return {
                isLoggedIn: true,
                authToken: action.token
            }
        }
        case LOG_OUT: {
            return {isLoggedIn: false}
        }
        default:
            return state;
    }
}