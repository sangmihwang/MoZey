import React from "react";
import styled from "styled-components";
import * as components from "components";
import QuestionImage from "assets/images/icon-question-default.png";

const Question = () => {
  return (
    <S.Wrap>
      <S.ImageBox>
        <img src={QuestionImage} alt="질문이미지" />
      </S.ImageBox>
      <S.QuestionContent>
        자율 프로젝트를 같이 하고 싶은 사람은?
      </S.QuestionContent>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    width: 300px;
    height: 280px;
    padding: 10px 0;
    margin: 12px;
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
    font-weight: 1000;
    padding: 20px;
    text-align: center;
  `,
};

export default Question;
