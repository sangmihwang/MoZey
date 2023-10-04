import { axiosInstance } from "api";

const coinPriceAPI = {
  // 투표 알림 받기
  getCoinPrice: () =>
    axiosInstance.get("https://j9a510.p.ssafy.io:/api/coins/price"),

  // 코인 교환
  exchangeCoin: (fromCoinName, toCoinName, minusCoinAmount, plusCoinAmount) =>
    // console.log(fromCoinName, toCoinName, minusCoinAmount, plusCoinAmount),
    axiosInstance.post(`/api/coins/exchange/`),
};

export default coinPriceAPI;
