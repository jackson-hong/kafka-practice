import React from 'react';
import styled from "styled-components";

const CommonFooter = styled.header`
  display: flex;
  align-items:center;
  flex-direction: row-reverse;
  width:100%;
  height:15vh;
  border-top: 1px lightgray solid;
  font-family: Noto Sans CJK KR;
  color : #1a1a1b;
  font-weight: 500;
  font-size: 1.25rem;
  background-color: rgb(252,239,67);
  
`

const SaveButton = styled.button`
  border: 0;
  background: rgb(224,119,49);
  border-radius: 50px;
  width: 6vh;
  height: 2vh;
  margin-right: 1em;
`

const LoginButton = styled.button`
  border: 0;
  background: rgb(224,119,49);
  border-radius: 50px;
  width: 6vh;
  height: 2vh;
  margin-right: 1em;
`

const Footer = () => {
    return (
        <CommonFooter>
            <SaveButton>저장하기</SaveButton>
            <LoginButton>로그인하기</LoginButton>
        </CommonFooter>
    );
};


export default Footer;
