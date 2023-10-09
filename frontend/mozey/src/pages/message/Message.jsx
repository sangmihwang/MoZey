import React from "react";
import styled from "styled-components";
import * as components from "components";

const Message = () => {
  return (
    <div>
      <S.Wrap>
        <components.MessageList></components.MessageList>
      </S.Wrap>
    </div>
  );
};

const S = {
  Wrap: styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.background};
  `,
};

export default Message;
