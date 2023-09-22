import { useEffect, useState } from "react";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <S.Wrap>
      <S.Logo>
        <img src={require("images/mozey.png").default} alt={"로고"} />
      </S.Logo>
      <S.Logo>
        <img src={require("images/thinker.png").default} alt={"thinker"} />
      </S.Logo>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    width: 100%;
    background: ${({ theme }) => theme.color.background};
  `,
  Logo: styled.div``,
};

export default Main;
