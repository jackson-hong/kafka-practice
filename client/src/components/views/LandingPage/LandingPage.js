import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import CommonTemplate from "../Common/CommonTemplate";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";
import Body from "../Common/Body/Body";
import styled from "styled-components";
import ModifyModal from "./Modal/ModifyModal";
import Planner from "./Planner/Planner";

const LandingPage = () => {

    const [modalToggle, setModalToggle] = useState(false);

    return (<CommonTemplate>
        <Header title={'만다라트 플래너'} subTitle={'Mandal-art Planner'}></Header>
        <Body>
            <Planner />
        </Body>

        <Footer></Footer>
        <ModifyModal
            modalActive={false}
            ></ModifyModal>

    </CommonTemplate>)

}

export default LandingPage;
