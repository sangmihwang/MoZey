import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as components from "components";
import { candiChangeState } from "hooks";
import axios from "axios";
import { MdPersonSearch } from "react-icons/md";
import { BsPersonHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Candidates = ({ questionsData }) => {
  const { isCandiChangeOpen, toggleCandiChangeOpen } = candiChangeState();
  const [candidatesData, setCandidatesData] = useState([]);
  const [myuserId, setMyUserId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = 47;
        setMyUserId(userId);
        const response = await axios.get(
          `https://j9a510.p.ssafy.io/api/votes/candidates/${userId}`
        );
        setCandidatesData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchData();
  }, []); // 빈 의존성 배열을 전달하여 이 훅이 한 번만 실행되게

  const ChooseCandidate = async (chosen, qtnId, userId) => {
    try {
      const time = new Date().toISOString(); // 현재 시간을 ISO 문자열로 변환합니다.

      const postData = {
        qtnId,
        userId,
        chosen,
        time,
      };
      const response = await axios.post(
        `https://j9a510.p.ssafy.io/api/votes`,
        postData
      );

      console.log(response.data);
    } catch (error) {
      console.error("에러:", chosen, error);
    }
  };

  return (
    <S.Wrap>
      <S.CandidatesList>
        {candidatesData && (
          <>
            <S.CandidatesTop>
              {candidatesData.slice(0, 2).map((candidate) => (
                <S.CandidateBox key={candidate.userId}>
                  <CgProfile />
                  <S.NameBox
                    onClick={() =>
                      ChooseCandidate(
                        candidate.userId,
                        questionsData.qtnId,
                        myuserId
                      )
                    }
                  >
                    {candidate.name}
                  </S.NameBox>
                </S.CandidateBox>
              ))}
            </S.CandidatesTop>
            <S.CandidatesBottom>
              {candidatesData.slice(2, 4).map((candidate) => (
                <S.CandidateBox key={candidate.userId}>
                  <CgProfile />
                  <S.NameBox onClick={() => ChooseCandidate(candidate.name)}>
                    {candidate.name}
                  </S.NameBox>
                </S.CandidateBox>
              ))}
            </S.CandidatesBottom>
          </>
        )}
      </S.CandidatesList>
      <S.CandidatesChange>
        <S.ChangeButton>
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
    min-height: 100vh;
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
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
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
