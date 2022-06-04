import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { autoLogin, loginUser } from "../../../_actions/user_action";
import { SUCCESS_CODE } from "../../../_actions/types";
import { useHistory, useLocation } from "react-router-dom";
import LoginButton from "./LoginButton";
import CommonTemplate from "../Common/CommonTemplate";
import styled from "styled-components";
import LoginLogo from "../../../static/img/login-logo.png"
import LoginBackground from "../../../static/img/login-background.jpg"
import AutoLoginUnchecked from "../../../static/img/auto-login-unchecked.png"
import AutoLoginChecked from "../../../static/img/auto-login-checked.png"
import HancomLogo from "../../../static/img/hancom_logo.png"
import isEmpty from "../../../utils/ObjectUtils";
import {
    EMPTY_ID,
    EMPTY_PW,
    ID_NOT_FOUND,
    ID_NOT_FOUND_CODE,
    INVALID_USER_INFO,
    PASSWORD_RESET,
    WRONG_INFO
} from "../../../utils/LoginTypes";
import { CookieAdd, CookieFind } from '../../../utils/CookiesUtil';

const InputForLogin = styled.input`
      border-radius: 2rem;
      font-size: 1rem;
      line-height: 2.5;
      width: 18rem;
      border: 1px solid lightgray;
      margin-bottom: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: black;
    `;

const LoginTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%; 
  height:100vh;
  background: url("${LoginBackground}");
`;

const LogoWrapper = styled.div`
  height:20em;
  width:20em;
  display:flex;
  justify-content:center;
  align-items:center;
`

const MiddleSection = styled.div`
  align-items:center;
  justify-content:center;
  display:flex;
  height:12rem;
  flex-direction:column;
  width:23rem;
`

const LoginBottomSectionWrapper = styled.div`
  width: 18em;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 0.25em;
`

const AutoLoginSection = styled.div`
  width: 48%;
  display: flex;
  justify-content: center;
`

const DividerSection = styled.div`
  color: white;
`

const PasswordInitSection = styled.div`
  width: 48%;
  display: flex;
  justify-content: center;
`

const LoginBottomButton = styled.button`
  color: white;
  background: none;
  border: 0px;
  font-weight: 500;
`

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 10em;
  width:18em;
`

const LoginMessageBox = styled.div`
  width:120%;
  padding:0.5em;
  padding-right:0.75em;
  padding-left:0.75em;
  min-height:2em;
  border-radius:50px;
  align-content:center;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  color:#ffffff;
  font-size:small;
  background:rgba(0,0,0,0.3);
`

const BottomSectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15em;
  height: 33%;
`

const LoginPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation()
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [AutoLogin, setAutoLogin] = useState(false);
    const [Validator, setValidator] = useState("");
    const MsgMap = {
        ID_NOT_FOUND: "존재하지 않는 아이디입니다.",
        WRONG_INFO: "아이디 또는 패스워드를 확인해주세요.",
        EMPTY_ID: "아이디를 입력해주세요.",
        EMPTY_PW: "비밀번호를 입력해주세요.",
        PASSWORD_RESET: "비밀번호가 초기화되었습니다."
    };

    useEffect(() => {
        // 비밀번호 찾을시
        let passResetState = location.state || null
        if (passResetState !== null) {
            setValidator(PASSWORD_RESET)
        }
        // 자동로그인시
        const token = CookieFind('Authorization') || null
        if (token != null) {
            dispatch(autoLogin(token))
            history.push('/share/hist')
        }
    }, [])

    const onUsernameHandler = e => {
        setUsername(e.currentTarget.value)
        setValidator("")
    }
    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value)
        setValidator("")
    }
    const onSubmitHandler = e => {
        e.preventDefault()

        if (isEmpty(Username)) {
            setValidator(EMPTY_ID)
            return;
        }
        if (isEmpty(Password)) {
            setValidator(EMPTY_PW)
            return;
        }

        let body = {
            username: Username,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.code === SUCCESS_CODE) {
                    autoLoginCheckAndCookie(AutoLogin, response.payload.data.token)
                    history.push('/share/hist')
                } else if (response.payload.code === ID_NOT_FOUND_CODE) {
                    setValidator(ID_NOT_FOUND);
                } else if (response.payload.code === INVALID_USER_INFO) {
                    setValidator(WRONG_INFO);
                }
            })
    }

    // 오토 로그인 AutoLogin
    const autoLoginCheckAndCookie = (autoCheck, token) => {
        const expires = new Date()
        expires.setMonth(expires.getMonth() + 3)
        if (autoCheck) {
            CookieAdd('Authorization', token, '/', expires)
        }
    }

    const onPasswordChangeHandler = e => {
        e.preventDefault();
        history.push('/user/password')
    }

    const onAutoLoginClickHandler = e => {
        e.preventDefault();
        if (AutoLogin) setAutoLogin(false)
        else setAutoLogin(true)
    }

    return (
        <LoginTemplate loginBackground={LoginBackground}>
            <LogoWrapper>
                <img src={LoginLogo} width={'65%'} height={'65%'} />
            </LogoWrapper>
            <MiddleSection>
                <form onSubmit={onSubmitHandler} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <InputForLogin type={'text'} placeholder={'아이디'} background={'white'} color={'black'} value={Username} onChange={onUsernameHandler} />
                    <InputForLogin type={'password'} placeholder={'비밀번호'} value={Password} onChange={onPasswordHandler} />
                    <LoginButton text={'로그인'} type={"submit"}></LoginButton>
                </form>
                <LoginBottomSectionWrapper>
                    <AutoLoginSection>
                        <img src={AutoLogin === true ? AutoLoginChecked : AutoLoginUnchecked} width={'22rem'} height={'22rem'} />
                        <LoginBottomButton onClick={onAutoLoginClickHandler}>자동 로그인</LoginBottomButton>
                    </AutoLoginSection>
                    <DividerSection>

                    </DividerSection>
                    <PasswordInitSection>
                        <LoginBottomButton onClick={onPasswordChangeHandler}>비밀번호 초기화</LoginBottomButton>
                    </PasswordInitSection>
                </LoginBottomSectionWrapper>
            </MiddleSection>
            <BottomSection>
                <BottomSectionBox>
                </BottomSectionBox>
                <BottomSectionBox>
                    {Validator === "" ? "" : <LoginMessageBox>
                        {MsgMap[Validator]}
                    </LoginMessageBox>}
                </BottomSectionBox>
                <BottomSectionBox>
                    <img src={HancomLogo} width={'60rem'} height={'20rem'} />
                </BottomSectionBox>
            </BottomSection>
        </LoginTemplate>
    );
};



export default LoginPage;
