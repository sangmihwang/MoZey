import axios from "axios";
import { getUserID } from "../store/userInfoStore";

const coinPriceAPI = {
  // 코인 교환
  exchangeCoin: (data) => {
    const userId = getUserID();
    console.log(userId);
    return axios.post(
      `https://j9a510.p.ssafy.io:/api/coins/exchange/${userId}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};

export default coinPriceAPI;
