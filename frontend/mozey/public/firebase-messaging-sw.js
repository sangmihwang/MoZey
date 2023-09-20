/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
const firebaseConfig = {
  apiKey: "AIzaSyA3Zh2vcT_a72OXO-i4dnSiH-T3RFVtJVw",
  authDomain: "mozey-9078a.firebaseapp.com",
  projectId: "mozey-9078a",
  storageBucket: "mozey-9078a.appspot.com",
  messagingSenderId: "459687799588",
  appId: "1:459687799588:web:64ac2bb89bef8b407961b1",
  measurementId: "G-614QTGTCKN",
};

// REACT_APP_FB_API_KEY="AIzaSyA3Zh2vcT_a72OXO-i4dnSiH-T3RFVtJVw"
// REACT_APP_FB_AUTH_DOMAIN="mozey-9078a.firebaseapp.com"
// REACT_APP_FB_PROJECT_ID="mozey-9078a"
// REACT_APP_FB_STORAGE_BUCKET="mozey-9078a.appspot.com"
// REACT_APP_FB_MESSAGE_ID="459687799588"
// REACT_APP_FB_APP_ID="1:459687799588:web:64ac2bb89bef8b407961b1"
// REACT_APP_FB_MEASUREMENT_ID="G-614QTGTCKN"
// REACT_APP_VAPID_KEY="BAs-v9khkmkHZt3MBRqnWsmJpWvn7i9boikq8m-D54_q_n-27fw3mYJZEvGbAPUTVkcRE-Lsm4T6GWnVXxgqAvo"

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//   const notTitle = payload.notification.title;
//   const notOptions = {
//     body: payload.notification.body,
//     icon: "/logo192.png",
//   };
//   return self.ServiceWorkerRegistration.showNotification(notTitle, notOptions);
// });
