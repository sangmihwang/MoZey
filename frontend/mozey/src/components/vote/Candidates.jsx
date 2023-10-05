import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as components from "components";
import { candiChangeState } from "hooks";
import axios from "axios";
import { MdPersonSearch } from "react-icons/md";
import { BsPersonHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import voteAPI from "../../api/voteAPI";
import useStore from "../../store/userInfoStore";

const Candidates = ({
  questionsData,
  selectedQuestionId,
  selectedQuestionContent,
  showNextQuestion,
}) => {
  const { isCandiChangeOpen, toggleCandiChangeOpen } = candiChangeState();
  const [candidatesData, setCandidatesData] = useState([]);
  const [myuserId, setMyUserId] = useState(null);
  const [fbToken, setfbToken] = useState(null);

  // 무작위로 배열 섞기 (Fisher-Yates shuffle 알고리즘)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // 배열 원소 교환
    }
    return array;
  }

  const shuffledCandidates = shuffleArray([...candidatesData]);
  const userInfo = useStore((state) => state.User);

  const fetchData = async () => {
    try {
      const userId = userInfo.id;
      setMyUserId(userId);
      const response = await axios.get(
        `https://j9a510.p.ssafy.io/api/users/friends/${userInfo.id}`
      );
      // console.log(userId);
      // console.log(userInfo.id);
      // console.log(response);
      setCandidatesData(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // 빈 의존성 배열을 전달하여 이 훅이 한 번만 실행되게
  const ChooseCandidate = async (chosen, qtnselectedQuestionIdId, userId) => {
    try {
      const time = new Date().toISOString(); // 현재 시간을 ISO 문자열로 변환합니다.
      console.log(time);

      // console.log(chosen, selectedQuestionId, userId);
      const postData = {
        qtnId: selectedQuestionId,
        userId: userId,
        chosen: chosen,

        // time,
      };
      const response = await voteAPI.postVoteNotification(postData);
      // console.log(response.data);
      setfbToken(response.data.data.fbToken);

      const encodedToken = response.data.data.fbToken;
      const decodedToken = decodeURIComponent(encodedToken);
      const postData2 = {
        targetUserId: decodedToken,
        title: selectedQuestionContent,
        body: "누군가가 당신에게 투표했습니다.",
        // img: 넣을예정..
      };
      const response2 = await voteAPI.sendNotification(postData2);
      console.log("Notification Data:", response2);
    } catch (error) {
      console.log("에러", error);
    }
  };

  return (
    <S.Wrap>
      <S.CandidatesList>
        {candidatesData && (
          <>
            <S.CandidatesTop>
              {shuffledCandidates.slice(0, 2).map((candidate) => (
                <S.CandidateBox key={candidate.userId}>
                  <CgProfile />
                  <S.NameBox
                    onClick={() => {
                      ChooseCandidate(
                        candidate.userId,
                        questionsData,
                        myuserId
                      );
                      showNextQuestion();
                    }}
                  >
                    {candidate.name}
                  </S.NameBox>
                </S.CandidateBox>
              ))}
            </S.CandidatesTop>
            <S.CandidatesBottom>
              {shuffledCandidates.slice(2, 4).map((candidate) => (
                <S.CandidateBox key={candidate.userId}>
                  <CgProfile />
                  <S.NameBox
                    onClick={() =>
                      ChooseCandidate(candidate.userId, questionsData, myuserId)
                    }
                  >
                    {candidate.name}
                  </S.NameBox>
                </S.CandidateBox>
              ))}
            </S.CandidatesBottom>
          </>
        )}
      </S.CandidatesList>
      <S.CandidatesChange>
        <S.ChangeButton onClick={fetchData}>
          <S.StyledBsPersonHeart />
          후보 교체
        </S.ChangeButton>

        <S.SearchButton onClick={toggleCandiChangeOpen}>
          <S.StyledMdPersonSearch />
          후보 검색
          {isCandiChangeOpen && (
            <S.ModalOverlay
              onClick={(e) => {
                e.stopPropagation();
                toggleCandiChangeOpen();
              }}
            >
              <components.CandidatesSearch />
            </S.ModalOverlay>
          )}
        </S.SearchButton>
      </S.CandidatesChange>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background-color: ${({ theme }) => theme.color.background};
  `,
  CandidatesList: styled.div``,
  CandidatesTop: styled.div`
    display: flex;
    justify-content: center;
  `,
  CandidatesBottom: styled.div`
    display: flex;
    justify-content: center;
  `,
  CandidateBox: styled.div`
    display: flex;
    align-items: center;
    width: 130px;
    margin: 10px;
    padding: 20px;
    font-weight: 700;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    transition: border 0.3s;

    &:hover {
      border-color: ${({ theme }) => theme.color.blue};
      box-shadow:
        0 0 5px ${({ theme }) => theme.color.blue},
        0 0 10px ${({ theme }) => theme.color.blue},
        0 0 15px ${({ theme }) => theme.color.blue};
    }
  `,
  CandidatesChange: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  `,
  ChangeButton: styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.color.yellow};
    margin: 12px 12px 12px 18px;
    padding: 4px 12px 4px 10px;
    align-items: center;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
  SearchButton: styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.color.yellow};
    margin: 12px 18px 12px 12px;
    padding: 4px 12px 4px 10px;
    align-items: center;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    &:hover {
      background-color: ${({ theme }) => theme.color.lightgray};
    }
  `,
  StyledBsPersonHeart: styled(BsPersonHeart)`
    margin: 8px;
  `,
  StyledMdPersonSearch: styled(MdPersonSearch)`
    margin: 8px;
  `,
  NameBox: styled.div`
    padding: 20px auto;
    margin-left: 16px;
    font-size: ${({ theme }) => theme.fontsize.title3};
  `,
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  `,
};

export default Candidates;
