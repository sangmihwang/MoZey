import React, { useEffect } from "react";
import styled from "styled-components";
import * as components from "components";
import Loading from "../../components/loading/Loading";

const Main = () => {
  return (
    <div>
      <S.Wrap>
        <components.Profile></components.Profile>
        <components.History></components.History>
        <components.Top3></components.Top3>
        <components.MyFriends></components.MyFriends>
        <components.RecommendFriends></components.RecommendFriends>
        <components.RequestQuestion></components.RequestQuestion>
        <components.Logout></components.Logout>
        <components.DeleteAccount></components.DeleteAccount>
      </S.Wrap>
      <Loading />
    </div>
  );
};

const S = {
  Wrap: styled.div`
    background: ${({ theme }) => theme.color.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export default Main;
