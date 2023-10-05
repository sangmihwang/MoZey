import React from "react";
import styled from "styled-components";
import QuestionImage from "assets/images/icon-question-default.png";

const MessageContent = ({ messageData }) => {
  const userInfo = localStorage.getItem("userInfo");
  const user = JSON.parse(userInfo);
  // console.log('메세지데이터:',messageData)
  // console.log(messageData.time)

  const timeAgo = (unixtimeInSeconds) => {
    const timestampInMillis = unixtimeInSeconds * 1000;
  
    const currentTime = new Date().getTime();
  
    const timeDiff = currentTime - timestampInMillis;
  
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
  
    if (timeDiff < minute) {
      return "방금";
    } else if (timeDiff < hour) {
      return Math.floor(timeDiff / minute) + "분 전";
    } else if (timeDiff < day) {
      return Math.floor(timeDiff / hour) + "시간 전";
    } else {
      return Math.floor(timeDiff / day) + "일 전";
    }
  };

  return (
    <S.Wrap>
      <S.ProfileInfoBox>
        <S.ProfilePic>
          <img src={QuestionImage} alt="프로필" />
        </S.ProfilePic>
        <S.ProfileTextContainer>
          <S.ProfileInfo>
            {messageData.campus}캠퍼스 | {messageData.term}기 |{" "}
            {messageData.gender === "M" ? "남자" : "여자"}
          </S.ProfileInfo>
          <S.SentDate>{timeAgo(messageData.time)}</S.SentDate>
        </S.ProfileTextContainer>
      </S.ProfileInfoBox>
      <S.Message>
        {messageData.qtnContent}에 {user.state?.User.username}님을 선택했습니다
      </S.Message>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div``,
  ProfileInfoBox: styled.div`
    display: flex;
    align-items: flex-start;
  `,

  ProfileTextContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  ProfilePic: styled.div`
    padding: 20px 12px 6px 20px;
    img {
      width: 32px;
      height: 34px;
      /* box-shadow: ${({ theme }) => theme.shadow.card}; */
    }
  `,
  ProfileInfo: styled.div`
    padding: 22px 0 2px 8px;
    font-size: ${({ theme }) => theme.fontsize.content};
    font-weight: 1000;
  `,
  SentDate: styled.div`
    padding: 4px 0 4px 8px;
    font-size: ${({ theme }) => theme.fontsize.subcontent};
  `,
  Message: styled.div`
    padding: 4px 20px;
    font-size: ${({ theme }) => theme.fontsize.content};
    font-weight: 500;
    line-height: ${({ theme }) => theme.lineheight.title2};
  `,
};

export default MessageContent;
