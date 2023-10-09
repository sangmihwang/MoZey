import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { userInfoStore } from "store/userInfoStore";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const deleteUserInfo = userInfoStore((state) => state.deleteUserInfo);

  return (
    <S.Wrap>
      <button
        onClick={() => {
          deleteUserInfo();
          navigate("/");
        }}
      >
        로그아웃
      </button>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    width: 150px;
    margin-top: 40px;

    > button {
      width: 100%;
      height: 40px;
      border-radius: 10px;
      background: ${({ theme }) => theme.color.gray};
      color: ${({ theme }) => theme.color.white};
      box-shadow: ${({ theme }) => theme.shadow.card};
      text-align: center;
      font-size: 14px;
      font-weight: bold;
    }
    > button:hover {
      color: ${({ theme }) => theme.color.gray};
      border: 1px solid ${({ theme }) => theme.color.gray};
      background-color: ${({ theme }) => theme.color.white};
    }
  `,
};

export default Logout;
