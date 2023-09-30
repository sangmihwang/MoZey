import React, { useEffect } from "react";
import styled from "styled-components";
import * as components from "components";

const Vote = () => {
  return (
    <div>
      <S.Wrap>
        <S.QuestionBox>
          <components.Question></components.Question>
        </S.QuestionBox>
        <S.CandidatesBox>
          <components.Candidates></components.Candidates>
        </S.CandidatesBox>
      </S.Wrap>
    </div>
  );
};

const S = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.background};
  `,
  QuestionBox: styled.div`
    margin: 24px 0;
  `,
  CandidatesBox: styled.div``,
};

export default Vote;
