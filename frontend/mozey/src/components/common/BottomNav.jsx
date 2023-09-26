import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as utils from "utils";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <S.Wrapper>
      <S.StyledLink to={utils.URL.MESSAGE_BOX.MAIN} onClick={() => setActiveNav(1)}>
        <S.Circle className={activeNav === 1 ? "active" : ""}>
          <img src="images/Messagebox.svg" alt="Messagebox" />
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.VOTE.MAIN} onClick={() => setActiveNav(2)}>
        <S.Circle className={activeNav === 2 ? "active" : ""}>
          <img src="images/Vote.svg" alt="Vote" />
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.EXCHANGES.MAIN} onClick={() => setActiveNav(3)}>
        <S.Circle className={activeNav === 3 ? "active" : ""}>
          <img src="images/Exchanges.svg" alt="Exchange" />
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.NEWS.MAIN} onClick={() => setActiveNav(4)}>
        <S.Circle className={activeNav === 4 ? "active" : ""}>
          <img src="images/NewsQuiz.svg" alt="NewsQuiz" />
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.HOME.MAIN} onClick={() => setActiveNav(5)}>
        <S.Circle className={activeNav === 5 ? "active" : ""}>
          <img src="images/Mypage.svg" alt="Mypage" />
        </S.Circle>
      </S.StyledLink>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
  `,
  StyledLink: styled(Link)`
    text-align: center;
    flex: 1;
    width: 20%;
    height: 45px;
    line-height: 45px;
    display: flex;
    align-items: center; 
    justify-content: center;
    img {
      width: 20px;
      height: 20px;
    }
  `,
  Circle: styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF4C38;
    transition: background-color 0.3s;
    &.active {
      background-color: #3B82F6;
    }
  `
};

export default BottomNav;
