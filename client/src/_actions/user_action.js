import axios from "axios";
import { CookieAdd } from "../utils/CookiesUtil";
import {AUTO_LOGIN, LOGIN_USER, LOGOUT_USER} from "./types";

export function loginUser(dataToSubmit) {
    console.log(dataToSubmit)
    const expires = new Date()
    expires.setMonth(expires.getMonth()+3)
    CookieAdd('phpsessid',dataToSubmit.username,'/', expires)
    CookieAdd('phpsesspw',dataToSubmit.password,'/', expires)
    const request = axios.post('/v1/partner/auth/login', dataToSubmit)
        .then(response => {
            console.log(response)
            return response.data});
    return {
        type : LOGIN_USER,
        payload : request
    }
}

export function auth(token) {

    const request = axios.get('/v1/partner/members/detail', {
        headers : {
            'Authorization' : token
        }
    })
        .then(response => response.data);
    return {
        type : LOGIN_USER,
        payload : request
    }
}

export function autoLogin() {
    return {
        type: AUTO_LOGIN
    }
}

export function loginOut() {
    return {
        type : LOGOUT_USER
    }
}