import React from "react"
import axios from "axios"
import { LOGIN_USER } from "../../_actions/types"


// 중복으로 사용하려면
// 1. Method
// 2. Api 주소
// 3. 헤더 유무
// 4. return 값
const otpNumberSend = async (body) => {
    try {
        const response = (await axios.post('/v1/partner/auth/otp', body)).data
        return {
            type: LOGIN_USER,
            payload: response
        }
    } catch (err) {
        console.log("Error ", err)
    }
}

const otpNumberCheck = async (body) => {
    try {
        const request = (await axios.post('/v1/partner/auth/otp/check', body)).data
        return {
            type: LOGIN_USER,
            payload: request
        }
    } catch (err) {
        console.log("Error", err)
    }
}


export { otpNumberCheck, otpNumberSend }
