import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as utils from "utils"; // URL constants를 사용하기 위해 import

const BottomNav = () => {
  return (
    <S.NavWrapper>
      <S.NavItem>
        <Link to={utils.URL.MESSAGE_BOX.MAIN}>
          <img src="images/Messagebox.svg" alt="Messagebox" />
        </Link>
      </S.NavItem>
      <S.NavItem>
        <Link to={utils.URL.VOTE.MAIN}>
          <img src="images/Vote.svg" alt="Vote" />
        </Link>
      </S.NavItem>
      <S.NavItem>
        <Link to={utils.URL.EXCHANGES.MAIN}>
          <img src="images/Exchanges.svg" alt="Exchange" />
        </Link>
      </S.NavItem>
      <S.NavItem>
        <Link to={utils.URL.NEWS.MAIN}>
          <img src="images/NewsQuiz.svg" alt="NewsQuiz" />
        </Link>
      </S.NavItem>
      <S.NavItem>
        <Link to={utils.URL.HOME.MAIN}>
          <img src="images/Mypage.svg" alt="Mypage" />
        </Link>
      </S.NavItem>
    </S.NavWrapper>
  );
};

const S = {
    NavWrapper: styled.nav`
      overflow: hidden;
      display: flex;
      justify-content: space-between;
    `,
    NavItem: styled.div`
      text-align: center;
      flex: 1;
      width: 20%;
      height: 45px;
      line-height: 45px;
    `
  };

export default BottomNav;
