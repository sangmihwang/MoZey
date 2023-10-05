import axios from "axios";
import userInfo from "../store/userInfoStore";

const coinPriceAPI = {
  // 코인 교환
  exchangeCoin: (data) =>
    axios.post(
      `https://j9a510.p.ssafy.io:/api/coins/exchange/${userInfo.User.id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ),
};

export default coinPriceAPI;
