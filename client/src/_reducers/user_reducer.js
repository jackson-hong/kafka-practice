import { LOGIN_USER, AUTH_USER, LOGOUT_USER, AUTO_LOGIN } from "../_actions/types";
import isEmpty from "../utils/ObjectUtils";
import { CookieAdd, CookieFind, CookieRemove } from "../utils/CookiesUtil";

const initialState = {
    isAuth: false
}

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER: {
            if (!isEmpty(action.payload.data.token)) {
                const token = action.payload.data.token
                return {
                    ...state,
                    isAuth: !isEmpty(token),
                    loginToken: token
                }
            }
        }
        case AUTH_USER: {
            return { ...state, userData: action.payload.data }
        }
        case AUTO_LOGIN: {
            const token = CookieFind('Authorization')
            return {
                ...state,
                isAuth: !isEmpty(token),
                loginToken: token
            }
        }
        case LOGOUT_USER: {
            CookieRemove('Authorization')
            return {
                ...state,
                isAuth: false,
                loginToken: ''
            }
        }
        default: return state;
    }
}