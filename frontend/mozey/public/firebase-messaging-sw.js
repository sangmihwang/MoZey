/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAPNKAqEr8kLRQfueq9kenMof56J4xLas0",
  authDomain: "tentenpjt.firebaseapp.com",
  projectId: "tentenpjt",
  storageBucket: "tentenpjt.appspot.com",
  messagingSenderId: "975139854050",
  appId: "1:975139854050:web:3ed3080493b4b4b760f0bb",
  measurementId: "G-1FMV97F8NY",
};
const firebaseApp = initializeApp(firebaseConfig);
getMessaging(firebaseApp);
