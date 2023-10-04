import React from "react";
import styled from "styled-components";
import * as components from "components";
import { msgFindoutState } from "hooks";

const MessageList = () => {
  const { isMsgFindoutOpen, toggleMsgFindoutOpen } = msgFindoutState();

  return (
    <S.Wrap>
      <S.MessageBox onClick={toggleMsgFindoutOpen}>
        <components.MessageContent />
      </S.MessageBox>
      <S.MessageBox onClick={toggleMsgFindoutOpen}>
        <components.MessageContent></components.MessageContent>
      </S.MessageBox>
      <S.MessageBox onClick={toggleMsgFindoutOpen}>
        <components.MessageContent></components.MessageContent>
      </S.MessageBox>
      <S.MessageBox onClick={toggleMsgFindoutOpen}>
        <components.MessageContent></components.MessageContent>
      </S.MessageBox>
      <S.MessageBox onClick={toggleMsgFindoutOpen}>
        <components.MessageContent></components.MessageContent>
      </S.MessageBox>

      {isMsgFindoutOpen && (
        <S.ModalOverlay
          onClick={(e) => {
            e.stopPropagation();
            toggleMsgFindoutOpen();
          }}
        >
          <components.MessageInfo />
        </S.ModalOverlay>
      )}
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
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  `,
};

export default MessageList;
