import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { userInfoStore } from 'store/userInfoStore';
import styled from "styled-components";
import * as components from "components";

export default function UserInfo() {
  const S = {
    Wrap: styled.div`
      background: ${({ theme }) => theme.color.background};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 90vh;
    `,
    Title: styled.div`
      width: 87.7%;
      > h2 {
        font-size: 16px;
        font-weight: bold;
        color: #040404;
      }
    `,
    Container: styled.div`
      background: ${({ theme }) => theme.color.white};
      width: 87.7%;
      margin-top: 20px;
      margin-bottom: 20px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      padding: 7%;
      box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
      text-align: center;
      align-items: center;
      > button {
        margin-top: 16px;
        background-color: ${({ theme }) => theme.color.yellow};
        color: ${({ theme }) => theme.color.darkgray};
        border-radius: 10px;
        width: 50%;
        height: 30px;
        font-weight: bold;
      }
      > table {
        width: 100%;
        margin-bottom: 40px;
      }
      > table > tbody > tr > .content {
        width: 25%;
        height: 8vh;
        text-align: center;
        line-height: 8vh;
        padding-rignt: 20px;
        font-size: 14px;
        font-weight: bold;
        color: ${({ theme }) => theme.color.gray};
      }
      > table > tbody > tr > .enterContent > input {
        background-color: ${({ theme }) => theme.color.background};
        width: 100%;
        height: 5vh;
        border: none;
        border-radius: 10px;
        font-size: 14px;
        font-weight: bold;
        color: ${({ theme }) => theme.color.gray};
        text-align: center;
        padding: 3%;
        cursor: pointer;
      }
      > table > tbody > tr > .enterContent {
        width: 100%;
        text-align: left;
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > table > tbody > tr > .enterContent > label {
        display: flex;
        align-items: center;
      }
      > table > tbody > tr > td> label > span {
        font-size: 14px;
        font-weight: bold;
        color: ${({ theme }) => theme.color.gray};
        margin-right: 5px;
      }

    `,
  };
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };

  const [campus, setCampus] = useState("");
  const handleCampus = (e) => {
    setCampus(e.target.value);
  };

  const [group, setGroup] = useState("");
  const handleGroup = (e) => {
    setGroup(e.target.value);
  };

  const setUserInfo = userInfoStore((state) => state.setUserInfo);

  function submitUserInfo() {
    axios.post("https://j9a510.p.ssafy.io/api/users", {
      name: name,
      campus: campus,
      group: group,
      term: 9,
      email: localStorage.getItem("email"),
    }).then((res) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("email");
      setUserInfo(res.data);
      navigate('/success');
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <S.Wrap>
        <S.Container>
          <table>
            <tbody>
              <tr>
                <td className="content">이름</td>
                <td className="enterContent">
                  <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    value={name}
                    // onChange={(e) => setName(e.target.value)}
                    onChange={handleName}
                  />
                </td>
              </tr>
              <tr>
                <td className="content">캠퍼스</td>
                <td className="enterContent">
                  <select value={campus} onChange={handleCampus}>
                    <option value="서울">서울</option>
                    <option value="대전">대전</option>
                    <option value="광주">광주</option>
                    <option value="구미">구미</option>
                    <option value="부울경">부울경</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="content">기수</td>
                <td className="enterContent">
                  <input type="number" value="9" readOnly />
                </td>
              </tr>
              <tr>
                <td className="content">특화 반</td>
                <td className="enterContent">
                <select value={group} onChange={handleGroup}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={submitUserInfo}>가입하기</button>
        </S.Container>
      </S.Wrap>
    </div>
  );
}