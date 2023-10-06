import React, { useState } from "react";
import styled from "styled-components";
import * as components from "components";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidCoinStack } from "react-icons/bi";
import { TbStarFilled, TbDiamondFilled } from "react-icons/tb";
import axios from "axios";

const MessageFindoutSub = ({ dataforMessageInfo, onSelectInfo }) => {
  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) return null;

    const userState = JSON.parse(userInfo);
    return userState.state?.User || {};
  };

  const userData = getUserFromLocalStorage();

  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  // 코인 사용 부분
  const [coinType, setCoinType] = useState(null);
  const [coinAmount, setCoinAmount] = useState(null);

  const InfoSelect = (type, coin, amount, value = null) => {
    setSelectedType(type);
    setSelectedValue(value);
    setCoinType(coin);
    setCoinAmount(amount);
    handleDataRequest(coin, amount);
  };

  const handleDataRequest = async (coin, amount) => {
    try {
      const response = await axios.get(`https://j9a510.p.ssafy.io/api/users/info/${userData.email}`);
      console.log(response.data);

      if (coin === "Coin1" && response.data.coin1 >= amount) {
        setShowModal(true);
      } else if (coin === "Coin2" && response.data.coin2 >= amount) {
        setShowModal(true);
      } else {
        alert(`${coin} 잔액이 부족합니다.`);
      }
    } catch (error) {
      console.error(`${coin} 조회 중 오류 발생:`, error);
    }
  };

  const handleConfirm = async () => {
    setShowModal(false);
    const userId = userData.id;

    const requestBody = {
      "fromCoinName" : coinType,
      "toCoinName" : "None",
      "minusCoinAmount" : coinAmount,
      "plusCoinAmount" : 0
    };

    try {
      const response = await axios.post(`https://j9a510.p.ssafy.io/api/coins/exchange/${userId}`, requestBody);
      
      if(response.status === 200) {
        onSelectInfo(selectedType, selectedValue);
        const updatedUserInfo = response.data;
        const currentLocalStorageData = JSON.parse(localStorage.getItem('userInfo'));
        currentLocalStorageData.state.User.point = updatedUserInfo.point;
        localStorage.setItem('userInfo', JSON.stringify(currentLocalStorageData));
      } else {
        console.log('200이 반환되지않음')
      }
    } catch (error) {
      console.error("POST 요청 중 오류 발생:", error);
    }
    onSelectInfo(selectedType, selectedValue);
  };

  return (
    <S.Wrap onClick={(e) => e.stopPropagation()}>
      <S.FindoutBox>
        <S.StyledMdAccountCircle />
        <S.Question>
          {dataforMessageInfo.qtnContent}에 {userData.username}님을 선택한
          사람의 정보를 확인하시겠습니까?
        </S.Question>
        <S.FriendInfo>
          <S.FriendInfoTop>
            {/* <S.Campus>
              캠퍼스
              <S.CampusCheck>
                <S.StyledBsCoin />
                10
              </S.CampusCheck>
            </S.Campus> */}
            <S.Class onClick={() => InfoSelect("class", "Coin1", 50)}>
              반
              <S.ClassCheck>
                <S.StyledBiSolidCoinStack />
                50
              </S.ClassCheck>
            </S.Class>
          </S.FriendInfoTop>
          <S.FriendInfoBottom>
            <S.Name>
              이름
              <S.NameCheck onClick={() => InfoSelect("location", "Coin2", 30, 1)}>
                <S.StyledBiSolidCoinStack />
                30
              </S.NameCheck>
              <S.NameCheck onClick={() => InfoSelect("location", "Coin2", 30, 2)}>
                <S.StyledBiSolidCoinStack />
                30
              </S.NameCheck>
              <S.NameCheck onClick={() => InfoSelect("location", "Coin2", 30, 3)}>
                <S.StyledBiSolidCoinStack />
                30
              </S.NameCheck>
            </S.Name>
          </S.FriendInfoBottom>
        </S.FriendInfo>
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
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    padding: 16px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    width: 85%;
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
  FriendInfo: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    padding: 8px;
    width: 100%;
    border-radius: 10px;
  `,
  FriendInfoTop: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
  `,
  FriendInfoBottom: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 6px;
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
  StyledBiSolidCoinStack: styled(BiSolidCoinStack)`
    font-size: ${({ theme }) => theme.fontsize.title2};
    margin: 2px;
    color: ${({ theme }) => theme.color.white};
    transition: color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
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
  Campus: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
  `,
  Class: styled.div`
    display: flex;
    margin-left: 10px; // 마진추가했음
    flex-direction: row;
    align-items: center;
    font-weight: 600;
  `,
  Name: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `,

  ClassCheck: styled.button`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.blue};
    border: 1px solid ${({ theme }) => theme.color.blue};
    padding: 4px 8px;
    margin-left: 14px;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    color: ${({ theme }) => theme.color.white};
    font-weight: 400;
    transition: background-color 0.3s;
    &:hover {
      color: ${({ theme }) => theme.color.blue};
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.blue};
    }
  `,
  NameCheck: styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.red};
    padding: 4px 8px;
    margin-left: 8px;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    color: ${({ theme }) => theme.color.white};
    font-weight: 400;
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
};

export default MessageFindoutSub;
