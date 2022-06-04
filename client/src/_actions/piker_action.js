import moment from "moment"

// type
const MONTH_COTROLL = 'MONTH_COTROLL'
const CAL_VIEW_CHANGE = 'CAL_VIEW_CHANGE'
const SET_DATE = 'SET_DATE'
const DATE_ORIGINAL = 'DATE_ORIGINAL'
const DATE_RESET = 'DATE_RESET'
const DATE_INPUT = 'MONTH_INPUT'
const TYPE_INPUT = 'TYPE_INPUT'
const MONTH_TITLE_CHANGE = 'MONTH_TITLE_CHANGE'

export {MONTH_TITLE_CHANGE,SET_DATE,CAL_VIEW_CHANGE,
     MONTH_COTROLL,DATE_RESET,DATE_ORIGINAL,DATE_INPUT,TYPE_INPUT}

// 메인 화면 년월 바꿀때
const controllMonth = (monthConType) => {
    return {
        type : MONTH_COTROLL,
        monthConType : monthConType
    }
}
// 인풋 번호
const inputTypeChange = (inputType) => {
    return {
        type : TYPE_INPUT,
        inputType : inputType
    }
}
// 인풋값 변경
const dateInput = () => {
    return {
        type : DATE_INPUT
    }
}

// 모달에서 캘린더와 슬라이드 피커간 화면 전환활때
const calViewChange = () => {
    return {
        type : CAL_VIEW_CHANGE
    }
}
// 년,월,일 저장 (캘린더,피커한정)
const setDate = (year,month,day) => {
    return {
        type : SET_DATE,
        year : year,
        month : month,
        day : day,
    }
}
// 월 타이틀 변경
const setMonthTitle = () => {
    return {
        type : MONTH_TITLE_CHANGE
    }
}
// 전부 데이터 리셋
const dateReset = () => {
    return {
        type : DATE_RESET
    }
}
// 원본 데이터 유지
const dateOriginal = () => {
    return {
        type : DATE_ORIGINAL
    }
}

export {setMonthTitle, setDate, controllMonth, dateReset, 
    calViewChange,dateOriginal, dateInput,inputTypeChange}
