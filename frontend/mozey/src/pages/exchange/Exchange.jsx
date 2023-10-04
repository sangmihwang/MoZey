import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as components from "components";
import useStore from "store";
import voteAPI from "../../api/voteAPI";
const Exchange = () => {
  const qtnId = 1;
  const userId = 50;
  const chosen = 49;

  const handleClick = async () => {
    const requestData = {
      qtnId: qtnId,
      userId: userId,
      chosen: chosen,
    };
    try {
      const response = await voteAPI.postVoteNotification(requestData);
      console.log("Notification Data:", response.data);
    } catch (error) {
      console.log("에러", error);
    }
  };
  return (
    <div>
      <S.Wrap>
        <components.Exchange></components.Exchange>
        <button onClick={handleClick}>임시버튼</button>
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
