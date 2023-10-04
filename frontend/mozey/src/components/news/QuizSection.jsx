import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import quizimg from "../../assets/images/icon-question-default.png";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
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
          dateToFetch = currentDate.toISOString().split("T")[0];
        } else {
          currentDate.setDate(currentDate.getDate() - 1);
          dateToFetch = currentDate.toISOString().split("T")[0];
        }

        const response = await axios.get(
          `https://j9a510.p.ssafy.io/api/quiz?date=${dateToFetch}`
        );

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
      setCurrentQuizIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <S.Wrap>
      {showModal && (
        <S.ModalOverlay>
          <S.Modal>
            <S.ModalContent isCorrect={isCorrect}>
              <S.ModalText>
                {isCorrect ? (
                  <>
                    정답입니다!
                    <br />
                    포인트가 적립되었습니다!
                  </>
                ) : (
                  <>
                    오답입니다!
                    <br />
                    다시 한번 풀어보세요!
                  </>
                )}
              </S.ModalText>
            </S.ModalContent>
            <S.ModalButton onClick={moveToNextQuiz}>
              {isCorrect ? "다음 문제" : "확인"}
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
              {Object.entries(quizzes[currentQuizIndex].multipleChoice).map(
                ([key, choice]) => (
                  <S.ChoiceContainer key={key}>
                    {selectedChoice === choice ? (
                      <S.StyledGrCheckboxSelected />
                    ) : (
                      <S.StyledGrCheckbox />
                    )}
                    <S.QuizChoice
                      selected={selectedChoice === choice}
                      onClick={() => setSelectedChoice(choice)}
                    >
                      {choice}
                    </S.QuizChoice>
                  </S.ChoiceContainer>
                )
              )}
            </S.ChoicesContainer>
            <S.CheckAnswerButton
              onClick={() => checkAnswer(quizzes[currentQuizIndex].answer)}
            >
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
    padding: 0 20px;
    background: ${({ theme }) => theme.color.background};
  `,
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 100%;
    border-radius: 10px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    overflow-y: auto;
    flex: 1;
  `,
  QuizImage: styled.img`
    width: 74px;
    height: 84px;
    margin: 20px;
    border-radius: 8px;
    object-fit: cover;
  `,
  QuizTitle: styled.h3`
    padding: 16px 20px 20px 20px;
    font-size: ${({ theme }) => theme.fontsize.title2};
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
    line-height: ${({ theme }) => theme.lineheight.quiztitle};
  `,
  ChoicesContainer: styled.div`
    width: 100%;
    padding: 0 20px 20px 40px;
    display: flex;
    flex-direction: column;
  `,
  ChoiceContainer: styled.div`
    display: flex;
    align-items: center;
  `,
  QuizChoice: styled.button`
    text-align: left;
    color: ${({ selected, theme }) =>
      selected ? theme.color.blue : theme.color.black};
    font-size: ${({ theme }) => theme.fontsize.title3};
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
  `,
  CheckAnswerButton: styled.button`
    background-color: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    padding: 12px 30px;
    margin-top: 15px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
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
  `,
  Modal: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 24px;
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
    text-align: center;
    font-size: ${({ theme }) => theme.fontsize.title2};
    line-height: ${({ theme }) => theme.lineheight.quiztitle};
    font-weight: 800;
    margin: 20px;
  `,
  ModalButton: styled.button`
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.fontsize.title4};
    background-color: ${({ theme }) => theme.color.red};
    color: white;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    cursor: pointer;
    &:hover {
      background-color: #555;
    }
  `,
  StyledGrCheckbox: styled(GrCheckbox)`
    color: ${({ theme }) => theme.color.black};
  `,
  StyledGrCheckboxSelected: styled(GrCheckboxSelected)`
    color: ${({ theme }) => theme.color.blue};
  `,
};

export default QuizSection;
