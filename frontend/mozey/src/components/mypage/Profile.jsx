import { useEffect, useState } from "react";
import useStore from "../../store/userInfoStore";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import ProfileImage from "assets/images/icon-profileImg-default.svg";
import FirebaseComponent from "../../config/firebase";
import { BiSolidCoinStack } from "react-icons/bi";
import { TbStarFilled, TbDiamondFilled } from "react-icons/tb";

const Profile = () => {
  FirebaseComponent();
  const userInfo = useStore((state) => state.User);

  const [userProfile, setUserProfile] = useState([]);
  const [subInfo, setSubInfo] = useState(0);

  // 유저 정보 조회
  useEffect(() => {
    const loginUserInfo = async () => {
      try {
        const email = userInfo.email;
        axios
          .get(`https://j9a510.p.ssafy.io/api/users/info/${email}`)
          .then((data) => {
            setUserProfile(data.data);
          });
      } catch (e) {
        console.log(e);
      }
    };

    // 구독 확인
    const checkSub = async () => {
      try {
        const id = userInfo.id;
        axios
          .get(`https://j9a510.p.ssafy.io/api/users/members/${id}`)
          .then((data) => {
            if (data.data.message === "구독 확인 완료") {
              setSubInfo(1);
            }
          });
      } catch (e) {
        console.log(e);
      }
    }

    loginUserInfo();
    //checkSub();
  }, []);


  // 구독 신청
  const registerSub = () => {
    try {
      const id = userInfo.id;
      axios
        .put(`https://j9a510.p.ssafy.io/api/users/members/sub/${id}`)
        .then((data) => {
          if(data.data === "구독 완료"){
            alert("구독이 완료되었습니다");
            window.location.href = "/mypage";
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  // 구독 취소
  const unregisterSub = () => {
    try {
      const id = userInfo.id;
      axios
        .put(`https://j9a510.p.ssafy.io/api/users/members/unsub/${id}`)
        .then((data) => {
          if(data.data === "구독 취소 완료"){
            alert("구독이 취소되었습니다");
            window.location.href = "/mypage";
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

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
          {userProfile.sub_yn === 0
            ? (<button onClick={() => registerSub()}>구독</button>)
            : (<button onClick={() => unregisterSub()}>구독 취소</button>)
          }
        </S.Name>
        <S.CampusInfo>
          <h2>
            {userInfo.campus}캠퍼스 | {userInfo.term}기 | {userProfile.group}반
          </h2>
        </S.CampusInfo>
        <S.CoinInfo>
          {/* <img src={pointImage} alt="point" /> */}
          <S.StyledBiSolidCoinStack />
          <p>{userInfo.point}</p>
          {/* <img src={coin1Image} alt="coin1" /> */}
          <S.StyledTbStar />
          <p>{userInfo.coin1}</p>
          {/* <img src={coin2Image} alt="coin2" /> */}
          <S.StyledTbDiamond />
          <p>{userInfo.coin2}</p>
        </S.CoinInfo>
      </S.Info>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 90%;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    padding: 20px 28px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    text-align: center;
  `,
  ProfileImage: styled.div`
    display: flex;
    align-items: center;
  `,
  ProfileBox: styled.div`
    width: 20yw;
    height: 20vw;
    background: ${({ theme }) => theme.color.background};
    border-radius: 70%;
    overflow: hidden;
    > img {
      width: 80px;
      height: 100%;
      object-fit: cover;
    }
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: bold;
    margin-left: 26px;
    width: 100%;
  `,
  Name: styled.div`
    color: #040404;
    display: flex;
    justify-content: space-between;
    font-size: ${({ theme }) => theme.fontsize.title3};
    padding: 4px;
    display: flex;
    align-items: center;
    > button {
      background-color: ${({ theme }) => theme.color.red};
      color: ${({ theme }) => theme.color.background};
      border-radius: 10px;
      height: 24px;
      font-weight: bold;
      padding: 3px 10px 3px;
      margin-left: auto;
      font-size: ${({ theme }) => theme.fontsize.title4};
    }
  `,
  CampusInfo: styled.div`
    margin-top: 10px;
    padding: 0 4px;
    > h2 {
      color: #6d675b;
    }
  `,
  CoinInfo: styled.div`
    margin-top: 18px;
    display: flex;
    flex-direction: row;
    > img {
      width: 20px;
    }
    > p {
      margin-right: 6px;
    }
  `,
  StyledBiSolidCoinStack: styled(BiSolidCoinStack)`
    font-size: ${({ theme }) => theme.fontsize.title2};
    margin-left: 8px;
    margin-right: 4px;
    color: ${({ theme }) => theme.color.blue};
  `,
  StyledTbStar: styled(TbStarFilled)`
    font-size: ${({ theme }) => theme.fontsize.title2};
    margin-left: 8px;
    margin-right: 4px;
    color: ${({ theme }) => theme.color.yellow};
  `,
  StyledTbDiamond: styled(TbDiamondFilled)`
    font-size: ${({ theme }) => theme.fontsize.title2};
    margin-left: 8px;
    margin-right: 4px;
    color: ${({ theme }) => theme.color.red};
  `,
};

export default Profile;
