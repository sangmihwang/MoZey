import React from "react";
import styled from "styled-components";

const MessageList = () => {
  return (
    <S.Wrap>
      <S.MessageBox></S.MessageBox>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div``,
  MessageBox: styled.div``,
};

export default MessageList;
