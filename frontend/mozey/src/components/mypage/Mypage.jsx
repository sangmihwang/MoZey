import { useEffect, useState } from "react";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";

const Main = () => {
    return (
        <S.Wrap>
            <S.ProfileImage>
                {/* <img src={} alt={"프로필 이미지"} /> */}
            </S.ProfileImage>
            <S.Name>
                <h2>이름</h2>
            </S.Name>
            <S.CampusInfo>
                <h2>캠퍼스 | 9기 | 5반</h2>
            </S.CampusInfo>
            <S.CoinInfo>
                <h2>보유 코인</h2>
            </S.CoinInfo>
        </S.Wrap>
    );
};

const S = {
    Wrap: styled.div`
    width: 100%;
    background: ${({ theme }) => theme.color.background};
    text-align: center;
  `,
    Name: styled.div`
  display: inline-block;
  `,
    ProfileImage: styled.div`
    display: inline-block;
    margin: 0 auto;
    > img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  `,
    CampusInfo: styled.div`
    margin-top: 20px;
  `,
    CoinInfo: styled.div`
    margin-top: 20px;
  `,
};

export default Main;