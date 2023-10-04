import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as components from "components";
import { MdAccountCircle } from "react-icons/md";
import { BsCoin } from "react-icons/bs";
import axios from 'axios';

const MessageInfo = ({ dataforMessageInfo, selectedInfo }) => {
  console.log("dataforMessageInfo:", dataforMessageInfo);
  const [secretUserData, setSecretUserData] = useState([]);
  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) return null;
  
    const user = JSON.parse(userInfo);
    return user.state?.User || {};
  };
  

  const userData = getUserFromLocalStorage();
  const isSub = userData.sub_yn

  useEffect(() => {
    console.log("구독여부?", isSub)
    
    // 비 구독자인 경우
    if (isSub === 0 && dataforMessageInfo.userId) {
      axios.get(`https://j9a510.p.ssafy.io/api/users/extract/${dataforMessageInfo.userId}`)
        .then(response => {
          setSecretUserData(response.data);
          console.log('비구독자 데이터조회결과',response.data)
        })
        .catch(error => {
          console.log("비 구독자 데이터조회 에러", error);
        })
    } else if (isSub === 1 && dataforMessageInfo.userId) {
      if (selectedInfo.type === "class") {
        axios.get(`https://j9a510.p.ssafy.io/api/users/extract/${dataforMessageInfo.userId}/select/${selectedInfo.type}`)
          .then(response => {
            setSecretUserData(response.data);
          })
          .catch(error => {
            console.log("구독자 반 데이터조회 에러", error);
          });
      } else if (selectedInfo.type === "location" && selectedInfo.value) {
        console.log(selectedInfo.value)
        axios.get(`https://j9a510.p.ssafy.io/api/users/extract/${dataforMessageInfo.userId}/location/${selectedInfo.value}`)
          .then(response => {
            console.log("구독자 이름조회", response.data)
            setSecretUserData(response.data);
          })
          .catch(error => {
            console.log("구독자 위치 데이터조회 에러", error);
          });
      }

    }

  }, [dataforMessageInfo, isSub, selectedInfo]);

  
  return (
    <S.Wrap onClick={(e) => e.stopPropagation()}>
      <S.FindoutBox>
        <S.StyledMdAccountCircle />
        <S.Question>
          {dataforMessageInfo.qtnContent} 에 {userData?.username}님을 선택한 사람은
        </S.Question>
        {isSub === 1 && selectedInfo.type === "class" && (
          <S.ClassContainer>
            <S.ClassLabel>특화 반 정보:</S.ClassLabel>
            <S.ClassBox>
              {secretUserData.data?.value}
            </S.ClassBox>
          </S.ClassContainer>
        )}
        <S.FriendName>
          <S.NameBox>
            {selectedInfo.type === "location" && secretUserData.data?.location === 1 ? secretUserData.data?.consonant : 'X'}
          </S.NameBox>
          <S.NameBox>
            {selectedInfo.type === "location" && secretUserData.data?.location === 2 ? secretUserData.data?.consonant : 'X'}
          </S.NameBox>
          <S.NameBox>
            {selectedInfo.type === "location" && secretUserData.data?.location === 3 ? secretUserData.data?.consonant : 'X'}
          </S.NameBox>
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
  ClassBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.yellow};
    padding: 8px;
    margin-left: 8px;  // 여기에 마진 추가하여 라벨과 간격 주기
    width: 40px;
    text-align: center;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
  ClassLabel: styled.span`
    font-weight: 600;
  `,
  ClassContainer: styled.div`
    display: flex;
    align-items: center;
  `,
};

export default MessageInfo;
