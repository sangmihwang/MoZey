import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

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
console.log(firebase);
const messaging = getMessaging(firebaseConfig);
console.log(messaging);
// firebase.initializeApp(firebaseConfig);
export { firebase, messaging };
