import React, { useEffect } from "react";
import styled from "styled-components";
import * as components from "components";

const Main = () => {
  return (
    <div>
      <S.Wrap>
        <components.Mypage></components.Mypage>
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

export default Main;