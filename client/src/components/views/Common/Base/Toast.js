import React, { useEffect, useState } from 'react';
 
const ToastDiv =({ msg = "메세지 없음" }) => {
    return <div style={{width:'300px'}} className="toast">{msg}</div>;
  }

const msgList = {
    complete: "비밀번호 변경이 완료되었습니다.",
  };

const Toast = () => {
    const [ToastStatus, setToastStatus] = useState(false);
    const [ToastMsg, setToastMsg] = useState(""); // 토스트에 표시할 메세지
  
    const ToastHandler = (type) => {
      setToastStatus(true);
      setToastMsg(msgList[type]);
    };
  
    useEffect(() => {
      if (ToastStatus) {
        setTimeout(() => {
          setToastStatus(false);
          setToastMsg(""); 
        }, 500000);
      }
    }, [ToastStatus]);

    return {ToastStatus,ToastMsg,ToastHandler}
}
 
export {ToastDiv, Toast};