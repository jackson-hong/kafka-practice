import axios from "axios"
import { LOGIN_USER } from "../../_actions/types"


// 총 정산 금액
const TotalPointCal = async (token) => {
    const request = (await axios.get('/v1/partner/members/point', {
        headers: {
            'Authorization': token
        }
    })).data

    return {
        type: LOGIN_USER,
        payload: request
    }
}

// 공유 내역 조회
const FindShareHistory = async (token, from, to) => {
    const request = (await axios.get('/v1/partner/members/share/history', {
        headers: { 'Authorization': token },
        params: { 'from': from, 'to': to }
    })).data

    return {
        type: LOGIN_USER,
        payload: request
    }
}

// 공유 내역 조회
const DetailShareHistory = async (token, from) => {
    const request = (await axios.get('/v1/partner/members/share/history/details', {
        headers: { 'Authorization': token },
        params: { 'slotDate': from }
    })).data

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export { TotalPointCal, FindShareHistory, DetailShareHistory }