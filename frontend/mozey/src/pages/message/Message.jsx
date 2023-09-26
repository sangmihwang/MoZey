import React, { useEffect } from "react";
import styled from "styled-components";
import * as components from "components";

const Message = () => {
  return (
    <div>
      <S.Wrap>
        <components.TobTab></components.TobTab>
        <components.MessageList></components.MessageList>
      </S.Wrap>
    </div>
  );
};

const S = {
  Wrap: styled.div`
    width: 100%;
    height: 100%;
  `,
};

export default Message;
