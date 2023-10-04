import React from "react";
import styled from "styled-components";
import * as components from "components";
import { MdAccountCircle } from "react-icons/md";
import { BsCoin } from "react-icons/bs";

const MessageFindoutNoSub = ({ dataforMessageInfo, onDataRequest }) => {
  
  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) return null;
  
    const userState = JSON.parse(userInfo);
    return userState.state?.User || {};
  };

  const userData = getUserFromLocalStorage();

  return (
    <S.Wrap onClick={(e) => e.stopPropagation()}>
      <S.FindoutBox>
        <S.StyledMdAccountCircle />
        <S.Question>
          {dataforMessageInfo.qtnContent}에 {userData.username}님을 선택한 사람의 정보를 확인하시겠습니까?
        </S.Question>
        <S.FriendName onClick={onDataRequest}>
          <S.StyledBsCoin />
          10 확인
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
    background-color: ${({ theme }) => theme.color.red};
    padding: 8px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    color: ${({ theme }) => theme.color.white};
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
  StyledBsCoin: styled(BsCoin)`
    font-size: ${({ theme }) => theme.fontsize.title3};
    margin-left: 4px;
    margin-right: 2px;
  `,
};

export default MessageFindoutNoSub;
