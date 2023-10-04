import { useEffect, useState } from "react";
import useStore from "../../store/userInfoStore";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import ProfileImage from "assets/images/icon-profileImg-default.svg";
import pointImage from "assets/images/icon-point.png";
import coin1Image from "assets/images/icon-coin1.png";
import coin2Image from "assets/images/icon-coin2.png";

const Main = () => {
  const userInfo = useStore((state) => state.User);

  // const [userProfileImage, setUserProfileImage] = useState(null);
  // const [userName, setUserName] = useState(null);
  // const [campus, setCampus] = useState(null);
  // const [term, setTerm] = useState(null);
  // const [unit, setUnit] = useState(null);
  // const [point, setPoint] = useState(null);
  // const [coin1, setCoin1] = useState(null);
  // const [coin2, setCoin2] = useState(null);

  // useEffect(() => {
  //   const userInfo = async () => {
  //     try {
  //       const email = userInfo.email;
  //       axios.get("https://j9a510.p.ssafy.io/api/users/info/${email}")
  //       .then((data) => {
  //         if(data.data.message === "정보 조회 완료"){
  //           setUserProfileImage(data.data.data.img);
  //           setUserName(data.data.data.userName);
  //           setCampus(data.data.data.campus);
  //           setTerm(data.data.data.term);
  //           setUnit(data.data.data.unit);
  //           setPoint(data.data.data.point);
  //           setCoin1(data.data.data.coin1);
  //           setCoin2(data.data.data.coin2);
  //         }
  //       }).catch((e) => {
  //         console.log("유저 정보 조회 실패", e);
  //       })
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   userInfo();
  // }, []);

  return (
    <S.Wrap>
      <S.ProfileImage>
        <S.ProfileBox>
          {userInfo.img === null ? (
            <img src={ProfileImage} alt="profile" />
          ) : (
            <img src={userInfo.img} alt="profile" />
          )}
        </S.ProfileBox>
      </S.ProfileImage>
      <S.Info>
        <S.Name>
          <h2>{userInfo.username}</h2>
          <button>구독</button>
        </S.Name>
        <S.CampusInfo>
          <h2>
            {userInfo.campus}캠퍼스 | {userInfo.term}기 | {userInfo.unit}반
          </h2>
        </S.CampusInfo>
        <S.CoinInfo>
          <img src={pointImage} alt="point" />
          <p>{userInfo.point}</p>
          <img src={coin1Image} alt="coin1" />
          <p>{userInfo.coin1}</p>
          <img src={coin2Image} alt="coin2" />
          <p>{userInfo.coin2}</p>
        </S.CoinInfo>
      </S.Info>
    </S.Wrap>
  );

  // return (
  //   <S.Wrap>
  //     <S.ProfileImage>
  //       <S.ProfileBox>
  //         <img src={ProfileImage} alt="profile" />
  //       </S.ProfileBox>
  //     </S.ProfileImage>
  //     <S.Info>
  //       <S.Name>
  //         <h2>조윤상</h2>
  //         <button>구독</button>
  //       </S.Name>
  //       <S.CampusInfo>
  //         <h2>서울캠퍼스 | 9기 | 5반</h2>
  //       </S.CampusInfo>
  //       <S.CoinInfo>
  //         <img src={pointImage} alt="point" />
  //         <p>100</p>
  //         <img src={coin1Image} alt="coin1" />
  //         <p>25</p>
  //         <img src={coin2Image} alt="coin2" />
  //         <p>35</p>
  //       </S.CoinInfo>
  //     </S.Info>
  //   </S.Wrap>
  // );
};

const S = {
  Wrap: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 87.7%;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    padding: 7%;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    text-align: center;
  `,
  ProfileImage: styled.div`
    display: inline-block;
  `,
  ProfileBox: styled.div`
    width: 20yw;
    height: 20vw;
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
    margin-left: 9.35%;
  `,
  Name: styled.div`
    color: #040404;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    > button {
      background-color: ${({ theme }) => theme.color.red};
      color: ${({ theme }) => theme.color.background};
      border-radius: 10px;
      width: 50px;
      height: 20px;
      font-weight: bold;
    }
  `,
  CampusInfo: styled.div`
    margin-top: 10px;
    > h2 {
      color: #6d675b;
    }
  `,
  CoinInfo: styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    > img {
      width: 20px;
    }
    > p {
      margin-right: 10px;
    }
  `,
};

export default Main;
