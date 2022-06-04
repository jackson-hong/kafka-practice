import moment from "moment";
import { dayReplaceDot } from "../components/views/ShareHistPage/Accordion/ShareDateUtil";
import { CAL_VIEW_CHANGE, DATE_INPUT, DATE_ORIGINAL, DATE_RESET, MONTH_COTROLL, MONTH_TITLE_CHANGE, SET_DATE, TYPE_INPUT } from "../_actions/piker_action";

// 초기값
const initialState = {
    inputType: 0, // 0 = 1번, 1 = 2번 인풋 번호
    calViewChange: false, // 캘린더 화면 전환 
    base: {
        monthConType: 0, // 0 플러스, 1 마이너스
        firstDate: moment().startOf('month').format('YYYY.MM.DD'),
        secondDate: moment().format('YYYY.MM.DD'),
        monthDate: new Date().getMonth() + 1,
    },
    calendar: {
        year: moment().year(),
        month: moment().month(),
        day: moment().date()
    }

}

// action은 action에서 넘어오는값 
// state = 초기값
const piker = (state = initialState, action) => {
    switch (action.type) {
        case MONTH_COTROLL:
            const date = onMonthAndDayChange(state.base.monthDate, action.monthConType, state.isMonth)
            return {
                ...state,
                base: date
            }
        case CAL_VIEW_CHANGE:
            return {
                ...state,
                calViewChange: !state.calViewChange,
            }
        case SET_DATE:
            return {
                ...state,
                calendar: {
                    year: action.year,
                    month: action.month,
                    day: action.day
                }
            }
        case DATE_INPUT:
            return {
                ...state,
                base: {
                    ...state.base,
                    firstDate: state.inputType === 0
                        ? moment(new Date(state.calendar.year, state.calendar.month, state.calendar.day)).format('YYYY.MM.DD')
                        : state.base.firstDate,
                    secondDate: state.inputType === 1
                        ? moment(new Date(state.calendar.year, state.calendar.month, state.calendar.day)).format('YYYY.MM.DD')
                        : state.base.secondDate
                }
            }

        case MONTH_TITLE_CHANGE:
            return {
                ...state,
                base: {
                    ...state.base,
                    monthDate: state.base.firstDate + ' ~ ' + state.base.secondDate
                }
            }
        case TYPE_INPUT:
            // console.log(state)
            return {
                ...state,
                inputType: action.inputType
            }
        case DATE_ORIGINAL:
            let origianlDate
            if(state.inputType === 0 ){
                origianlDate = state.base.firstDate
            } else {
                origianlDate = state.base.secondDate
            }
            origianlDate = dayReplaceDot(origianlDate)
            return {
                ...state,
                calendar : {
                    year : moment(origianlDate).year(),
                    month : moment(origianlDate).month(),
                    day : moment(origianlDate).day()
                }
            }
        case DATE_RESET:
            return {
                ...initialState
            }
        default: return state;
    }
}


export default piker

// 날짜 컨트롤
const onMonthAndDayChange = (month, type, isMonth) => {
    const now = type === 0 ? month + 1 : month - 1
    const year = moment().format('YYYY')
    const firstDay = moment(year + now, 'YYYYMM').startOf('month').format('YYYY.MM.DD')
    const lastDay = (now === new Date().getMonth)
        ? moment().format('YYYY.MM.DD')
        : moment(year + now, 'YYYYMM').endOf('month').format('YYYY.MM.DD')
    return {
        monthConType: type,
        firstDate: firstDay,
        secondDate: lastDay,
        monthDate: now,
        isMonth: !isMonth
    }
}
