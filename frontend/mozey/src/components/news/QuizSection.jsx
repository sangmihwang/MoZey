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
      const currentDate = new Date();
      let dateToFetch;

      if (currentDate.getUTCHours() >= 11) {
        dateToFetch = currentDate.toISOString().split('T')[0];
      } else {
        currentDate.setDate(currentDate.getUTCDate() - 1);
        dateToFetch = currentDate.toISOString().split('T')[0];
      }

      const savedQuizzes = localStorage.getItem('quizzes');
      const savedQuizDate = localStorage.getItem('quizDate');
      const savedQuizIndex = localStorage.getItem('currentQuizIndex');

      if (savedQuizzes && savedQuizIndex && savedQuizDate === dateToFetch) {
        // 저장된 퀴즈의 날짜와 현재 날짜가 같으면 그대로 유지
        setQuizzes(JSON.parse(savedQuizzes));
        setCurrentQuizIndex(parseInt(savedQuizIndex, 10));
      } else {
        try {
          const response = await axios.get(`https://j9a510.p.ssafy.io/api/quiz?date=${dateToFetch}`);
          
          const shuffledQuizzes = response.data.sort(() => 0.5 - Math.random());
          const selectedQuizzes = shuffledQuizzes.slice(0, 5);
          
          setQuizzes(selectedQuizzes);
          setCurrentQuizIndex(0);  // 새로운 퀴즈를 가져올 때는 인덱스를 0으로 초기화
          
          localStorage.setItem('quizzes', JSON.stringify(selectedQuizzes));
          localStorage.setItem('quizDate', dateToFetch);  // 퀴즈의 날짜도 로컬 스토리지에 저장
          localStorage.setItem('currentQuizIndex', '0');
        } catch (error) {
          console.error("퀴즈 데이터를 불러올 수 없습니다.", error);
        }
      }
    };

    fetchData();
  }, []);


  const checkAnswer = (answer) => {
    setShowModal(true);
    if (selectedChoice === answer) {
      setIsCorrect(true);
      setCurrentQuizIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        localStorage.setItem('currentQuizIndex', newIndex.toString());
        return newIndex;
      });
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
                {isCorrect ? "정답입니다!" : "틀렸습니다!"}
                <br /><br />
                {isCorrect ? "포인트가 적립되었습니다!" : "다시 한번 풀어보세요!"}
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
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  `,
  Modal: styled.div`
    background-color: ${({ theme }) => theme.color.background};
    padding: 20px;
    border-radius: 10px;
    width: 85%;
    min-height: 270px;
    max-width: 500px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `,
  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px; // 각 텍스트 사이의 간격을 조정
  `,
  ModalText: styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align: center; // 텍스트 가운데 정렬
    color: ${({ isCorrect }) => (isCorrect ? "green" : "red")};
    margin: 10px 0;
  `,
  ModalButton: styled.button`
    padding: 10px 20px;
    font-size: 18px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    &:hover {
      background-color: #555;
    }
  `,
  
};

export default QuizSection;