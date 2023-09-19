// Import the functions you need from the SDKs you need
import {
  initializeApp,
  getApp,
  getApps,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
import {
  getMessaging,
  getToken,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-messaging.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAPNKAqEr8kLRQfueq9kenMof56J4xLas0",
  authDomain: "tentenpjt.firebaseapp.com",
  projectId: "tentenpjt",
  storageBucket: "tentenpjt.appspot.com",
  messagingSenderId: "975139854050",
  appId: "1:975139854050:web:3ed3080493b4b4b760f0bb",
  measurementId: "G-1FMV97F8NY",
};
const firebase = initializeApp(firebaseConfig);
const appmessaging = getMessaging(firebase);
const fireStore = getFirestore(firebase);
const token = await getToken(appmessaging, {
  key: process.env.REACT_APP_VAPID_KEY,
});

export { fireStore };
