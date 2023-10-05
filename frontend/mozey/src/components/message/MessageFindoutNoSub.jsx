import React, { useState } from "react";
import styled from "styled-components";
import * as components from "components";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidCoinStack } from "react-icons/bi";
import axios from "axios";

const MessageFindoutNoSub = ({ dataforMessageInfo, onDataRequest }) => {
  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) return null;

    const userState = JSON.parse(userInfo);
    return userState.state?.User || {};
  };

  const userData = getUserFromLocalStorage();

  const [showModal, setShowModal] = useState(false);

  const handleDataRequest = async () => {
    try {
      const response = await axios.get(`https://j9a510.p.ssafy.io/api/users/info/${userData.email}`);
      console.log(response.data)
      if (response.data.coin1 >= 10) {
        setShowModal(true);
      } else {
        alert("coin1 잔액이 부족합니다.");
      }
    } catch (error) {
      console.error("coin1 조회 중 오류 발생:", error);
    }
    setShowModal(true);
  };

  const handleConfirm = async () => {
    setShowModal(false);
    const userId = userData.id; // 로컬 스토리지 객체에 'id' 속성이 사용자 ID를 가리킨다고 가정합니다.

    const requestBody = {
      "fromCoinName" : "None",
      "toCoinName" : "coin1",
      "minusCoinAmount" : 10,
      "plusCoinAmount" : 0
    };

    try {
      const response = await axios.post(`https://j9a510.p.ssafy.io/api/coins/exchange/${userId}`, requestBody);
      
      if(response.status === 200) {
        onDataRequest();
      } else {
      }

    } catch (error) {
      console.error("POST 요청 중 오류 발생:", error);
    }
    onDataRequest();
  };

  return (
    <S.Wrap onClick={(e) => e.stopPropagation()}>
      <S.FindoutBox>
        <S.StyledMdAccountCircle />
        <S.Question>
          {dataforMessageInfo.qtnContent}에 {userData.username}님을 선택한
          사람의 정보를 확인하시겠습니까?
        </S.Question>
        <S.FriendName onClick={handleDataRequest}>
          <S.StyledBiSolidCoinStack />
          10 확인
        </S.FriendName>
      </S.FindoutBox>
      {showModal && (
        <S.ModalOverlay>
          <S.Modal>
            <S.ModalContent>
              포인트를 사용해 정보를 확인하시겠습니까?
            </S.ModalContent>
            <S.ConfirmButton onClick={handleConfirm}>확인</S.ConfirmButton>
          </S.Modal>
        </S.ModalOverlay>
      )}
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
    background-color: ${({ theme }) => theme.color.red};
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    color: ${({ theme }) => theme.color.white};
    transition: background-color 0.3s;
    &:hover {
      border: 1px solid ${({ theme }) => theme.color.red};
      color: ${({ theme }) => theme.color.red};
      background-color: ${({ theme }) => theme.color.white};
    }
  `,
  StyledMdAccountCircle: styled(MdAccountCircle)`
    color: ${({ theme }) => theme.color.red};
    width: 100px;
    height: 100px;
    margin: 4px;
    &:hover {
      color: ${({ theme }) => theme.color.red};
    }
  `,
  Question: styled.div`
    margin: 10px;
    line-height: ${({ theme }) => theme.lineheight.title1};
  `,
  StyledBiSolidCoinStack: styled(BiSolidCoinStack)`
    font-size: ${({ theme }) => theme.fontsize.title3};
    margin-left: 4px;
    margin-right: 2px;
  `,
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  `,
  Modal: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    padding: 10px 20px;
    border-radius: 10px;
    width: 94%;
    height: 60%;
    min-height: 200px;
    max-width: 500px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `,
  ModalContent: styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.fontsize.title2};
    line-height: ${({ theme }) => theme.lineheight.quiztitle};
    font-weight: 800;
    margin: 20px;
  `,
  ConfirmButton: styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.red};
      color: ${({ theme }) => theme.color.red};
    }
  `,
};

export default MessageFindoutNoSub;
