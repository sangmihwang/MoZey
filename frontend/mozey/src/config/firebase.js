import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";
import axios from "axios";
import useStore from ".././store/userInfoStore";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGE_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
function requestPermission() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("알림 설정 완료");
      // const userInfo = useStore((state) => state.User);
      // console.log(userInfo.data.userId);
      // const [userName, setUserName] = useState(null);
      // console.log(userInfo.data.userId);
      // setUserName(userInfo.data.userId);
    }
  });
}
requestPermission();

const token = getToken(messaging, {
  vapidKey: process.env.REACT_APP_VAPID_KEY,
})
  .then((currentToken) => {
    if (currentToken) {
      // axios.post("localhost:3000/api/users/firebase/{userId}");
      axios.post("https://j9a510.p.ssafy.io:/api/users/firebase/50", {
        firebaseToken: currentToken,
      });
      console.log(currentToken);
      // console.log(localStorage.userInfo);
    } else {
      // Show permission request UI
      // console.log(userId);
      console.log("토큰 없습니다");
      // ...
    }
  })
  .catch((err) => {
    console.log("에러", err);
    // ...
  });
// export const token = await getToken(messaging, {
//   vapidKey: process.env.REACT_APP_VAPID_KEY,
// });
// console.log(token);
export const auth = getAuth(app);
