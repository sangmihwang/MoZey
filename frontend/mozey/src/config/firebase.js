import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";
import axios from "axios";
import useStore from ".././store/userInfoStore";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

function FirebaseComponent() {
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
  const userInfo = useStore((state) => state.User);
  const [userId, setUserID] = useState(null);
  const messaging = getMessaging(app);
  function requestPermission() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("알림 설정 완료!!!!!!!");
        console.log("추가추가");
        console.log(userInfo.data.userId, "asdasd");
        const [userId, setUserID] = useState(null);
        console.log(userInfo.data.userId);
        setUserID(userInfo.data.userId);
        console.log(userId);
        console.log("추가추가");
      }
    });
  }
  useEffect(() => {
    async function requestAndSetToken() {
      const permission = await Notification.requestPermission();

      if (permission === "granted") {
        try {
          const currentToken = await getToken(messaging, {
            vapidKey: process.env.REACT_APP_VAPID_KEY,
          });

          if (currentToken) {
            const formData = new URLSearchParams();
            formData.append("firebaseToken", currentToken);

            await axios.post(
              "https://j9a510.p.ssafy.io:/api/users/firebase/50",
              formData,
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            );

            console.log(currentToken);
          } else {
            console.log("토큰 없습니다");
          }
        } catch (error) {
          console.log("알림 설정 필요", error);
        }
      }
    }

    requestAndSetToken();
  }, []);

  // export const token = await getToken(messaging, {
  //   vapidKey: process.env.REACT_APP_VAPID_KEY,
  // });
  // console.log(token);
}
export default FirebaseComponent;
