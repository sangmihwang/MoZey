import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as components from "components";
import useStore from "store";
import voteAPI from "../../api/voteAPI";
const Exchange = () => {
  const userId = 49;
  const chosen = 50;
  const [fbToken, setfbToken] = useState(null);
  const [qtnId, setQtnId] = useState("1");
  const handleClick = async () => {
    const requestData = {
      qtnId: qtnId,
      userId: userId,
      chosen: chosen,
    };
    try {
      const response = await voteAPI.postVoteNotification(requestData);
      console.log("Notification Data:", response.data);
      setfbToken(response.data.data.fbToken);
      // setQtnId(response.data.data);
    } catch (error) {
      console.log("에러", error);
    }
  };
  const sendClick = async () => {
    const encodedToken = fbToken;
    const decodedToken = decodeURIComponent(encodedToken);
    console.log(decodedToken);
    console.log(fbToken);
    console.log(qtnId);
    const requestData = {
      targetUserId: decodedToken,
      title: qtnId,
      body: "이것은 새로운 알림 메시지입니다.",
    };
    try {
      const response = await voteAPI.sendNotification(requestData);
      console.log("Notification Data:", response);
    } catch (error) {
      console.log("에러", error);
    }
  };

  return (
    <div>
      <S.Wrap>
        <components.Exchange></components.Exchange>
        <button onClick={handleClick}>임시버튼</button>
        <button onClick={sendClick}>알람 보내보자..!</button>
      </S.Wrap>
    </div>
  );
};

const S = {
  Wrap: styled.div`
    width: 100%;
    height: 100%;
  `,
};

export default Exchange;
