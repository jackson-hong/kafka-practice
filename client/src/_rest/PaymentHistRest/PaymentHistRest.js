import axios from "axios";

// 정산 내역 조회
const BalanceHistory = async (token) => {
  const request = (
    await axios.get("/v1/partner/members/balance/history", {
      headers: {
        authorization: token,
      },
    })
  ).data;

  return {
    type: "BALANCE_HISTORY",
    payload: request,
  };
};

// 공유내역 총 정산 금액
const Point = async (token) => {
  const request = (
    await axios.get("/v1/partner/members/point", {
      headers: {
        authorization: token,
      },
    })
  ).data;
  return {
    type: "POINT",
    payload: request,
  };
};
export { BalanceHistory, Point };
