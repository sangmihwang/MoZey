import React from "react";
import styled from "styled-components";
import * as components from "components";
import { BiSearch } from "react-icons/bi";

const CandidatesSearch = () => {
  return (
    <S.Wrap onClick={(e) => e.stopPropagation()}>
      <S.SearchBox>
        <S.StyledBiSearch />
        <S.SearchInput placeholder="친구의 이름을 입력하세요" maxlength="10" />
      </S.SearchBox>
      <S.FriendsList>친구 목록</S.FriendsList>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    background-color: ${({ theme }) => theme.color.background};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    padding: 20px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
    width: 80%;
    max-width: 500px;
  `,
  SearchBox: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    padding: 8px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
  FriendsList: styled.div`
    background-color: ${({ theme }) => theme.color.white};
    padding: 8px;
    margin-top: 10px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.shadow.card};
  `,
  StyledBiSearch: styled(BiSearch)`
    margin: 8px;
  `,
  SearchInput: styled.input`
    border: none;
    flex: 1;
    background-color: transparent;
    outline: none;
  `,
};

export default CandidatesSearch;
