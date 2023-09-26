import React from "react";
import styled from "styled-components";
import { BsCoin } from "react-icons/bs";

const TobTab = () => {
  return (
    <S.Wrap>
      <S.TopSection>
        <S.Title>메시지함</S.Title>
        <S.CoinAmount>
          <S.StyledBsCoin />
          100
          <S.StyledBsCoin />
          100
          <S.StyledBsCoin />
          100
        </S.CoinAmount>
      </S.TopSection>
      <S.Subtitle>
        whatYougot whatYougot whatYougot whatYougot whatYougot whatYougot
      </S.Subtitle>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.background};
  `,
  TopSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.div`
    margin: 38px auto 10px 30px;
    font-size: ${({ theme }) => theme.fontsize.title1};
    font-weight: 1000;
  `,
  CoinAmount: styled.div`
    margin-top: 38px;
    margin-right: 30px;
    padding: 4px;
  `,
  StyledBsCoin: styled(BsCoin)`
    font-size: ${({ theme }) => theme.fontsize.title3};
    margin-left: 8px;
  `,
  Subtitle: styled.div`
    margin-top: 10px;
    padding: 6px;
    background-color: ${({ theme }) => theme.color.yellow};
    font-size: ${({ theme }) => theme.fontsize.content};
    word-spacing: 10px;
    font-weight: 500;
  `,
};

export default TobTab;
