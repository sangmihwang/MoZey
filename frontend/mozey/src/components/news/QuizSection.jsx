import React from "react";
import styled from "styled-components";
import quizimg from "../../assets/images/icon-question-default.png"

const QuizSection = () => {
  const quizTitle = '오늘의 퀴즈 제목';
  const quizContent = `
    여기에 오늘의 퀴즈에 대한 설명이나 내용을 추가합니다.
  `;

  return (
    <S.Wrap>
      <S.Container>
        <ul>
          <S.QuizItem>
            <S.QuizImage src={quizimg} alt="Quiz Thumbnail" />
            <S.QuizTitle>{quizTitle}</S.QuizTitle>
            <S.QuizContent>{quizContent}</S.QuizContent>
          </S.QuizItem>
        </ul>
      </S.Container>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    margin-top: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3%;  // 내부 좌우 여백
    background: ${({ theme }) => theme.color.background}
  `,
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 3% 3%;  // 내부 상하, 좌우 여백
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    overflow-y: auto;
  `,
  QuizItem: styled.li`
    display: flex;
    flex-direction: column;
  `,
  QuizImage: styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    border-radius: 8px;
  `,
  QuizTitle: styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: #040404;
    margin-bottom: 10px;
    line-height: ${({ theme }) => theme.lineheight.title1};
  `,
  QuizContent: styled.p`
    color: ${({ theme }) => theme.color.darkgray};
    font-size: 14px;
    margin-top: 5px;
    line-height: ${({ theme }) => theme.lineheight.content};
  `,
};

export default QuizSection;
