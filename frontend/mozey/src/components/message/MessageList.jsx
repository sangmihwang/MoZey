import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as components from "components";
import { msgFindoutState } from "hooks";
import axios from "axios";
import { TbMoodSadDizzy } from "react-icons/tb";

const MessageList = () => {
  const { isMsgFindoutOpen, toggleMsgFindoutOpen } = msgFindoutState();
  const [messages, setMessages] = useState([]);
  const [dataforMessageInfo, setDataForMessageInfo] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(null);
  const [showMessageInfo, setShowMessageInfo] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({ type: null, value: null });

  useEffect(() => {
    const userData = getUserFromLocalStorage();

    axios
      .get(`https://j9a510.p.ssafy.io/api/message/${userData.id}`)
      .then((response) => {
        setMessages(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log("데이터 받아오기 에러", error);
      });

    if (userData.sub_yn === 1) {
      setIsSubscribed("sub");
    } else {
      setIsSubscribed("noSub");
    }
  }, []);

  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) return null;

    const userState = JSON.parse(userInfo);
    return userState.state?.User || {};
  };

  const handleSelectInfo = (type, value, shouldOpenModal) => {
    toggleMsgFindoutOpen();
    setSelectedInfo({ type, value });
    console.log(type, value, shouldOpenModal)
    // MessageInfo 모달 열기
    setShowMessageInfo(shouldOpenModal);
  };
  const onDataRequest = (shouldOpenModal) => {
    toggleMsgFindoutOpen();
    setSelectedInfo({ type: "location", value: null });
    // MessageInfo 모달 열기
    setShowMessageInfo(shouldOpenModal);
  };

  return (
    <S.Wrap>
      {messages.length > 0 ? (
        messages.map((messageData, index) => (
          <S.MessageBox
            key={index}
            onClick={() => {
              setDataForMessageInfo(messageData);
              toggleMsgFindoutOpen();
            }}
          >
            <components.MessageContent messageData={messageData} />
          </S.MessageBox>
        ))
      ) : (
        <S.EmptyMessage>
          <S.StyledTbMoodSadDizzy />
          아직 받은 메시지가 없어요
        </S.EmptyMessage>
      )}

      {isMsgFindoutOpen && (
        <S.ModalOverlay
          onClick={(e) => {
            e.stopPropagation();
            toggleMsgFindoutOpen();
          }}
        >
          {isSubscribed === "sub" ? (
            <components.MessageFindoutSub
              dataforMessageInfo={dataforMessageInfo} // 데이터 전달해주는 부분
              onSelectInfo={handleSelectInfo} // 구독자 고른 데이터 받아오기
            />
          ) : (
            <components.MessageFindoutNoSub
              dataforMessageInfo={dataforMessageInfo}
              onDataRequest={onDataRequest} // 비구독자 정보 열람 여부 데이터 받아오기
            />
          )}

          {/* <components.MessageInfo dataforMessageInfo={dataforMessageInfo} /> */}
        </S.ModalOverlay>
      )}

      {showMessageInfo && (
        <S.ModalOverlay
          onClick={(e) => {
            e.stopPropagation();
            setShowMessageInfo(false);
          }}
        >
          <components.MessageInfo
            dataforMessageInfo={dataforMessageInfo}
            selectedInfo={selectedInfo}
          />
        </S.ModalOverlay>
      )}
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background-color: ${({ theme }) => theme.color.background};
    padding: 12px 18px;
    min-height: 100vh;
  `,
  MessageBox: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 114px;
    margin: 0 auto 18px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
  EmptyMessage: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 80vh;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.gray};
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
  StyledTbMoodSadDizzy: styled(TbMoodSadDizzy)`
    color: ${({ theme }) => theme.color.gray};
    width: 200px;
    height: 200px;
  `,
};

export default MessageList;
