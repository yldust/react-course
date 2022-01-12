import {AUTHENTICATE, REGISTER, logIn} from "../actions";
import {serverLogIn, serverSignIn} from "../api/api";

export const userMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const {email, password} = action.payload;
        const data = await serverLogIn(email, password);
        if (data.success) {
            store.dispatch(logIn(data.token));
        }
    }
    else if (action.type === REGISTER) {
        const {email, password, name} = action.payload;
        const data = await serverSignIn(email, password, name, '');

        if (data.success) {
            store.dispatch(logIn(data.token));
        }
    } else {
        next(action);
    }
}