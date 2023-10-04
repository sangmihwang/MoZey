import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as components from "components";
import QuestionImage from "assets/images/icon-question-default.png";

const Question = ({ questionsData }) => {
  // 무작위로 배열 섞기 (Fisher-Yates shuffle 알고리즘)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // 배열 원소 교환
    }
    return array;
  }

  const randomQuestions = shuffleArray([...questionsData]).slice(0, 1);

  return (
    <S.Wrap>
      <S.ImageBox>
        <img src={QuestionImage} alt="질문이미지" />
      </S.ImageBox>
      {randomQuestions.map((question, index) => (
        <S.QuestionContent key={index}>{question.qtnContent}</S.QuestionContent>
      ))}
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
    line-height: ${({ theme }) => theme.lineheight.title1};
    font-weight: 700;
    padding: 20px 30px;
    text-align: center;
  `,
};

export default Question;
