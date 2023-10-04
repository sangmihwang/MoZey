import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as components from "components";

const Vote = () => {
  const [noShuffleData, setNoShuffleData] = useState([]);
  const [questionsData, setQuestionsData] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [selectedQuestionContent, setSelectedQuestionContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://j9a510.p.ssafy.io/api/votes/questions`
        );
        setNoShuffleData(response.data.data);
        setQuestionsData(response.data.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <S.Wrap>
      <S.QuestionBox>
        <components.Question
          questionsData={questionsData}
          oneSelectedQuestionId={setSelectedQuestionId}
          oneSelectedQuestionContent={setSelectedQuestionContent}
        />
      </S.QuestionBox>
      <S.CandidatesBox>
        <components.Candidates
          questionsData={questionsData}
          selectedQuestionId={selectedQuestionId}
          selectedQuestionContent={selectedQuestionContent}
        />
      </S.CandidatesBox>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    background-color: ${({ theme }) => theme.color.background};
  `,
  QuestionBox: styled.div`
    margin: 24px 0;
  `,
  CandidatesBox: styled.div``,
};

export default Vote;
