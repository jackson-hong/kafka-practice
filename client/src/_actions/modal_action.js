const MODAL_CONTROLL = 'MODAL_CONTORLL'


export {MODAL_CONTROLL}


const isModalActive = (modalName) => {
    return {
        type : MODAL_CONTROLL,
        name : modalName
    }
}

export {isModalActive}