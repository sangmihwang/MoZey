import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as components from "components";

const Vote = () => {
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://j9a510.p.ssafy.io/api/votes/questions`
        );
        setQuestionsData(response.data.data);
        // console.log("퀘스ㅌ천:", response.data.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <S.Wrap>
      <S.QuestionBox>
        <components.Question questionsData={questionsData} />
      </S.QuestionBox>
      <S.CandidatesBox>
        <components.Candidates questionsData={questionsData} />
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
    height: 100%;
    background-color: ${({ theme }) => theme.color.background};
  `,
  QuestionBox: styled.div`
    margin: 24px 0;
  `,
  CandidatesBox: styled.div``,
};

export default Vote;
