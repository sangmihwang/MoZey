import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as components from "components";
import { MdAccountCircle } from "react-icons/md";
import { BsCoin } from "react-icons/bs";
import axios from 'axios';

const MessageInfo = ({ dataforMessageInfo }) => {
  console.log("dataforMessageInfo:", dataforMessageInfo);
  const [secretUserData, setSecretUserData] = useState([]);
  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) return null;
  
    const user = JSON.parse(userInfo);
    return user.User;
  };
  

  const userData = getUserFromLocalStorage();


  useEffect(() => {
    // const isSub = getSubFromLocalStorage();
    const isSub = 0;

    // 비 구독자인 경우
    if (isSub === 0 && dataforMessageInfo.userId) {
      axios.get(`https://j9a510.p.ssafy.io/api/users/extract/${dataforMessageInfo.userId}`)
        .then(response => {
          setSecretUserData(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.log("비 구독자 데이터조회 에러", error);
        })
    }

  }, [dataforMessageInfo]);


  
  return (
    <S.Wrap onClick={(e) => e.stopPropagation()}>
      <S.FindoutBox>
        <S.StyledMdAccountCircle />
        <S.Question>
          {dataforMessageInfo.qtnContent} 에 {userData?.username}님을 선택한 사람은
        </S.Question>
        <S.FriendName>
        <S.NameBox>{secretUserData.data?.location === 1 ? secretUserData.data?.consonant : 'X'}</S.NameBox>
        <S.NameBox>{secretUserData.data?.location === 2 ? secretUserData.data?.consonant : 'X'}</S.NameBox>
        <S.NameBox>{secretUserData.data?.location === 3 ? secretUserData.data?.consonant : 'X'}</S.NameBox>
        </S.FriendName>
      </S.FindoutBox>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    position: fixed;
    background-color: ${({ theme }) => theme.color.background};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    padding: 20px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    width: 80%;
    max-width: 500px;
  `,
  FindoutBox: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    padding: 10px 12px 20px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
  FriendName: styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
  `,
  StyledMdAccountCircle: styled(MdAccountCircle)`
    color: ${({ theme }) => theme.color.red};
    width: 100px;
    height: 100px;
    margin: 4px;
  `,
  Question: styled.div`
    margin: 10px;
    line-height: ${({ theme }) => theme.lineheight.title1};
  `,
  NameBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.yellow};
    padding: 8px;
    margin: 0 4px;
    width: 40px;
    text-align: center;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
};

export default MessageInfo;
