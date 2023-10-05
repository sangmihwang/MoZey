import { useEffect, useState } from "react";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";

const DeleteAccount = () => {
  return (
    <S.Wrap>
      <button>회원탈퇴</button>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    width: 87.7%;
		margin-top: 24px;
    margin-bottom: 40px;
		
    > button {
			width: 100%;
			height: 33px;
			border-radius: 10px;
            background: ${({ theme }) => theme.color.red};
			color: ${({ theme }) => theme.color.white};
			box-shadow: ${({ theme }) => theme.shadow.card};
			text-align: center;
			font-size: 14px;
			font-weight: bold;
    }
    > button:hover {
      color: #040404;
    }
  `,
};

export default DeleteAccount;