import React from 'react';
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const CommonHeader = styled.header`
  display: flex;
  align-items:center;
  flex-direction: row;
  width:100%;
  justify-content: space-evenly;
  height:8vh;
  border-bottom: 1px lightgray solid;
  font-family: Noto Sans CJK KR;
  color : #1a1a1b;
  font-weight: 500;
  font-size: 1.25rem;
  background-color: #FFFFFF;
`

const BackspaceWrapper = styled.div`
  display: flex;
  width: 4em;
  //border: 1px red solid;
  padding-left: 0.5rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10em;
  //border: 1px red solid;
`

const MyPageButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 5em;
  padding-right: 0.5rem;
  font-size: medium;
  //border: 1px red solid;
`

const BackspaceButton = styled.button`
  // display: ${props => props.enableBackspace ? 'block' : 'none'};
  border: 0px;
  background: white;
  font-size: 1.25rem;
  font-weight: bolder;
`

const MyPageButton = styled.button`
  // display: ${props => props.enableMyPage ? 'block' : 'none'};
  border: 0px;
  background: white;
  font-size: 0.9rem;
  font-weight: 600;
`


function Header({title, enableBackspace, enableMyPage, enablePopup, onPopupHandler}) {
    const history = useHistory();
    const backSpaceHandler = () => {
        history.go(-1);
    }
    const myPageHandler = () => {
        history.push('/user')
    }
    return (
        <CommonHeader>
            <BackspaceWrapper>
                {enableBackspace && <BackspaceButton
                    enableBackspace={enableBackspace}
                    onClick={backSpaceHandler}>
                    ←
                </BackspaceButton>
                }
                {enablePopup && <BackspaceButton
                    enableBackspace={enableBackspace}
                    onClick={onPopupHandler}>
                    ←
                </BackspaceButton>}
            </BackspaceWrapper>
            <TitleWrapper>
                {title}
            </TitleWrapper>
            <MyPageButtonWrapper>
                {enableMyPage && <MyPageButton
                    enableMyPage={enableMyPage}
                    onClick={myPageHandler}>
                    내 정보
                </MyPageButton>}
            </MyPageButtonWrapper>
        </CommonHeader>
    );
};

export default Header;
