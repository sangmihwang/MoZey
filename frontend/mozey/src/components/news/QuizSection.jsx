import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import quizimg from "../../assets/images/icon-question-default.png";

const QuizSection = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();
        let dateToFetch;

        if (currentDate.getHours() >= 12) {
          dateToFetch = currentDate.toISOString().split('T')[0];
        } else {
          currentDate.setDate(currentDate.getDate() - 1);
          dateToFetch = currentDate.toISOString().split('T')[0];
        }

        const response = await axios.get(`https://j9a510.p.ssafy.io/api/quiz?date=${dateToFetch}`);
        
        // Randomly select 5 quizzes
        const shuffledQuizzes = response.data.sort(() => 0.5 - Math.random());
        const selectedQuizzes = shuffledQuizzes.slice(0, 5);
        
        setQuizzes(selectedQuizzes);
      } catch (error) {
        console.error("퀴즈데이터 안불러와짐", error);
      }
    };

    fetchData();
  }, []);

  const checkAnswer = (answer) => {
    setShowModal(true);
    if (selectedChoice === answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const moveToNextQuiz = () => {
    setShowModal(false);
    setSelectedChoice(null);
    if (isCorrect) {
      setCurrentQuizIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <S.Wrap>
      {showModal && (
        <S.ModalOverlay>
          <S.Modal>
            <S.ModalContent isCorrect={isCorrect}>
              <S.ModalText>
                {isCorrect ? "정답입니다!" : "틀렸습니다! 다시 한번 풀어보세요!"}
              </S.ModalText>
            </S.ModalContent>
            <S.ModalButton onClick={moveToNextQuiz}>
              {isCorrect ? "다음 문제로" : "닫기"}
            </S.ModalButton>
          </S.Modal>
        </S.ModalOverlay>
      )}
      <S.Container>
        {quizzes.length > 0 && currentQuizIndex < quizzes.length && (
          <>
            <S.QuizImage src={quizimg} alt="Quiz Thumbnail" />
            <S.QuizTitle>{quizzes[currentQuizIndex].question}</S.QuizTitle>
            <S.ChoicesContainer>
              {Object.entries(quizzes[currentQuizIndex].multipleChoice).map(([key, choice]) => (
                <S.QuizChoice 
                  key={key} 
                  selected={selectedChoice === choice}
                  onClick={() => setSelectedChoice(choice)}
                >
                  {choice}
                </S.QuizChoice>
              ))}
            </S.ChoicesContainer>
            <S.CheckAnswerButton onClick={() => checkAnswer(quizzes[currentQuizIndex].answer)}>
              정답 확인하기
            </S.CheckAnswerButton>
          </>
        )}
      </S.Container>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    margin-top: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 108px - 73px);
    padding: 0 3%;  
    background: ${({ theme }) => theme.color.background};
  `,
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3% 3%;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    overflow-y: auto;
    flex: 1;
  `,
  QuizImage: styled.img`
    width: 74px;
    height: 84px;
    margin-bottom: 10px;
    border-radius: 8px;
    object-fit: cover;
  `,
  QuizTitle: styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: #040404;
    margin-bottom: 30px;
  `,
  ChoicesContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,
  QuizChoice: styled.button`
    background-color: ${({ selected }) => (selected ? "#f0f0f0" : "#ffffff")};
    border: 1px solid #e0e0e0;
    color: #333;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e0e0e0;
    }
  `,
  CheckAnswerButton: styled.button`
    background-color: ${({ theme }) => theme.color.red};
    color: #333;
    font-size: 16px;
    padding: 8px 16px;
    margin-top: 15px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #d0d0d0;
    }
  `,
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Modal: styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  `,
  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  ModalImage: styled.img`
    width: 100%;
    height: auto;
  `,
  ModalText: styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${({ isCorrect }) => (isCorrect ? "green" : "red")};
    margin: 20px 0;
  `,
  ModalButton: styled.button`
    padding: 10px 20px;
    font-size: 18px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #555;
    }
  `,
  
};

export default QuizSection;
