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
        {/* <a href='http://localhost:8000/oauth2/authorization/kakao'><img src={mozeyLogo} alt={"로고"} /></a> */}
        <a href='https://j9a510.p.ssafy.io/oauth2/authorization/kakao'><img src={mozeyLogo} alt={"로고"} /></a>
      </S.Logo>
      <S.ThinkerImage>
        <img src={thinkerLogo} alt={"thinker"} />
      </S.ThinkerImage>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(
      ${({ theme }) => theme.color.background2} 28%,
      ${({ theme }) => theme.color.background} 28%
    );

    text-align: center;
    padding-top: 100px;
    align-items: center;
  `,
  Logo: styled.div`
    height: 160px;
    margin: 30px auto;
  `,
  ThinkerImage: styled.div`
    align-self: center;
    width: 300px;
    margin: 30px auto;
    img {
      width: 100%;
      height: auto;
    }
  `,
};

export default Main;
