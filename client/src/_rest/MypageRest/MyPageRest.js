import axios from "axios"
import { LOGIN_USER } from "../../_actions/types"


const passwordCertCheck = async (body, token) => {
    const request = (await axios.post('/v1/partner/members/password', body, {
        headers : {
            'Authorization' : token
        }
    })).data
    
    return {
        type: LOGIN_USER,
        payload: request
    }
}

const passwordChenge = async (body, token) => {
    const request = (await axios.patch('/v1/partner/members/password', body, {
        headers : {
            'Authorization' : token
        }
    })).data
    return {
        type: LOGIN_USER,
        payload: request
    }
}


export { passwordCertCheck, passwordChenge }