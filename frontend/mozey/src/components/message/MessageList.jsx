import React from "react";
import styled from "styled-components";
import * as components from "components";

const MessageList = () => {
  return (
    <S.Wrap>
      <S.MessageBox>
        <components.MessageContent></components.MessageContent>
      </S.MessageBox>
      <S.MessageBox>
        <components.MessageContent></components.MessageContent>
      </S.MessageBox>
      <S.MessageBox>
        <components.MessageContent></components.MessageContent>
      </S.MessageBox>
      <S.MessageBox>
        <components.MessageContent></components.MessageContent>
      </S.MessageBox>
      <S.MessageBox>
        <components.MessageContent></components.MessageContent>
      </S.MessageBox>
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
    height: 114px;
    margin: 8px auto 18px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
};

export default MessageList;
