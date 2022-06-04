import React from "react";
import styled from "styled-components";
const InputForLogin = styled.input`
  border-radius: 2rem;
  font-size: 1rem;
  line-height: 2.5;
  width: 20rem;
  border: 1px solid lightgray;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: gray;
  background: white;
`;

function Input({text, color, background, type}){
    return (
        <InputForLogin
            type={type}
            color={color}
            background={background}
            placeholder={text}
        >
        </InputForLogin>
    )
}

export default Input;