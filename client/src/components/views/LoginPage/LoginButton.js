import React from "react";
import styled from "styled-components";

const LoginButton = styled.button`
  border-radius: 2rem;
  font-size: 1rem;
  line-height: 2.5;
  width: 20rem;
  height: 3rem;
  border: 0px ;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: white;
  background: #25d663;
  align-items: center;
`;

function Button({text, color, background, type}){
    return (
        <LoginButton type={type} color={color} background={background}>{text}</LoginButton>
    )
}

export default Button;