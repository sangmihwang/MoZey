import axios from "axios";
import useStore from "../store/userInfoStore";

const userInfo = useStore((state) => state.User);
const coinPriceAPI = {
  // 코인 교환
  exchangeCoin: (data) =>
    axios.post(
      `https://j9a510.p.ssafy.io:/api/coins/exchange/${userInfo.id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ),
};

export default coinPriceAPI;
