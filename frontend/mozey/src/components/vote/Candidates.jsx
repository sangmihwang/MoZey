import React, { useState } from "react";
import styled from "styled-components";
import * as components from "components";
import { candiChangeState } from "hooks";

import { MdPersonSearch } from "react-icons/md";
import { BsPersonHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Candidates = () => {
  const { isCandiChangeOpen, toggleCandiChangeOpen } = candiChangeState();

  return (
    <S.Wrap>
      <S.CandidatesList>
        <S.CandidatesTop>
          <S.CandidateBox>
            <CgProfile />
            <S.NameBox>지한얼</S.NameBox>
          </S.CandidateBox>
          <S.CandidateBox>
            <CgProfile />
            <S.NameBox>이민웅</S.NameBox>
          </S.CandidateBox>
        </S.CandidatesTop>
        <S.CandidatesBottom>
          <S.CandidateBox>
            <CgProfile />
            <S.NameBox>임병국</S.NameBox>
          </S.CandidateBox>
          <S.CandidateBox>
            <CgProfile />
            <S.NameBox>조윤상</S.NameBox>
          </S.CandidateBox>
        </S.CandidatesBottom>
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
