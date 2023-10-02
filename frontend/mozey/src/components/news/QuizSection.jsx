import React from "react";
import styled from "styled-components";
import quizimg from "../../assets/images/icon-question-default.png";

const QuizSection = () => {
  const quizTitle = '오늘의 퀴즈 제목';
  const quizChoices = [
    "선택지 1",
    "선택지 2",
    "선택지 3",
    "선택지 4",
    "선택지 5",
  ];
  const quizType = "MULTIPLE_CHOICE"; // or 'OX'

  return (
    <S.Wrap>
      <S.Container>
        <ul>
          <S.QuizItem>
            <S.QuizImage src={quizimg} alt="Quiz Thumbnail" />
            <S.QuizTitle>{quizTitle}</S.QuizTitle>
            <S.ChoicesContainer>
              {quizType === "MULTIPLE_CHOICE" ? (
                quizChoices.map((choice, index) => (
                  <S.QuizChoice key={index}>{choice}</S.QuizChoice>
                ))
              ) : (
                <>
                  <S.QuizChoice>O</S.QuizChoice>
                  <S.QuizChoice>X</S.QuizChoice>
                </>
              )}
            </S.ChoicesContainer>
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
    justify-content: center;
    height: calc(100vh - 108px - 73px);
    padding: 0 3%;  
    background: ${({ theme }) => theme.color.background};
  `,
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 3% 3%;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    overflow-y: auto;
    flex: 1; // 남아있는 공간 다 차지
  `,
  QuizItem: styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  QuizImage: styled.img`
    width: 74px;
    height: 84px;
    margin-bottom: 10px;
    border-radius: 8px;
    object-fit: cover;
  `,
  QuizTitle: styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: #040404;
    margin-bottom: 30px;
    line-height: ${({ theme }) => theme.lineheight.title1};
  `,
  ChoicesContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px; // 각 선택지 사이의 간격
  `,
  QuizChoice: styled.button`
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    color: #333;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e0e0e0;
    }
  `,
};

export default QuizSection;
