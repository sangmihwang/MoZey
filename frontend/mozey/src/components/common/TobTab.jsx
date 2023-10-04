import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { BsCoin } from "react-icons/bs";
import * as utils from "utils";

const TobTab = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [showsub, setShowsub] = useState(true);
  const [showTobTab, setShowTobTab] = useState(true);

  useEffect(() => {
    switch (location.pathname) {
      case utils.URL.HOME.MAIN:
        setShowsub(false);
        setShowTobTab(false);
        break;
      case utils.URL.MYPAGE.MAIN:
        setTitle("마이페이지");
        setSubtitle(
          "mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage  mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage  mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage mypage  mypage mypage mypage mypage mypage mypage mypage mypage"
        );
        setShowsub(false);
        setShowTobTab(true);
        break;
      case utils.URL.REQUEST.MAIN:
        setTitle("질문 신청");
        setSubtitle("request request request request request request request request request request request request request request request request request request request request request request");
        setShowsub(false);
        setShowTobTab(true);
        break;
      case utils.URL.EXCHANGE.MAIN:
        setTitle("환전소");
        setSubtitle(
          "coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale coinonSale"
        );
        setShowsub(true);
        setShowTobTab(true);
        break;
      case utils.URL.MESSAGE.MAIN:
        setTitle("메시지함");
        setSubtitle(
          "whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot"
        );
        setShowsub(true);
        setShowTobTab(true);
        break;
      case utils.URL.VOTE.MAIN:
        setTitle("투표");
        setSubtitle(
          "voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer"
        );
        setShowsub(true);
        setShowTobTab(true);
        break;
      case utils.URL.NEWS.MAIN:
        setTitle("뉴스");
        setSubtitle(
          "economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday economicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday EconomicNewsToday"
        );
        setShowsub(true);
        setShowTobTab(true);
        break;
      default:
        setShowsub(false);
        setShowTobTab(false);
        break;
    }
  }, [location.pathname]);

  return showTobTab ? (
    <S.Wrap>
      <S.TopSection>
        <S.Title>{title}</S.Title>
        {showsub && (
          <S.CoinAmount>
            <S.StyledBsCoin />
            100
            <S.StyledBsCoin />
            100
            <S.StyledBsCoin />
            100
          </S.CoinAmount>
        )}
      </S.TopSection>
      <S.FlowText>
        <S.Subtitle>
          <div className="flow-wrap">{subtitle}</div>
        </S.Subtitle>
      </S.FlowText>
    </S.Wrap>
  ) : null;
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
    display: flex;
    align-items: center;
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
    white-space: nowrap;
    overflow: hidden;
  `,

  FlowText: styled.div`
    .flow-text:hover .flow-wrap {
      animation-play-state: paused;
      cursor: pointer;
    }
    .flow-wrap {
      animation: textLoop 15s linear infinite;
    }
    @keyframes textLoop {
      0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      // 왼쪽으로 가야 빈공간이안생김.. !
      100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    }
  `,
};

export default TobTab;
