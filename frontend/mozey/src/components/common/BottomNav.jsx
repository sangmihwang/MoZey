import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegMessage, FaMoneyBillTransfer, FaRegNewspaper, FaPaperPlane, FaRegUser } from "react-icons/fa6";
import * as utils from "utils";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(5);

  return (
    <S.Wrapper>
      <S.StyledLink to={utils.URL.MESSAGE.MAIN} onClick={() => setActiveNav(1)}>
        <S.Circle className={activeNav === 1 ? "active" : ""}>
          <FaRegMessage size={30.55} color='#FFF4DA'/>
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.VOTE.MAIN} onClick={() => setActiveNav(2)}>
        <S.Circle className={activeNav === 2 ? "active" : ""}>
          <FaPaperPlane size={30.55} color='#FFF4DA' />
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.EXCHANGE.MAIN} onClick={() => setActiveNav(3)}>
        <S.Circle className={activeNav === 3 ? "active" : ""}>
          <FaMoneyBillTransfer size={30.55} color='#FFF4DA'/>
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.NEWS.MAIN} onClick={() => setActiveNav(4)}>
        <S.Circle className={activeNav === 4 ? "active" : ""}>
          <FaRegNewspaper size={30.55} color='#FFF4DA'/>
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.MYPAGE.MAIN} onClick={() => setActiveNav(5)}>
        <S.Circle className={activeNav === 5 ? "active" : ""}>
          <FaRegUser size={30.55} color='#FFF4DA' />
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
    z-index: 1000; 
    height: 73px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    background-color: #FFF4DA;
  `,
  StyledLink: styled(Link)`
    text-align: center;
    flex: 1;
    width: 20%;
    height: 73px;
    line-height: 73px;
    display: flex;
    align-items: center; 
    justify-content: center;
    img {
      width: 20px;
      height: 20px;
    }
  `,
  Circle: styled.div`
    width: 53.67px;
    height: 48px;
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
