// import { axiosInstance } from "apis";
import useStore from "../store/userInfoStore";
import axios from "axios";

const notificationAPI = {
  // 투표 알림 받기
  getNotification: (userId) => axios.get(`/api/alarms/users/${userId}`),
  getTypeOfNotification: (userId, alarmType) =>
    axios.get(`/api/alarms/users/${userId}/${alarmType}`),
};

export default notificationAPI;
