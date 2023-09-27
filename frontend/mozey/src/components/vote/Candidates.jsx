import React from "react";
import styled from "styled-components";
import * as components from "components";

const Candidates = () => {
  return (
    <S.Wrap>
      <S.CandidatesList>
        <S.CandidatesTop>
          <S.CandidateBox>a</S.CandidateBox>
          <S.CandidateBox>b</S.CandidateBox>
        </S.CandidatesTop>
        <S.CandidatesBottom>
          <S.CandidateBox>d</S.CandidateBox>
          <S.CandidateBox>c</S.CandidateBox>
        </S.CandidatesBottom>
      </S.CandidatesList>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background-color: ${({ theme }) => theme.color.background};
  `,
  CandidatesList: styled.div``,
  CandidatesTop: styled.div``,
  CandidatesBottom: styled.div``,
  CandidateBox: styled.div`
    width: 130px;
    background-color: ${({ theme }) => theme.color.white};
  `,
};

export default Candidates;
