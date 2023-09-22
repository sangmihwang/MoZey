import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import * as utils from "utils";
import * as hooks from "hooks";
import * as api from "apis";
import * as components from "components";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <S.Wrap>
      <S.Main>
        <components.Main />
      </S.Main>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.background};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Main: styled.div``,
};

export default Layout;
