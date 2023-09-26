import { useEffect, useState } from "react";
// import {} from "./config/firebase";
import React from "react";
import styled from "styled-components";
import RequestImage from "assets/images/icon-request.png"
import QuestionImage from "assets/images/icon-qeustion-default.png"
import { isVisible } from "@testing-library/user-event/dist/utils";

const Main = () => {
	const [showButtons, setShowButtons] = useState(true);

	return (
		<S.Wrap>
			<S.Top>
				<S.Title>
					<h2>질문 신청 내역</h2>
				</S.Title>
				<S.Search>
					<select name="status" id="status">
						<option value="P">대기</option>
						<option value="Y">승인</option>
					</select>
					<button>
						<img src={RequestImage} alt="request" />
						질문신청
					</button>
				</S.Search>
			</S.Top>
			<S.Container>
				<ul>
					<S.Question>
						<S.QuestionImgBox>
							<img src={QuestionImage} alt="profile" />
						</S.QuestionImgBox>
						<S.QuestionInfo>
							<h2>자신만의 색을 가진 사람</h2>
						</S.QuestionInfo>
						<S.QuestionPBtn>
							{showButtons && <button>삭제</button>}
							<p>대기</p>
						</S.QuestionPBtn>
					</S.Question>
					<S.Question>
						<S.QuestionImgBox>
							<img src={QuestionImage} alt="profile" />
						</S.QuestionImgBox>
						<S.QuestionInfo>
							<h2>밥 잘 사주는 사람</h2>
						</S.QuestionInfo>
						<S.QuestionPBtn>
							{showButtons && <button>삭제</button>}
							<p>대기</p>
						</S.QuestionPBtn>
					</S.Question>
					<S.Question>
						<S.QuestionImgBox>
							<img src={QuestionImage} alt="profile" />
						</S.QuestionImgBox>
						<S.QuestionInfo>
							<h2>자율 프로젝트 함께 하고 싶은 사람</h2>
						</S.QuestionInfo>
						<S.QuestionPBtn>
							{/* {showButtons && <button>삭제</button>} */}
							<p>승인</p>
						</S.QuestionPBtn>
					</S.Question>
					<S.Question>
						<S.QuestionImgBox>
							<img src={QuestionImage} alt="profile" />
						</S.QuestionImgBox>
						<S.QuestionInfo>
							<h2>프론트 G.O.A.T</h2>
						</S.QuestionInfo>
						<S.QuestionPBtn>
							{/* {showButtons && <button>삭제</button>} */}
							{/* 승인의 경우, background blue로 설정할 것 */}
							<p>승인</p>
						</S.QuestionPBtn>
					</S.Question>
				</ul>
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