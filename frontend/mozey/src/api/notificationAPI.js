import { axiosInstance } from "apis";

const notificationAPI = {
  // 투표 알림 받기
  getNotification: (userId) =>
    axiosInstance.get(`/api/alarms/users/${userId}`),
  getTypeOfNotification: (userId,alarmType) =>
    axiosInstance.get(`/api/alarms/users/${userId}/${alarmType}`),
  
  };

export default notificationAPI;
