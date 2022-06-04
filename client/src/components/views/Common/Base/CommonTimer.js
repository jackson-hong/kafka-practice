import React, { useCallback, useRef, useState } from "react";

// const BaseTimerCalc = (min, sec) => {
//     return min !== 0 ? min * 60 : sec
// }


const TimerCustom = (time) => {
    const seconds = time % 60
    return (<div>입력시간 {parseInt(time / 60)}:{seconds < 10 ? '0' + seconds : seconds}</div>)
}

const Timer = (sec, ms, msg) => {
    const [count, setCount] = useState(sec);
    const secRef = useRef(null);
    const start = useCallback(() => {
        reset()
        if (secRef.current !== null) {
            return;
        }
        secRef.current = setInterval(() => {
            setCount(c => c - 1)
        }, ms)
    }, [])
    const reset = useCallback(() => {
        setCount(sec);
        stop();
    }, [])
    const stop = useCallback(() => {
        clearInterval(secRef.current);
        secRef.current = null;
        return msg
    }, [])

    return {count, start, stop}
}

export { Timer, TimerCustom }