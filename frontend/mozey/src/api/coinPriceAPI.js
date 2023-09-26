import { axiosInstance } from "api";

const coinPriceAPI = {
  // 투표 알림 받기
  getCoinPrice: () => axiosInstance.get("/api/coins/price"),
};

export default coinPriceAPI;
