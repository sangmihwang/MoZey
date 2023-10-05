import { axiosInstance } from "api";
import axios from "axios";

const coinPriceAPI = {
  // 투표 알림 받기
  getCoinPrice: () =>
    axiosInstance.get("https://j9a510.p.ssafy.io:/api/coins/price"),

  // 코인 교환
  exchangeCoin: (data) =>
    axios.post(`https://j9a510.p.ssafy.io:/api/coins/exchange/`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};

export default coinPriceAPI;
