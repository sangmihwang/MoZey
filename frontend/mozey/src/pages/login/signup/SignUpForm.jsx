import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userInfoStore } from "store/userInfoStore";
import styled from "styled-components";
import * as components from "components";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [nameError, setNameError] = useState("");
  const [groupError, setGroupError] = useState("");
  const [campus, setCampus] = useState("서울");

  const handleCampus = (e) => {
    setCampus(e.target.value);
  };

  const [group, setGroup] = useState("");
  const setUserInfo = userInfoStore((state) => state.setUserInfo);

  const nameRef = useRef(null);

  const submitUserInfo = async () => {
    let hasError = false;

    if (!nameRef.current.value.trim()) {
        setNameError("이름을 입력해주세요!");
        hasError = true;
    } else {
        setNameError("");
    }

    if (!group.trim()) {
        setGroupError("특화 반을 입력해주세요!");
        hasError = true;
    } else {
        setGroupError("");
    }

    if (hasError) return;

    const myCampus = campus || "서울";  // campus 값이 빈 문자열이면 "서울"을 default 값으로
    const requestData = {
        name: nameRef.current.value,
        campus: myCampus,
        group: group,
        term: 9,
        email: localStorage.getItem("email"),
    };
    console.log("Submitting the following data:", requestData);

    axios
      .post("https://j9a510.p.ssafy.io/api/users", requestData)
      .then((res) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("email");
        setUserInfo(res.data);
        navigate("/success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                    placeholder={nameError ? "이름을 입력해주세요!" : "이름을 입력하세요"}
                    ref={nameRef}
                  />
                </td>
              </tr>
              <tr>
                <td className="content">캠퍼스</td>
                <td className="enterContent">
                  <S.StyledSelect value={campus} onChange={handleCampus}>
                    <option value="서울" selected>서울</option>
                    <option value="대전">대전</option>
                    <option value="광주">광주</option>
                    <option value="구미">구미</option>
                    <option value="부울경">부울경</option>
                  </S.StyledSelect>
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
                  <input
                    type="number"
                    min="1"
                    max="7"
                    value={group}
                    placeholder={groupError ? "특화 반을 입력해주세요!" : "특화반을 입력하세요"}
                    onChange={(e) => setGroup(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={submitUserInfo}>가입하기</button>
        </S.Container>
      </S.Wrap>
    </div>
  );
};

const S = {
  Wrap: styled.div`
    background: ${({ theme }) => theme.color.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
    margin-top: 0px;
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 7%;
    box-shadow: ${({ theme }) => theme.shadow.card};
    text-align: center;
    align-items: center;
    > button {
      background-color: ${({ theme }) => theme.color.yellow};
      color: ${({ theme }) => theme.color.white};
      border-radius: 10px;
      width: 75%;
      height: 40px;
      font-weight: 700;
      box-shadow: ${({ theme }) => theme.shadow.card};

      &:hover {
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.yellow};
        border: 1px solid ${({ theme }) => theme.color.yellow};
      }
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
      font-size: ${({ theme }) => theme.fontsize.title3};
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
    > table > tbody > tr > td > label > span {
      font-size: 12px;
      font-weight: bold;
      color: ${({ theme }) => theme.color.gray};
    }
  `,
  StyledSelect: styled.select`
    height: 5vh;
    width: 100%;
    background-color: ${({ theme }) => theme.color.background};
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.gray};
    text-align: center;
    padding: 3%;
    cursor: pointer;
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.color.yellow};
    }
    > option {
      font-size: 14px;
      padding: 3%;
      color: ${({ theme }) => theme.color.gray};
    }
  `,
};

export default SignUpForm;
