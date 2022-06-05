import moment from 'moment';
import Modal from 'react-modal';
import 'moment/locale/ko';
import Calendar from "react-calendar";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import styled from "styled-components";

// 한글 설정
moment.locale('ko');

// 모달 기본 스타일
const style = {
    overlay: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.60)",
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    content: {
        position:'relative',
        inset: '0',
        height:'40vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px 20px 0 0',
        justifyContent: 'center',
        alignItems:'center',
        background: '#FFFFFF',
        WebkitOverflowScrolling: 'touch',
        padding:'0'
    },
};

const ModifyModal = (props) => {
    // useEffect(() => {
    //     async function getSlotLists(token, param) {
    //         return await axios.get(process.env.REACT_APP_BACKEND_URL + '/v1/partner/members/share/slots', {
    //             headers: {
    //                 "Authorization": token,
    //             },
    //             params: {
    //                 from: param.from,
    //                 to: param.to
    //             }
    //         }).then(response => {
    //             setSlotList(response.data.data.slotList)
    //             return response.data.data.slotList;
    //         });
    //     }
    //     getSlotLists(token, defaultParam)
    // }, []);

    // const dispatchToModiPage = (date) => {
    //     props.setSelectState(null)
    //     props.changeDateHandler(date);
    //     props.setModalActive(false)
    // }

    return (
        <>
            <Modal
                style={style}
                isOpen={props.modalActive}
                onRequestClose={() => props.setModalActive(false)}
            >
            </Modal>
        </>
    )
}

export default ModifyModal
