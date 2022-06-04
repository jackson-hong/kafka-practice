import { MODAL_CONTROLL } from "../_actions/modal_action";

const SHARE_HIST_MODAL = 'SHARE_HIST_MODAL'
const SHARE_TIME_MODAL = 'SHARE_TIME_MODAL'
const SHARE_TIME_CANCEL_MODAL = 'SHARE_TIME_CANCEL_MODAL'

export { SHARE_HIST_MODAL, SHARE_TIME_MODAL, SHARE_TIME_CANCEL_MODAL }

const initialState = {
    isActive: false,
    name: ''
}

const modal = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_CONTROLL:
            const onModal = !state.isActive
            return {
                ...state,
                isActive: onModal,
                name: action.name
            }
        default: return state
    }
}
export default modal


// 모달 이름 체크 공용
export const isModalNameCheck = (isModal, name) => {
    return isModal.isActive && isModal.name === name
}