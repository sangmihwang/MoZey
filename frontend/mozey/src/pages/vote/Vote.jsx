import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as components from "components";

const Vote = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [selectedQuestionContent, setSelectedQuestionContent] = useState(null);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://j9a510.p.ssafy.io/api/votes/questions`
        );
        // setNoShuffleData(response.data.data);
        setQuestionsData(response.data.data);
        // console.log(response.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchData();
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextQuestion = () => {
    console.log("지금상태", currentIndex, questionsData.length);
    if (currentIndex < questionsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === questionsData.length - 1) {
      console.log("들어왓나");
      setShowTimer(true);
    }
  };
  const TimerComponent = ({ duration }) => {
    const calculateTimeLeft = () => {
      const startTime = localStorage.getItem("startTime");
      const timePassed = Math.floor((new Date() - new Date(startTime)) / 1000);
      return duration - timePassed;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const startTime = localStorage.getItem("startTime");
      if (startTime) {
        setShowTimer(true);
      }
    }, []);

    useEffect(() => {
      if (timeLeft === duration) {
        localStorage.setItem("startTime", new Date().toISOString());
      }

      if (timeLeft > 0) {
        const intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
      } else {
        localStorage.removeItem("startTime");
        setShowTimer(false);
      }
    }, [timeLeft, duration]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
      <S.TimerStyled>
        Time left: {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </S.TimerStyled>
    );
  };

  return (
    <S.Wrap>
      {showTimer ? (
        <TimerComponent duration={15 * 60} />
      ) : (
        <>
          <S.QuestionBox>
            <components.Question
              questionsData={questionsData}
              oneSelectedQuestionId={setSelectedQuestionId}
              oneSelectedQuestionContent={setSelectedQuestionContent}
              currentIndex={currentIndex}
            />
          </S.QuestionBox>
          <S.CandidatesBox>
            <components.Candidates
              questionsData={questionsData}
              selectedQuestionId={selectedQuestionId}
              selectedQuestionContent={selectedQuestionContent}
              showNextQuestion={showNextQuestion}
            />
          </S.CandidatesBox>
        </>
      )}
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
    flex-shrink: 0;
  `,
  CandidatesBox: styled.div`
    flex-grow: 1;
    overflow-y: hidden;
  `,
  TimerStyled: styled.div`
    color: #ff0000;
    background-color: #ffff00;
    padding: 10px;
    border-radius: 5px;
    font-size: 2em;
  `,
};

export default Vote;
