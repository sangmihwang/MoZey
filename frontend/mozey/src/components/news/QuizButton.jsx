import React from "react";
import styled from "styled-components";

const QuizButton = ({ onClick, showPage }) => {
  
  const buttonText = showPage ? '오늘의 퀴즈 풀기' : '오늘의 뉴스 보기';

  return (
    <S.ButtonWrap>
      <S.QuizButton onClick={onClick}>{buttonText}</S.QuizButton>
    </S.ButtonWrap>
  );
};

const S = {
  ButtonWrap: styled.div`
    margin-top: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3%;
    background: ${({ theme }) => theme.color.background};
    padding: 20px 0;
  `,
  QuizButton: styled.button`
    background-color: ${({ theme }) => theme.color.yellow};
    color: #000;
    width: 95%;
    border-radius: 10px;
    padding: 10px 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    outline: none;  // 기본 focus 스타일 제거

    &:hover {
      background-color: ${({ theme }) => theme.color.darkgray};
    }

    &:active {
      background-color: ${({ theme }) => theme.color.darkgray};
    }

    &:focus {
      background-color: ${({ theme }) => theme.color.yellow};  // focus 상태에서 원래의 yellow로 유지
    }
  `,
};

export default QuizButton;
