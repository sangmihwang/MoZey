import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCheck, FaRegNewspaper, FaRegUser } from "react-icons/fa6";
import { TbMessageHeart } from "react-icons/tb";
import { MdCurrencyExchange } from "react-icons/md";
import * as utils from "utils";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(5);

  return (
    <S.Wrapper>
      <S.StyledLink to={utils.URL.MESSAGE.MAIN} onClick={() => setActiveNav(1)}>
        <S.Circle className={activeNav === 1 ? "active" : ""}>
          <TbMessageHeart size={30} color="#FFF4DA" />
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.VOTE.MAIN} onClick={() => setActiveNav(2)}>
        <S.Circle className={activeNav === 2 ? "active" : ""}>
          <FaCheck size={30} color="#FFF4DA" />
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink
        to={utils.URL.EXCHANGE.MAIN}
        onClick={() => setActiveNav(3)}
      >
        <S.Circle className={activeNav === 3 ? "active" : ""}>
          <MdCurrencyExchange size={30} color="#FFF4DA" />
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.NEWS.MAIN} onClick={() => setActiveNav(4)}>
        <S.Circle className={activeNav === 4 ? "active" : ""}>
          <FaRegNewspaper size={30} color="#FFF4DA" />
        </S.Circle>
      </S.StyledLink>
      <S.StyledLink to={utils.URL.MYPAGE.MAIN} onClick={() => setActiveNav(5)}>
        <S.Circle className={activeNav === 5 ? "active" : ""}>
          <FaRegUser size={30} color="#FFF4DA" />
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
    height: 75px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    background-color: ${({ theme }) => theme.color.background};
  `,
  StyledLink: styled(Link)`
    text-align: center;
    flex: 1;
    width: 20%;
    height: 80px;
    line-height: 73px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Circle: styled.div`
    width: 54px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: ${({ theme }) => theme.shadow.strong};
    background-color: ${({ theme }) => theme.color.red};
    transition: background-color 0.3s;
    &.active {
      background-color: ${({ theme }) => theme.color.red};
      border-color: ${({ theme }) => theme.color.red};
      box-shadow:
        0 0 5px ${({ theme }) => theme.color.red},
        0 0 10px ${({ theme }) => theme.color.red},
        0 0 15px ${({ theme }) => theme.color.red},
        0 0 20px ${({ theme }) => theme.color.red};
    }
  `,
};

export default BottomNav;
