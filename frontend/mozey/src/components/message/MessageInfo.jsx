import React from "react";
import styled from "styled-components";
import * as components from "components";
import { MdAccountCircle } from "react-icons/md";
import { BsCoin } from "react-icons/bs";

const MessageInfo = () => {
  return (
    <S.Wrap onClick={(e) => e.stopPropagation()}>
      <S.FindoutBox>
        <S.StyledMdAccountCircle />
        <S.Question>
          싸피 최고의 상견례 프리패스 상으로 조윤상님을 선택한 사람은
        </S.Question>
        <S.FriendName>
          <S.NameBox>ㄱ</S.NameBox>
          <S.NameBox>ㄱ</S.NameBox>
          <S.NameBox>ㄱ</S.NameBox>
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
    background-color: ${({ theme }) => theme.color.yellow};
    padding: 8px;
    margin: 0 4px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
};

export default MessageInfo;