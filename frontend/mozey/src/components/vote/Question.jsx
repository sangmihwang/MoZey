import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as components from "components";
import QuestionImage from "assets/images/icon-question-default.png";

const Question = ({
  questionsData,
  oneSelectedQuestionId,
  oneSelectedQuestionContent,
  currentIndex,
}) => {
  // console.log("데잌터", questionsData);

  useEffect(() => {
    if (questionsData.length > 0) {
      const selectedQuestionIndex = oneSelectedQuestionId;
      const selectedQuestion = questionsData[selectedQuestionIndex];
  
      if (selectedQuestion) {  // 선택된 질문이 있는지 확인하는 과정 추가
        oneSelectedQuestionId(selectedQuestion.qtnId);
        oneSelectedQuestionContent(selectedQuestion.qtnContent);
      }
    }
  }, [questionsData, oneSelectedQuestionId, oneSelectedQuestionContent]);

  return (
    <S.Wrap>
      <S.ImageBox>
        <img
          src={questionsData[currentIndex]?.image 
              ? `https://j9a510.p.ssafy.io/api/v1/image/${questionsData[currentIndex].image}?option=vote` 
              : QuestionImage}
          alt="질문이미지"
        />
      </S.ImageBox>
      <S.QuestionContent>
        {questionsData[currentIndex] && questionsData[currentIndex].qtnContent}
      </S.QuestionContent>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 340px;
    height: 280px;
    padding: 10px 0;
    margin: 30px 12px 12px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
  ImageBox: styled.div`
    display: flex;
    justify-content: center;
    margin: 20px auto;
    padding: 0 20px;
    img {
      width: 120px;
    }
  `,
  QuestionContent: styled.div`
    margin: 8px auto;
    font-size: ${({ theme }) => theme.fontsize.title2};
    line-height: ${({ theme }) => theme.lineheight.quiztitle};
    font-weight: 700;
    word-break: keep-all;
    padding: 20px 30px;
    text-align: center;
  `,
};

export default Question;
