import { useEffect, useState } from "react";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import mozeyLogo from "assets/images/mozey.png";
import kakaoLogin from "assets/images/kakao_login.png";

const LoginPage = () => {
  return (
    <S.Wrap>
      <S.Logo>
        <img src={mozeyLogo} alt={"로고"} />
      </S.Logo>
      <S.ThinkerImage>
        <a href="http://j9a510.p.ssafy.io:8000/oauth2/authorization/kakao">
          <img src={kakaoLogin} alt={"카카오로그인"} />
        </a>
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
    width: 260px;
    margin: 12em auto;
    img {
      width: 100%;
      height: auto;
    }
  `,
};

export default LoginPage;
