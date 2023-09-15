import React, { Component } from "react";
import firebase from "./firebase";
import { messaging } from "./firebase";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log("asdas");
    console.log(messaging);
    // const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        // 등록토큰받기
        return messaging.getToken();
      })
      .then((token) => {
        // 토큰 출력
        console.log("Token : ", token);
      })
      .catch(() => {
        console.log("error");
      });
  }
  render() {
    return <div>asdasdasdtest</div>;
  }
}
