import React from "react";
import styled from "styled-components";

const CommonTemplate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%; 
  height:100vh;
  min-height: 100vh;
  background: ${(props) => props.background || '#FFFFFF'};
  font-family: "Noto Sans CJK KR";
`;

function Div({children, background}){
    return (
        <CommonTemplate background={background}>{children}</CommonTemplate>
    )
}

export default Div;