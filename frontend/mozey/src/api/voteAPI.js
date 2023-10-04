import axios from "axios";
const voteAPI = {
  // 투표인원선택
  postVoteNotification: (data) =>
    axios.post("https://j9a510.p.ssafy.io:/api/votes", data, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
export default voteAPI;
