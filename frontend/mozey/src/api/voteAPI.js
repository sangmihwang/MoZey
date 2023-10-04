import axios from "axios";
const voteAPI = {
  // 투표인원선택
  postVoteNotification: (data) =>
    axios.post("https://j9a510.p.ssafy.io:/api/votes", data, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
  // 알림보내기
  sendNotification: (data) =>
    axios.post("https://j9a510.p.ssafy.io:/api/v1/notification", data, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
export default voteAPI;
