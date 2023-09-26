import { axiosInstance } from "apis";

const voteAPI = {
  // 투표인원선택
  postVoteNotification: (qtnId, userId, chosen, time) =>
    axiosInstance.post("/api/votes", qtnId, userId, chosen, time),
};
export default voteAPI;
