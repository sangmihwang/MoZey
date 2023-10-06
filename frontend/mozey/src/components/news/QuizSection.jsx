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

  const getUserFromLocalStorage = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) return null;

    const userState = JSON.parse(userInfo);
    return userState.state?.User || {};
  };

  const userData = getUserFromLocalStorage();

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = new Date();
      let dateToFetch;

      if (currentDate.getUTCHours() >= 2) {
        dateToFetch = currentDate.toISOString().split("T")[0];
      } else {
        currentDate.setDate(currentDate.getUTCDate() - 1);
        dateToFetch = currentDate.toISOString().split("T")[0];
      }

      const savedQuizzes = localStorage.getItem("quizzes");
      const savedQuizDate = localStorage.getItem("quizDate");
      const savedQuizIndex = localStorage.getItem("currentQuizIndex");

      if (savedQuizzes && savedQuizDate === dateToFetch) {
        // 저장된 퀴즈의 날짜와 현재 날짜가 같으면 그대로 유지
        setQuizzes(JSON.parse(savedQuizzes));
        setCurrentQuizIndex(savedQuizIndex ? parseInt(savedQuizIndex, 10) : 0);
      } else {
        try {
          const response = await axios.get(
            `https://j9a510.p.ssafy.io/api/quiz?date=${dateToFetch}`
          );

          const shuffledQuizzes = response.data.sort(() => 0.5 - Math.random());
          const selectedQuizzes = shuffledQuizzes.slice(0, 5);

          setQuizzes(selectedQuizzes);
          setCurrentQuizIndex(0); // 새로운 퀴즈를 가져올 때는 인덱스를 0으로 초기화

          localStorage.setItem("quizzes", JSON.stringify(selectedQuizzes));
          localStorage.setItem("quizDate", dateToFetch); // 퀴즈의 날짜도 로컬 스토리지에 저장
          localStorage.setItem("currentQuizIndex", "0");
        } catch (error) {
          console.error("퀴즈 데이터를 불러올 수 없습니다.", error);
        }
      }
    };

    fetchData();
  }, []);

  const checkAnswer = async (answer) => {
    setShowModal(true);
    if (selectedChoice === answer) {
      setIsCorrect(true);

      // 정답을 맞췄을 경우 포인트 획득 로직 추가
      const userId = userData.id;

      const requestBody = {
        "fromCoinName" : "None",
        "toCoinName" : "Point",
        "minusCoinAmount" : 0,
        "plusCoinAmount" : 100
      };

      try {
        const response = await axios.post(`https://j9a510.p.ssafy.io/api/coins/exchange/${userId}`, requestBody);
        
        if(response.status === 200) {
          console.log(response.data)
          // const updatedUserInfo = response.data;
          // const currentLocalStorageData = JSON.parse(localStorage.getItem('userInfo'));
          // currentLocalStorageData.state.User.point = updatedUserInfo.point;
          // localStorage.setItem('userInfo', JSON.stringify(currentLocalStorageData));
        } else {
          console.log('200이 반환되지 않음')
        }

      } catch (error) {
        console.error("POST 요청 중 오류 발생:", error);
      }

    } else {
      setIsCorrect(false);
    }
  };

  const moveToNextQuiz = () => {
    setShowModal(false);
    setSelectedChoice(null);
    if (isCorrect) {
      setCurrentQuizIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        localStorage.setItem("currentQuizIndex", newIndex.toString());
        return newIndex;
      });
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
                    100 포인트가 적립되었습니다!
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
        {quizzes.length > 0 && currentQuizIndex < quizzes.length ? (
          <>
            <S.QuizImage src={quizimg} alt="Quiz Thumbnail" />
            <S.QuizTitle>{quizzes[currentQuizIndex].question}</S.QuizTitle>
            <S.ChoicesContainer>
              {Object.entries(quizzes[currentQuizIndex].multipleChoice).map(
                ([key, choice]) => (
                  <S.ChoiceContainer key={key}>
                    <S.IconContainer>
                      {selectedChoice === choice ? (
                        <S.StyledGrCheckboxSelected />
                      ) : (
                        <S.StyledGrCheckbox />
                      )}
                    </S.IconContainer>
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
        ) : (
          currentQuizIndex >= quizzes.length && (
            <S.CompletedMessage>오늘의 퀴즈를 다 풀었어요</S.CompletedMessage>
          )
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
    background: ${({ theme }) => theme.color.background};
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
    word-break: keep-all;
    color: ${({ selected, theme }) =>
      selected ? theme.color.blue : theme.color.black};
    font-size: ${({ theme }) => theme.fontsize.title4};
    font-weight: ${({ selected }) => (selected ? 900 : 500)};
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
    z-index: 999;
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
    margin-top: 15px;
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
  IconContainer: styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  CompletedMessage: styled.h3`
    font-size: ${({ theme }) => theme.fontsize.title2};
    font-weight: 700;
    color: ${({ theme }) => theme.color.black};
    text-align: center;
    margin-top: 20px;
  `
};

export default QuizSection;
