import React, { useEffect, useState, useRef } from "react";
import useStore from "../../store/userInfoStore";
import { Routes, Route, Link } from 'react-router-dom'
import styled from "styled-components";
import * as utils from "utils";
import * as pages from "pages";
import axios from 'axios';
import PlusImage from "assets/images/icon-plus.png"
import CancelImage from "assets/images/icon-cancel.png"
import RequestImage from "assets/images/icon-request-btn.png"

const Main = () => {
  const userInfo = useStore((state) => state.User);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageInputRef = useRef(null);
	const qtnRef = useRef(null);

	const regist = async () => {
		try {
			axios.post("https://j9a510.p.ssafy.io/api/questions", {
				qtnContent: qtnRef.current.value,
				userId: userInfo.id,
				image: selectedImage,
			}).then((data) => {
				if(data.data.message === "질문 신청 등록 완료"){
					// console.log("질문 신청 성공");
					alert("작성해주신 질문을 신청했습니다. 감사합니다.");
					window.location.href = "/mypage";
				}
			}).catch((e) => {
				console.log(e);
				alert("질문 신청에 실패했습니다. 관리자에게 문의하세요.");
			})
		} catch (e) {
			console.log(e);
		}
	}

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
			// S3 업로드 코드 추가 작성 예정
    }
  };

  return (
    <S.Wrap>
      <S.Container>
        <S.AddImage>
          <input
            type="file"
            accept="image/*"
            ref={imageInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
          <img
            src={selectedImage || PlusImage}
            alt="plus"
            onClick={() => imageInputRef.current.click()}
						style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </S.AddImage>
        <S.AddQuestion>
          <input
            type="text"
						ref={qtnRef}
            placeholder="신청하고 싶은 질문을 입력해주세요"
          />
        </S.AddQuestion>
      </S.Container>
      <S.Btn>
        <button className="cancel">
          <img src={CancelImage} alt="cancel"></img>
          <Link to="/mypage">취소하기</Link>
        </button>
        <button className="request" onClick={regist}>
          <img src={RequestImage} alt="request"></img>
					신청하기
        </button>
      </S.Btn>
			<Routes>
			<Route path={utils.URL.MYPAGE.MAIN} element={<pages.Mypage />} />
			</Routes>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Container: styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 87.7%;
    padding: 10% 5% 10%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
  `,
  AddImage: styled.div`
    background: ${({ theme }) => theme.color.lightgray};
    width: 30vw;
    height: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
  `,
  AddQuestion: styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 80%;

    > input {
      background-color: ${({ theme }) => theme.color.background};
      width: 100%;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: bold;
      color: ${({ theme }) => theme.color.gray};
      text-align: center;
      padding: 3%;
      cursor: pointer;

      &:hover {
        outline: 2px solid ${({ theme }) => theme.color.lightgray};
        outline-offset: -2px;
      }
      &:focus {
        outline: 2px solid ${({ theme }) => theme.color.lightgray};
        outline-offset: -2px;
      }
    }
  `,
  Btn: styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 87.7%;

    > button {
      width: 40%;
      height: 40px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: bold;
      color: #040404;

      > img {
        margin-right: 10px;
      }
    }

    > .cancel {
      background-color: ${({ theme }) => theme.color.lightgray};
    }
    > .request {
      background-color: ${({ theme }) => theme.color.yellow};
    }
  `,
};

export default Main;
