import React from "react";
import styled from "styled-components";

const MessageList = () => {
  return (
    <S.Wrap>
      <S.MessageBox></S.MessageBox>
      <S.MessageBox></S.MessageBox>
      <S.MessageBox></S.MessageBox>
      <S.MessageBox></S.MessageBox>
      <S.MessageBox></S.MessageBox>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background-color: ${({ theme }) => theme.color.background};
    padding: 18px;
  `,
  MessageBox: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 108px;
    margin: 8px auto 18px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
};

export default MessageList;
