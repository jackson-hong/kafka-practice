import React from 'react';
import styled from "styled-components";

const CommonBody = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Body = ({children}) => {
    return (
        <CommonBody>
            {children}
        </CommonBody>
    );
};


export default Body;
