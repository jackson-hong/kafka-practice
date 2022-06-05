import React from 'react';
import styled from "styled-components";

const CommonHeader = styled.header`
  display: flex;
  align-items:center;
  flex-direction: column;
  width:100%;
  justify-content: center;
  height:15vh;
  border-bottom: 1px lightgray solid;
  font-family: EarlyFontDiary;
  color : #1a1a1b;
  font-weight: 500;
  font-size: 3rem;
  background-color: rgb(252,239,67);
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10em;
`

const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12em;
  font-size: 1rem;
`


function Header({title, subTitle}) {
    return (
        <CommonHeader>
            <TitleWrapper>
                {title}
            </TitleWrapper>
            <SubTitleWrapper>
                {subTitle}
            </SubTitleWrapper>
        </CommonHeader>
    );
};

export default Header;
