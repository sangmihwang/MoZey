import { useEffect, useState } from "react";
import useStore from "../../store/userInfoStore";
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios';
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import RequestImage from "assets/images/icon-request.png"
import QuestionImage from "assets/images/icon-question-default.png"

const Main = () => {
  const userInfo = useStore((state) => state.User);
  const [status, setStatus] = useState('P');
  const [pageIdx, setPageIdx] = useState(0);
  const [list, setList] = useState([]);
  const [hasNext, setHasNext] = useState(false);

  const getP = async () => {
    try {
      if (status === 'Y') {
        setStatus('P');
        setPageIdx(0);
        setList([]);
      }
      const id = userInfo.id;
      await axios.get("https://j9a510.p.ssafy.io/api/questions/users/${id}/P/?pageIdx=${pageIdx}")
        .then((data) => {
          if (data.data.message === "질문 신청 내역 조회 - 사용자") {
            setList(list.concat(data.data.data));
            setPageIdx(pageIdx + 1);
            setHasNext(data.data.hasNext);
          }
        })
    } catch (e) {
      console.log(e);
    }
  };

  const getY = async () => {
    try {
      if (status === 'P') {
        setStatus('Y');
        setPageIdx(0);
        setList([]);
      }
      const id = userInfo.id;
      await axios.get("https://j9a510.p.ssafy.io/api/questions/users/${id}/Y/?pageIdx=${pageIdx}")
        .then((data) => {
          if (data.data.message === "질문 신청 내역 조회 - 사용자") {
            setList(list.concat(data.data.data));
            setPageIdx(pageIdx + 1);
            setHasNext(data.data.hasNext);
          }
        })
    } catch (e) {
      console.log(e);
    }
  };

  const deleteQtn = (qtnId) => {
    try {
      axios.delete("https://j9a510.p.ssafy.io/api/questions/${qtnId}")
        .then((data) => {
          alert("신청한 질문을 삭제했습니다");
          window.location.href = "/mypage";
        })
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getP();
  }, []);

  return (
    <S.Wrap>
      <S.Top>
        <S.Title>
          <h2>질문 신청 내역</h2>
        </S.Title>
        <S.Search>
          <select name="status" id="status">
            <option value="P" onClick={getP}>대기</option>
            <option value="Y" onClick={getY}>승인</option>
          </select>
          <button>
            <img src={RequestImage} alt="request" />
            <Link to="/request">질문신청</Link>
          </button>
        </S.Search>
      </S.Top>
      <S.Container>
        <ul>
          {list.map(qtn => (
            <S.Question>
              <S.QuestionImgBox>
                {qtn.image === null
                  ? (<img src={QuestionImage} alt="profile" />)
                  : (<img src={qtn.image} alt="profile" />)
                }
              </S.QuestionImgBox>
              <S.QuestionInfo>
                <h2>{qtn.qtnContent}</h2>
              </S.QuestionInfo>
              <S.QuestionPBtn>
                {status === 'P'
                  ? (<button onClick={deleteQtn(qtn.qtnId)}>삭제</button>)
                  : (null)
                }
                {status === 'P'
                  ? (<p>대기</p>)
                  : (<p>승인</p>)
                }
              </S.QuestionPBtn>
            </S.Question>
          ))}
        </ul>
        {status === 'P' && hasNext === true && (
          <button onClick={getP}>더보기</button>
        )}
        {status === 'Y' && hasNext === true && (
          <button onClick={getY}>더보기</button>
        )}
      </S.Container>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
	margin-top: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	`,
  Top: styled.div`
		width: 87.7%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`,
  Title: styled.div`
	font-size: 16px;
	font-weight: bold;
	color: #040404;
    `,
  Search: styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		> select {
			background-color: ${({ theme }) => theme.color.white};
			color: ${({ theme }) => theme.color.gray};
			box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
			border-radius: 10px;
			width: 60px;
			height: 25px;
			font-size: 14px;
			font-weight: bold;
			padding-left: 4%;
			margin-right: 10px;
			border: none;
			cursor: pointer;
		}
		> select:hover {
			background-color: #FBF7EF;
		}
		> select option {
			background-color: ${({ theme }) => theme.color.white};
			color: ${({ theme }) => theme.color.gray};
			font-weight: bold;
		}

		> button {
		background-color: ${({ theme }) => theme.color.white};
		color: ${({ theme }) => theme.color.lightgray};
		box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
		border-radius: 10px;
		width: 83px;
		height: 25px;
		font-size: 14px;
		font-weight: bold;
		display: flex;
    align-items: center;
    justify-content: center;
		}
		> button:hover {
    	background: #FBF7EF;
  	}
	`,
  Container: styled.div`
		background: ${({ theme }) => theme.color.white};
    width: 87.7%;
    border-radius: 10px;
		margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 3% 7% 3%;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.25);
    overflow-y: auto;
		max-height: 250px;

		> ul > li {
			width: 100%;
		}
		> button {
			margin-top: 16px;
			background-color: ${({ theme }) => theme.color.yellow};
      color: ${({ theme }) => theme.color.darkgray};
      border-radius: 10px;
      width: 80px;
      height: 20px;
      font-weight: bold;
		}
    `,
  Question: styled.div`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 5%;
  `,
  QuestionImgBox: styled.div`
	width: 12yw;
	height: 12vw;
	background: ${({ theme }) => theme.color.background};
	border-radius: 70%;
	overflow: hidden;
	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	`,
  QuestionInfo: styled.div`
		text-align: left;
		width: 50%;
		
		> h2 {
			font-size: 12px;
			font-weight: bold;
			margin-left: 5%;
			color: #040404;
			white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
		}
	`,
  QuestionPBtn: styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 30%;

	> button {
		background-color: ${({ theme }) => theme.color.lightgray};
		color: ${({ theme }) => theme.color.white};
		border-radius: 10px;
		width: 40px;
		height: 20px;
		font-size: 12px;
		font-weight: bold;
		margin: auto;
	}
	> p {
		background-color: ${({ theme }) => theme.color.yellow};
		color: ${({ theme }) => theme.color.white};
		border-radius: 10px;
		width: 40px;
		height: 20px;
		font-size: 12px;
		font-weight: bold;
		text-align: center;
		margin-left: 5%;
		line-height: 20px;
	}
	`,
};

export default Main;