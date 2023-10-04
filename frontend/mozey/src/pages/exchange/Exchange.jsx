import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as components from "components";
import useStore from "store";

const Exchange = () => {
  return (
    <div>
      <S.Wrap>
        <components.Exchange></components.Exchange>
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

export default Exchange;
