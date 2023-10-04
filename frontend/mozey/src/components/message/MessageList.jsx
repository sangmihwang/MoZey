import React, {useState, useEffect} from "react";
import styled from "styled-components";
import * as components from "components";
import { msgFindoutState } from "hooks";
import axios from 'axios';

const MessageList = () => {
  const { isMsgFindoutOpen, toggleMsgFindoutOpen } = msgFindoutState();
  console.log(isMsgFindoutOpen);
  const [ messages, setMessages ] = useState([]);
  const [ dataforMessageInfo, setDataForMessageInfo] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(null);

  useEffect(() => {
    const userData = getUserFromLocalStorage();

    axios.get(`https://j9a510.p.ssafy.io/api/message/${userData.id}`)
      .then(response => {
        setMessages(response.data.data);
        console.log(response.data.data)
      })
      .catch(error =>{
        console.log("데이터 받아오기 에러", error);
      })
    
    if (userData.sub_yn === 1) {
      setIsSubscribed('sub');
    } else {
      setIsSubscribed('noSub');
    }
  }, []);

  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) return null;
  
    const userState = JSON.parse(userInfo);
    return userState.state?.User || {};
  };

  return (
    <S.Wrap>
      {messages.length > 0 ? (
        messages.map((messageData, index) => (
          <S.MessageBox key={index} onClick={() => {
            setDataForMessageInfo(messageData);
            toggleMsgFindoutOpen();
          }}>
            <components.MessageContent messageData={messageData} />
          </S.MessageBox>
        ))
      ) : (
        <S.EmptyMessage>아직 받은 메시지가 없어요</S.EmptyMessage>
      )}

      {isMsgFindoutOpen && (
        <S.ModalOverlay
          onClick={(e) => {
            e.stopPropagation();
            toggleMsgFindoutOpen();
          }}
        >
          {isSubscribed === 'sub' ? 
            <components.MessageFindoutSub dataforMessageInfo={dataforMessageInfo} /> :
            <components.MessageFindoutNoSub dataforMessageInfo={dataforMessageInfo} />
          }
          
          {/* <components.MessageInfo dataforMessageInfo={dataforMessageInfo} /> */}
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
  EmptyMessage: styled.div`
    text-align: center;
    padding: 20px;
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
};

export default MessageList;
