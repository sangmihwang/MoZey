import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as components from "components";
import QuestionImage from "assets/images/icon-question-default.png";

const Question = ({ questionsData, currentIndex }) => {
  // console.log("데잌터", questionsData);
  const [qContent, setQContent] = useState(null);
  const [qId, setQId] = useState(null);
  const [qImg, setQImg] = useState(null);

  useEffect(() => {
    if (questionsData.length > 0) {
      console.log(questionsData);
      const selectedQuestion = questionsData[currentIndex];
      console.log(selectedQuestion);
      if (selectedQuestion) {
        setQContent(selectedQuestion["qtnContent"]);
        setQId(selectedQuestion["image"]);
        setQImg(selectedQuestion["qtnId"]);
      }
    }
  }, [currentIndex]);

  return (
    <S.Wrap>
      <S.ImageBox>
        <img
          src={
            questionsData[currentIndex]?.image
              ? `https://j9a510.p.ssafy.io/api/v1/image/${questionsData[currentIndex].image}?option=vote`
              : QuestionImage
          }
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
