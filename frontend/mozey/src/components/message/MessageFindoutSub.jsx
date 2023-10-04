import React from "react";
import styled from "styled-components";
import * as components from "components";
import { MdAccountCircle } from "react-icons/md";
import { BsCoin } from "react-icons/bs";

const MessageFindoutSub = ({dataforMessageInfo, onSelectInfo}) => {

  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) return null;
  
    const userState = JSON.parse(userInfo);
    return userState.state?.User || {};
  };
  
  const userData = getUserFromLocalStorage();

  const InfoSelect = (type, value = null) => {
    onSelectInfo(type, value);
    console.log(type, value)
  }

  return (
    <S.Wrap onClick={(e) => e.stopPropagation()}>
      <S.FindoutBox>
        <S.StyledMdAccountCircle />
        <S.Question>
          {dataforMessageInfo.qtnContent}에 {userData.username}님을 선택한 사람의 정보를 확인하시겠습니까?
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
            <S.Class onClick={() => InfoSelect("class")}>
              반
              <S.ClassCheck>
                <S.StyledBsCoin />
                10
              </S.ClassCheck>
            </S.Class>
          </S.FriendInfoTop>
          <S.FriendInfoBottom>
            <S.Name>
              이름
              <S.NameCheck onClick={() => InfoSelect("location", 1)}>
                <S.StyledBsCoin />
                10
              </S.NameCheck>
              <S.NameCheck onClick={() => InfoSelect("location", 2)}>
                <S.StyledBsCoin />
                10
              </S.NameCheck>
              <S.NameCheck onClick={() => InfoSelect("location", 3)}>
                <S.StyledBsCoin />
                10
              </S.NameCheck>
            </S.Name>
          </S.FriendInfoBottom>
        </S.FriendInfo>
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
  FriendInfo: styled.div`
    background-color: ${({ theme }) => theme.color.background};
    padding: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
  FriendInfoTop: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;
  `,
  FriendInfoBottom: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 6px;
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
  CampusCheck: styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.blue};
    padding: 8px;
    margin-left: 4px;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    color: ${({ theme }) => theme.color.white};
    font-weight: 400;
  `,
  ClassCheck: styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.blue};
    padding: 8px;
    margin-left: 4px;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    color: ${({ theme }) => theme.color.white};
    font-weight: 400;
  `,
  NameCheck: styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.red};
    padding: 8px;
    margin-left: 4px;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    color: ${({ theme }) => theme.color.white};
    font-weight: 400;
  `,
};

export default MessageFindoutSub;
