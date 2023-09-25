import { useEffect, useState } from "react";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import ProfileImage from "assets/images/icon-profileImg-default.svg"

const Main = () => {
  return (
    <S.Wrap>
      <S.ProfileImage>
        <S.ProfileBox>
          <img src={ProfileImage} alt="profile" />
        </S.ProfileBox>
      </S.ProfileImage>
      <S.Info>
        <S.Name>
          <h2>이름</h2>
        </S.Name>
        <S.CampusInfo>
          <h2>서울캠퍼스 | 9기 | 5반</h2>
        </S.CampusInfo>
        <S.CoinInfo>
          <h2>보유 코인</h2>
        </S.CoinInfo>
      </S.Info>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 87.7%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    padding: 7%;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    text-align: center;
  `,
  ProfileImage: styled.div`
    display: inline-block;
    margin: auto;
  `,
  ProfileBox: styled.div`
    width: 10yw;
    height: 10vw;
    background: ${({ theme }) => theme.color.background};
    border-radius: 70%;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: bold;
  `,
  Name: styled.div`
    display: inline-block;
    font-size: 16px;
  `,
  CampusInfo: styled.div`
    margin-top: 20px;
  `,
  CoinInfo: styled.div`
    margin-top: 20px;
  `,
};

export default Main;