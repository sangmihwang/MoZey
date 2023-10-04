import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const SignUpSuccess = () => {
  const navigate = useNavigate();

  return (
    <div>
      <S.Wrap>
        <S.Container>
          <table>
            <tbody>
              <tr>
                <td className="content">
                  Mozey
                </td>
              </tr>
              <tr>
                <td className="enterContent">
                  회원가입을 진심으로 환영합니다.
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => navigate('/mypage')} style={{ backgroundColor: "white" }}>
            홈으로
          </button>
        </S.Container>
      </S.Wrap>
    </div>
  );
}

const S = {
  Wrap: styled.div`
    background: ${({ theme }) => theme.color.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75vh;
  `,
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 87.7%;
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 7%;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    text-align: center;
    align-items: center;
    > button {
      background-color: ${({ theme }) => theme.color.yellow};
      color: ${({ theme }) => theme.color.darkgray};
      border-radius: 10px;
      width: 75%;
      height: 30px;
      font-weight: bold;
    }
    > table {
      width: 100%;
      margin-bottom: 40px;
    }
    > table > tbody > tr > .content {
      width: 25%;
      height: 15vh;
      text-align: center;
      line-height: 8vh;
      padding-rignt: 20px;
      font-size: 40px;
      font-weight: bold;
      color: ${({ theme }) => theme.color.black};
    }
    > table > tbody > tr > .enterContent {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  `,
};

export default SignUpSuccess;