import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import * as components from "components";
import { FcAlarmClock } from "react-icons/fc";

const Vote = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [showTimer, setShowTimer] = useState(true);

  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) return null;

    const userState = JSON.parse(userInfo);
    return userState.state?.User || {};
  };

  const userData = getUserFromLocalStorage();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedStartTime = localStorage.getItem("startTime");
    if (storedStartTime) {
      setShowTimer(true);
    } else {
      setShowTimer(false);
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://j9a510.p.ssafy.io/api/votes/questions`
      );
      setQuestionsData(response.data.data);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 포인트 획득 하고 타이머 띄우기
  const handleConfirm = async () => {
    setShowModal(false);
    const userId = userData.id;

    const requestBody = {
      fromCoinName: "None",
      toCoinName: "Point",
      minusCoinAmount: 0,
      plusCoinAmount: 200,
    };

    try {
      const response = await axios.post(
        `https://j9a510.p.ssafy.io/api/coins/exchange/${userId}`,
        requestBody
      );

      if (response.status === 200) {
        console.log(response.data);
        // const updatedUserInfo = response.data;
        // const currentLocalStorageData = JSON.parse(localStorage.getItem('userInfo'));
        // currentLocalStorageData.state.User.point = updatedUserInfo.point;
        // localStorage.setItem('userInfo', JSON.stringify(currentLocalStorageData));
      } else {
        console.log("200이 반환되지않음");
      }
    } catch (error) {
      console.error("POST 요청 중 오류 발생:", error);
    }
    if (!localStorage.getItem("startTime")) {
      // 타이머 띄우기
      localStorage.setItem("startTime", new Date().toISOString());
    }
    setShowTimer(true);
  };

  const showNextQuestion = () => {
    if (currentIndex < questionsData.length - 1) {
      console.log("지금상태", currentIndex, questionsData.length);
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === questionsData.length - 1) {
      setShowModal(true);
    }
  };
  const progressPercentage = ((currentIndex + 1) / questionsData.length) * 100;
  let progressBarClass = "";
  if (progressPercentage <= 12.5) {
    progressBarClass = "one-eighth";
  } else if (progressPercentage <= 25) {
    progressBarClass = "two-eighth";
  } // ... 추가적으로 다른 진행도에 따른 클래스를 설정할 수 있습니다.
  else if (progressPercentage === 100) {
    progressBarClass = "full";
  }
  const TimerComponent = ({ duration }) => {
    const calculateTimeLeft = () => {
      const startTime = localStorage.getItem("startTime");
      const timePassed = Math.floor((new Date() - new Date(startTime)) / 1000);
      return duration - timePassed;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      if (timeLeft > 0) {
        const intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
      } else {
        localStorage.removeItem("startTime");
        setShowTimer(false);
        fetchData(); // 타이머가 끝나면 데이터 갱신해야함
      }
    }, [timeLeft, duration]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
      <S.TimerStyled>
        <FcAlarmClock size={32} />
        Time left: {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </S.TimerStyled>
    );
  };

  return (
    <S.Wrap>
      {showModal && (
        <S.ModalOverlay>
          <S.Modal>
            <S.ModalContent>
              다음 질문이 기다려요
              <br />
              200 포인트를 획득!
            </S.ModalContent>
            <S.ConfirmButton onClick={handleConfirm}>확인</S.ConfirmButton>
          </S.Modal>
        </S.ModalOverlay>
      )}

      {showTimer ? (
        <>
          <TimerComponent duration={15 * 60} />
        </>
      ) : (
        <>
          <S.QuestionBox>
            <S.ProgressBarContainer>
              <S.ProgressBar
                className={progressBarClass}
                style={{ width: `${progressPercentage}%` }}
              >
                {currentIndex}/{questionsData.length}
              </S.ProgressBar>
            </S.ProgressBarContainer>
            <components.Question
              questionsData={questionsData}
              currentIndex={currentIndex}
            />
          </S.QuestionBox>
          <S.CandidatesBox>
            <components.Candidates
              questionsData={questionsData}
              currentIndex={currentIndex}
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.red};
    padding: 15px 30px;
    border-radius: 20px;
    font-size: 1.5em;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin: 20px;

    svg {
      margin-right: 10px;
    }
  `,
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  `,
  Modal: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    padding: 10px 20px;
    border-radius: 10px;
    width: 70%;
    height: 30%;
    min-height: 150px;
    max-width: 500px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `,
  ModalContent: styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.fontsize.title3};
    line-height: ${({ theme }) => theme.lineheight.quiztitle};
    font-weight: 700;
    margin: 20px;
  `,
  ConfirmButton: styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.red};
      color: ${({ theme }) => theme.color.red};
    }
  `,
  // 프로세스 바 만들기
  ProgressBarContainer: styled.div`
    width: 100%;
    background-color: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 5px;
  `,

  ProgressBar: styled.div`
    height: 25px;
    background-color: #ffd94a;
    border-radius: 4px;
    text-align: center;
    line-height: 25px;
    color: #000;
    transition: width 0.3s;

    /* 1/8 진행 */
    &.one-eighth {
      width: 12.5%;
    }

    /* 2/8 진행 */
    &.two-eighth {
      width: 25%;
    }

    /* 8/8 진행 (완료) */
    &.full {
      width: 100%;
    }
  `,
};

export default Vote;
