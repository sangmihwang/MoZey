import { useEffect, useState } from "react";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import mozeyLogo from "assets/images/mozey.png";
import thinkerLogo from "assets/images/thinker.png";

const Main = () => {
  return (
    <S.Wrap>
      <S.Logo>
        <div>
          <img src={mozeyLogo} alt={"로고"} />
        </div>
        <div>
          <img src={thinkerLogo} alt={"thinker"} />
        </div>
      </S.Logo>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    width: 100%;
    background: ${({ theme }) => theme.color.background};
    text-align: center;
  `,
  Logo: styled.div`
    display: inline-block;
    > div {
      display: block;
      margin: 0 auto; /* 가로 가운데 정렬 */
    }
  `,
};

export default Main;
