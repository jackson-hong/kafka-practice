import React from "react";
import axios from "axios";

const shareTimeSlots = async (token, param) => {
        const response = await axios.get(process.env.REACT_APP_BACKEND_URL+'/v1/partner/members/share/slots', {
            headers : {
                "Authorization" : token,
            },
            params : {
                from : param.from,
                to : param.to
            }}).then(response => {
                console.log(response.data.data.slotList)
            return response.data.data.slotList;
            })
    return response;
}

export {shareTimeSlots}