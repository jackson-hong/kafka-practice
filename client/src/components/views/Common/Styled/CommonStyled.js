/* 베이스가 되는 Styled */
import styled from "styled-components";

// 기본 정렬
const Wrap = styled.div`
    width: 100%;
    height: auto;
    background-color: ${(props) => props.backgroundColor || '#ffffff'};
    `

// Content 태그
const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.padding || '34px 30px 0 30px'}; // 스타일 보고 수정필요
    padding-bottom: ${(props => props.padding || 0)};
    background-color: ${(props) => props.backgroundColor || '#ffffff'};
    height: auto;
    `

// 인라인 정렬
const DivRow = styled.div`
    flex-direction: row;
    width: ${(props) => props.width || '100%'};
    `

// 수직 정렬
const DivCol = styled.div`
    flex-direction: column;
    width: 100%;
    margin-bottom: ${(props) => props.marginBottom || '20.5px'};
`

const ErrorMessage = styled.span`
    display: inline-block;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -.5px;
    color: #ff003e;
    vertical-align: middle;
`

const DivFlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
    font-size: ${(props) => props.fontSize};
    width: ${(props) => props.width || '100%'};
    flex: auto;
    align-items: center;
`

const DivFlexCol = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width || '100%'};
    flex: auto;
`

export { Wrap, Content, DivCol, DivRow, DivFlexRow, DivFlexCol, ErrorMessage }

// 베이스 유저 Input
const BaseInputForUse = styled.input`
    border: none;
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
    padding-left: 0;
    margin-top: 10px; // 스타일 정의서 확인후 변경필요
    padding-bottom: 5px;
    font-size: 1em;
    border-radius: 0;
    ::placeholder {
        color: #b6b6b6;
        opacity: 1;
    }
    :focus {
        outline: none;
        border-bottom: 1px solid black;
    }
`
// 베이스가 되는 버튼
const BaseButton = styled.button`
    font-size : 1em;
    color: #FFFFFF;
    background-color: ${(props) => props.backgroundColor || '#D8D8D8'};
    border: 1px solid ${(props) => props.backgroundColor || '#D4D4D4'};
    font-weight: 600;
`

// 라벨
const InputForLabel = styled.label`
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.6px;
    color: #57636f;
`

export { BaseButton, BaseInputForUse, InputForLabel }


// 기본 스타일 모음
const BaseFontAwesomeIconStyle = (fontSize, margin) => {
    return { margin: margin || '25px', color: '#808b9e', backgroundColor: '#ffffff', borderRadius: 50, fontSize: fontSize || '1.5em' }
}

export {BaseFontAwesomeIconStyle}